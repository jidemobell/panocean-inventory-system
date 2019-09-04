const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   firstName: { type: String },
   lastName: { type: String },
   id: { type: Number },
   location: { type: String },
   floor: { type: String },
   type: {
       type: String,
       enum: ['intern', 'staff', 'visitor'],
       default: 'staff',
   }
},
{ timestamps: true }
)

const User = mongoose.model('User', UserSchema)
module.exports = User