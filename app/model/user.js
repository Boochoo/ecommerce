/**
 * Created by boochoo on 07/06/16.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({

    name : String,
    username : {
        type : String,
        required : true,
        index : {
            unique : true
        }
    },
    password : {
        type : String,
        required : true,
        select : false
    }
});

UserSchema.pre('save', function (next) {
    //this obviously points to UserSchema
    var user = this;

    //if the user password is not modified

    if(!user.isModified('password'))
        return next();

    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    });

});

//Custom method for password comparison

UserSchema.methods.comparePassword = function(password){
    var user = this;

    //compare the new and the former passwords
    return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('User', UserSchema);