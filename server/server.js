import config from '../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise;
const MONGO_CONFIG = {useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true}

try {
	mongoose.connect(config.mongoUri, MONGO_CONFIG)
		.then((db) => {
			console.log('Mongoose connection Established')
			db.connection.on('error', (err) => { console.error(err) }) // <- print nothing
			db.connection.on('disconnected', () => { console.log('disconnected') }) // <- print once
			db.connection.on('reconnected', () => { console.log('reconnected') }) // <- never printed
		})
} catch (error) {
	console.error(error.message)
	console.log('Mongoose connection Failed')
	process.exit(1)
}

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})