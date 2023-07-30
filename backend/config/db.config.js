import mongoose from 'mongoose';

export const dbConnection = async () => {
   const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true
   })
   console.log('Mongodb connected', connection.connection.host);
}