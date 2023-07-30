import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
   name: String,
   hasAttended: Boolean,
   attendedDate: Date
})

const Student = mongoose.model('Student', studentSchema);

export default Student;