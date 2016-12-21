var mongoose = require('mongoose')
    , Schema = mongoose.Schema,
    Constants = require('../common/constants');
var userSchema = new Schema({
    id: String,
    name: {type: String, required: true},
    username: String,
    password: String,
    age: String,
    gender: String,
    email: {
        type: String,
        validate: function (value) {
            return Constants.EMAIL_REGEX.test(value)
        }
    },
    expire: Boolean
});

userSchema.methods.findByEmail = function (callback) {
    return this.model('User').findOne({
        email: this.email,
        password: this.password
    });
};

userSchema.methods.findByName = function () {
    return this.model('User').findOne({
        username: this.username
    });
};

module.exports = mongoose.model('User', userSchema);