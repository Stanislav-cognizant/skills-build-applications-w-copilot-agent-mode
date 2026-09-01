export const users = [
  {
    id: 'u1',
    name: 'Ada Johnson',
    email: 'ada@example.com',
    role: 'admin',
    fitnessLevel: 'advanced',
  },
  {
    id: 'u2',
    name: 'Marcus Lee',
    email: 'marcus@example.com',
    role: 'member',
    fitnessLevel: 'intermediate',
  },
  {
    id: 'u3',
    name: 'Priya Shah',
    email: 'priya@example.com',
    role: 'member',
    fitnessLevel: 'beginner',
  },
];

export const teams = [
  {
    id: 't1',
    name: 'Trail Blazers',
    captain: 'Ada Johnson',
    members: ['u1', 'u2'],
    goal: 'Complete 500km this month',
  },
  {
    id: 't2',
    name: 'Sunrise Striders',
    captain: 'Priya Shah',
    members: ['u3'],
    goal: 'Improve endurance and recovery',
  },
];

export const activities = [
  {
    id: 'a1',
    userId: 'u1',
    type: 'run',
    durationMinutes: 42,
    caloriesBurned: 420,
    date: '2026-09-01',
  },
  {
    id: 'a2',
    userId: 'u2',
    type: 'strength',
    durationMinutes: 35,
    caloriesBurned: 280,
    date: '2026-09-01',
  },
  {
    id: 'a3',
    userId: 'u3',
    type: 'yoga',
    durationMinutes: 24,
    caloriesBurned: 150,
    date: '2026-09-01',
  },
];

export const leaderboard = [
  { id: 'lb1', userId: 'u1', name: 'Ada Johnson', score: 985 },
  { id: 'lb2', userId: 'u2', name: 'Marcus Lee', score: 890 },
  { id: 'lb3', userId: 'u3', name: 'Priya Shah', score: 760 },
];

export const workouts = [
  {
    id: 'w1',
    name: 'HIIT Burn',
    category: 'cardio',
    durationMinutes: 30,
    difficulty: 'advanced',
  },
  {
    id: 'w2',
    name: 'Core Stability',
    category: 'strength',
    durationMinutes: 25,
    difficulty: 'intermediate',
  },
  {
    id: 'w3',
    name: 'Mobility Flow',
    category: 'recovery',
    durationMinutes: 20,
    difficulty: 'beginner',
  },
];
