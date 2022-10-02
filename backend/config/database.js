import mongoose from 'mongoose';

export const connectDatabase = () =>{
<<<<<<< HEAD
    mongoose.connect(process.env.MONGO_URI || "mongodb://slasher190:1234@cluster0.5awar.mongodb.net/portfolio?retryWrites=true&w=majority").then((c) => {
=======
    mongoose.connect(process.env.MONGO_URI || "mongodb+srv://slasher190:1234@cluster0.5awar.mongodb.net/portfolio?retryWrites=true&w=majority").then((c) => {
>>>>>>> 5122b5e4d72a355fcb854d24ada766a58bff7c8d
        console.log(`MongoDB connected to: ${c.connection.host}`);
    }).catch((e) => {
        console.log(e);
    });
};
