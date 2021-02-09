import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MatchService {
  async getMyMatches(query) {
    return await dbContext.Match.find(query)
  }

  async match(body) {
    const exist = await dbContext.Match.findOne({ toUserId: body.toUserId, fromUserId: body.fromUserId })
    if (exist) {
      const updated = await dbContext.Match.findOneAndUpdate({ toUserId: body.toUserId, fromUserId: body.fromUserId }, { matched: true, status: 'accepted' }, { new: true })
      if (!updated) {
        throw new BadRequest('Could not update')
      }
      return updated
    } else {
      return await dbContext.Match.create({ toUserId: body.fromUserId, fromUserId: body.toUserId })
    }
  }

  async edit(body) {
    const updated = await dbContext.Match.findOneAndUpdate({ toUserId: body.toUserId, fromUserId: body.fromUserId }, body, { new: true })
    if (!updated) {
      throw new BadRequest('No Match exists with your search')
    }
    return updated
  }

  async delete(id) {
    const deleted = await dbContext.Match.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest('invalid id')
    }
  }

  async deleteAll() {
    const deleted = await dbContext.Match.deleteMany()
    if (!deleted) {
      throw new BadRequest('nope')
    }
  }
}

export const matchService = new MatchService()
