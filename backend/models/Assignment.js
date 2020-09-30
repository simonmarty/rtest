import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxGrade: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  optional: {
    type: Boolean,
    default: false,
  },
  locked: {
    type: Boolean,
    default: true,
  },
  instructions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "file",
  },
  submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "submission",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;
