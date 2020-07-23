const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database has been penetrated!');
    }).catch(() => {
        console.log('Error connecting to DB!');
    });
};

module.exports = connectDB;