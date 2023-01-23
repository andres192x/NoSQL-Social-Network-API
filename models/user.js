// var mongoose = require('mongoose');
// var Schema = mongoose.Schema; 

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

}
)

userSchema.virtual('friendCount')
.get(function() {
    return this.friends.length
})

const User = model('User', userSchema);

module.exports = User;

