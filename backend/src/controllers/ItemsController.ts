import { Request, Response } from 'express'

import Knex from '../database/connection'
import serialize from '../utils/serialization'

class ItemsController {
  async index (req: Request, res: Response) {
    const items = await Knex('items').select('*')

    const serealizedItems = items.map(item => {
      return {
        id: item.id,
        image_url: serialize(item.image),
        title: item.title
      }
    })

    return res.json(serealizedItems)
  }
}

export default ItemsController
