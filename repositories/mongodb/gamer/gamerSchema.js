const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = () => {
    const GamerSchema = new Schema({
        gamerId: String,
        name: String,
        age: Number,
        birthday: Date
    });

    mongoose.model('Gamer', GamerSchema);
};