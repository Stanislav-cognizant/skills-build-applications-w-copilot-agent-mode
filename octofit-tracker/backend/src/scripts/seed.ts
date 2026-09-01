import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await LeaderboardEntry.deleteMany({});
    await Workout.deleteMany({});

    const users = await User.insertMany([
      {
        name: 'Ada Johnson',
        email: 'ada.johnson@octofit.com',
        role: 'admin',
        fitnessLevel: 'advanced',
      },
      {
        name: 'Marcus Lee',
        email: 'marcus.lee@octofit.com',
        role: 'member',
        fitnessLevel: 'intermediate',
      },
      {
        name: 'Priya Shah',
        email: 'priya.shah@octofit.com',
        role: 'member',
        fitnessLevel: 'beginner',
      },
      {
        name: 'Noah Kim',
        email: 'noah.kim@octofit.com',
        role: 'coach',
        fitnessLevel: 'advanced',
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Trail Blazers',
        captain: 'Ada Johnson',
        members: [users[0]._id, users[1]._id],
        goal: 'Complete 500 km this month',
      },
      {
        name: 'Sunrise Striders',
        captain: 'Priya Shah',
        members: [users[2]._id, users[3]._id],
        goal: 'Increase weekly mobility and endurance',
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'run',
        durationMinutes: 42,
        caloriesBurned: 420,
        date: new Date('2026-09-01T06:30:00Z'),
      },
      {
        userId: users[1]._id,
        type: 'strength',
        durationMinutes: 35,
        caloriesBurned: 280,
        date: new Date('2026-09-01T18:00:00Z'),
      },
      {
        userId: users[2]._id,
        type: 'yoga',
        durationMinutes: 25,
        caloriesBurned: 160,
        date: new Date('2026-09-02T07:15:00Z'),
      },
      {
        userId: users[3]._id,
        type: 'cycling',
        durationMinutes: 50,
        caloriesBurned: 510,
        date: new Date('2026-09-02T17:45:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: users[0]._id,
        name: 'Ada Johnson',
        score: 985,
      },
      {
        userId: users[1]._id,
        name: 'Marcus Lee',
        score: 892,
      },
      {
        userId: users[2]._id,
        name: 'Priya Shah',
        score: 760,
      },
      {
        userId: users[3]._id,
        name: 'Noah Kim',
        score: 930,
      },
    ]);

    await Workout.insertMany([
      {
        name: 'HIIT Burn',
        category: 'cardio',
        durationMinutes: 30,
        difficulty: 'advanced',
      },
      {
        name: 'Core Stability',
        category: 'strength',
        durationMinutes: 25,
        difficulty: 'intermediate',
      },
      {
        name: 'Mobility Flow',
        category: 'recovery',
        durationMinutes: 20,
        difficulty: 'beginner',
      },
      {
        name: 'Sprint Ladder',
        category: 'cardio',
        durationMinutes: 28,
        difficulty: 'advanced',
      },
    ]);

    console.log('Seeded users:', users.length);
    console.log('Seeded teams:', teams.length);
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
