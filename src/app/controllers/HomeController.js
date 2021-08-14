const Video = require('../models/videoModel')

class homeController {
	index(req, res, next) {
		Video.find({})
			.then(videos => {
				res.render('home', { videos })
			})
	}
}

module.exports = new homeController