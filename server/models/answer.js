const mongoose = require("mongoose");


const User = require('../models/user')
const Question = require('../models/question')

const Schema = mongoose.Schema;

const answerSchema = new Schema({
     answer: {
          type: String,
          required: [true,"Please enter an Answer"],
          minlength: [2,"Minimum question length is 2 characters"]
     },
     user:{
          type: Schema.Types.ObjectId,
          ref : User
      },
    
 question: {
      type: Schema.Types.ObjectId,
      ref: Question
 }


}, { timestamps: true });

module.exports = mongoose.model('answer', answerSchema)