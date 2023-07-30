import express from 'express';
import Student from '../models/student.model.js';

const router = express.Router();

router.get('/students', async (req, res) => {
   try {
      const students = await Student.find({});

      res.json({ status: true, data: students, message: "Students fetched successfully" })
   } catch (error) {
      console.log(error);
      res.json({ status: false, message: "Server error" })
   }
})

router.post('/students', async (req, res) => {
   try {
      const { name, hasAttended, attendedDate } = req.body;

      const student = new Student({ name, hasAttended, attendedDate });

      const savedStudent = await student.save();

      res.json({ status: true, data: savedStudent, message: "Students created successfully" })
   } catch (error) {
      res.json({ status: false, message: "Server error" })
   }
})

router.patch('/students/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updates = req.body;

      const student = await Student.findByIdAndUpdate(
         id,
         { $set: updates },
         { new: true }
      )
      res.json({ status: true, data: student, message: "Students updated successfully" })
   } catch (error) {

   }
})

router.delete('/students/:id', async (req, res) => {
   try {
      const { id } = req.params;
      await Student.findByIdAndDelete(
         id
      )
      res.json({ status: true, message: "Students deleted successfully" })
   } catch (error) {
      console.log(error);
   }
})




export default router;