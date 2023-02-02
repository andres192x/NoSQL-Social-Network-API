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

},

// {
//     timestamps:true,
//     toJSON: {
//         virtuals: true,
//         getters: true
//     },
//     id: false

// }
)

userSchema.virtual('friendCount')
.get(function() {
    return this.friends.length
})

const User = model('User', userSchema);

module.exports = User;

var friendsSchema = new Schema({
    friendsId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),

    },
    friendsName: {
        type: String,
        required: true,
        maxlength: 280
    },
    friendsEmail: {
        type: String,
        required: true,
        maxlength: 280
    },
    friendsThoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friendsFriends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    // friendsCreatedAt: {
    //     type: Date,
    //     default: Date.now,
    //     get: (timestamp) => dateFormat(timestamp)
    // },
    // friendsUpdatedAt: {

    //     type: Date,
    //     default: Date.now,
    //     get: (timestamp) => dateFormat(timestamp)
    // }
},

{
    toJSON: {
        timestamps:true,
        virtuals: true,
        getters: true
    },
    id: false
}
);

// friendsSchema.virtual('friendsCount')
// .get(function() {
//     return this.friends.length
// }
// );

const Friends = model('Friends', friendsSchema);

module.exports = Friends;





