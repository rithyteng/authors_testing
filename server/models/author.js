var mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{ type: String,
        require:[true,'Please Input The Name of The Authors'],
        minlength:[3,'The Name Of The Author Must Be At Least 3 Characters']
    }
})


var authors = mongoose.model('authors',AuthorSchema);
module.exports = authors;