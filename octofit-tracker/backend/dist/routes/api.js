import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';
const router = Router();
const serializeDoc = (doc) => {
    if (!doc) {
        return null;
    }
    const { _id, ...rest } = doc;
    return {
        id: _id?.toString?.(),
        ...rest,
    };
};
router.get('/users', async (_req, res) => {
    const users = await User.find({}).lean();
    res.json(users.map((user) => serializeDoc(user)));
});
router.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id).lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(serializeDoc(user));
});
router.get('/teams', async (_req, res) => {
    const teams = await Team.find({}).populate('members').lean();
    res.json(teams.map((team) => serializeDoc(team)));
});
router.get('/teams/:id', async (req, res) => {
    const team = await Team.findById(req.params.id).populate('members').lean();
    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }
    return res.json(serializeDoc(team));
});
router.get('/activities', async (_req, res) => {
    const activities = await Activity.find({}).populate('userId').lean();
    res.json(activities.map((activity) => serializeDoc(activity)));
});
router.get('/activities/:id', async (req, res) => {
    const activity = await Activity.findById(req.params.id).populate('userId').lean();
    if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
    }
    return res.json(serializeDoc(activity));
});
router.get('/leaderboard', async (_req, res) => {
    const leaderboard = await LeaderboardEntry.find({}).populate('userId').lean();
    res.json(leaderboard.map((entry) => serializeDoc(entry)));
});
router.get('/leaderboard/:id', async (req, res) => {
    const entry = await LeaderboardEntry.findById(req.params.id).populate('userId').lean();
    if (!entry) {
        return res.status(404).json({ message: 'Leaderboard entry not found' });
    }
    return res.json(serializeDoc(entry));
});
router.get('/workouts', async (_req, res) => {
    const workouts = await Workout.find({}).lean();
    res.json(workouts.map((workout) => serializeDoc(workout)));
});
router.get('/workouts/:id', async (req, res) => {
    const workout = await Workout.findById(req.params.id).lean();
    if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
    }
    return res.json(serializeDoc(workout));
});
export default router;
