import express from 'express'
import urlModel from '../models/url.model.js'
const indexRouter = express.Router()

indexRouter.get('/:urlId', async (req, res) => {
  try {
    const url = await urlModel.findOne({ urlId: req.params.urlId })
    if (url) {
      await urlModel.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      )
      return res.redirect(url.origUrl)
    } else res.status(404).json('Not found')
  } catch (err) {
    console.log(err)
    res.status(500).json('Server Error')
  }
})

export default indexRouter
