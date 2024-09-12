import express from 'express'
import router from './routes/urls.js'
import indexRouter from './routes/index.js'
import { mongooseConnection } from './config/db.js'

const app = express()

mongooseConnection()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', router)
app.use('/api', indexRouter)

app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT)
  console.log('Server is running')
})
