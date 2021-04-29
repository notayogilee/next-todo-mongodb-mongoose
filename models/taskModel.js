import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title.']
  },
  body: {
    type: String,
    required: [true, 'Please provide a short description of the task.']
  },
  priority: {
    type: Number,
    required: [true, 'Please provide a level of priority.'],
    min: 1,
    max: 5,
    default: 1
  }
})

const Task = mongoose.model('Task', taskSchema)

export default Task