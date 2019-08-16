const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   firstName: { type: String },
   lastName: { type: String },
   staffId: { type: Number },
   department: { type: String },
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