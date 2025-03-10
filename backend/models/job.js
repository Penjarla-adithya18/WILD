const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  location: String,
  salary: String,
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
