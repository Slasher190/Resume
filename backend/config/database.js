import mongoose from 'mongoose';

export const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI || "mongodb+srv://slasher190:1234@cluster0.5awar.mongodb.net/portfolio?retryWrites=true&w=majority").then((c) => {
        console.log(`MongoDB connected to: ${c.connection.host}`);
    }).catch((e) => {
        console.log(e);
    });
};


// mongoose.connect(URI,
//     err => {
//         if(err) throw err;
//         console.log('connected to MongoDB')
//     });
