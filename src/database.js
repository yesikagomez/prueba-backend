const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/formulario-db';

mongoose.connect(URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});