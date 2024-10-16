const express = require('express')
const {addWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

//create an instance of the router
const router = express.Router()

router.use(requireAuth)

//GET all Workouts
router.get('/', getAllWorkouts)

//GET a Single Workout
router.get('/:id', getSingleWorkout)

//POST a new workout
router.post('/', addWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router
