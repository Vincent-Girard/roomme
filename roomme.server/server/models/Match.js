import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = mongoose.Schema.Types.ObjectId

const Match = new Schema(
  {
    toUserId: { type: String, ref: 'Account', required: true },
    fromUserId: { type: String, ref: 'Account', required: true },
    matched: { type: Boolean, required: true, default: false },
    status: { type: String, enum: ['pending', 'declined', 'accepted'], default: 'pending' }
    // NOTE messages below is a stretch goal, will need to be altered if we reach this point as it does not like "fromUserId"
    // messages: [{ from: fromUserId, body: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Match.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default Match
