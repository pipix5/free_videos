const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
	name: String,
	description: String,
	image: String
})

const Video = mongoose.model('Video', videoSchema, 'videos')

module.exports = Video