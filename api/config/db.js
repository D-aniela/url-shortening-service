import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' }) // Carga el archivo .env

export const mongooseConnection = () => {
  console.log(process.env.MONGO_DB_USER)
  const host = process.env.MONGO_DB_HOST
  const db = process.env.MONGO_DB_NAME
  const user = process.env.MONGO_DB_USER
  const password = process.env.MONGO_DB_PASSWORD

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  let mongodbUrl = `mongodb://${host}/${db}`

  if (user && password) {
    console.log('---- mongodb auth ----')
    const authOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: user,
      pass: password,
      authSource: 'admin',
    }
    return mongoose.connect(mongodbUrl, authOptions)
  }

  return mongoose.connect(mongodbUrl, options)
}
