import express from 'express'
import { nanoid } from 'nanoid'
import dotenv from 'dotenv'
import urlModel from '../models/url.model.js'
import { validateUrl } from '../utils/utils.js'
dotenv.config({ path: '../config/.env' })

const router = express.Router()

router.get('/short', async (req, res) => {
  res.send('Hello')
})

// Short URL Generator
router.post('/short', async (req, res) => {
  const { origUrl } = req.body
  const base = process.env.BASE

  const urlId = nanoid()
  if (validateUrl(origUrl)) {
    try {
      let url = await urlModel.findOne({ origUrl })
      if (url) {
        res.json(url)
      } else {
        const shortUrl = `${base}/${urlId}`

        url = new urlModel({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        })

        await url.save()
        res.json(url)
      }
    } catch (err) {
      console.log(err)
      res.status(500).json('Server Error')
    }
  } else {
    res.status(400).json('Invalid Original Url')
  }
})

export default router
