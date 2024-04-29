import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://12345kolt:WzUVfUB0kJ0PztAn@cluster0.0ra2jot.mongodb.net/dimax-market-app').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.