import mongoose from 'mongoose';

export const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URI).then((c) => {
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
