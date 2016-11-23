var async = require('async'),
		keystone = require('keystone');

var View = keystone.list('View');

/**
 * List Views
 */
var index = function(req, res) {
	View.model.find()
		.populate('collections')
		.exec(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			views: items
		});
		
	});
}

/**
 * Get View by slug
 */

var get = function(req, res) {
	View.model.find()
		.where('slug', req.params.slug)
		.populate('collections')
		.exec(function(err, docs) {			
			if (err) return res.apiError('database error', err);
			if (!docs){
				return View.model.find().where('slug', '404')
						.populate('collections')
						.exec(function(err, item) {
					if (err) return res.apiError('database error', err);
					res.apiResponse({
						views: item
					});
				})
			}
		View.model.populate(docs, [{path: 'collections.articles', model: 'Article'}], function(err, item){
			res.apiResponse({
				views: item
			});			
		});
	});
}
exports = module.exports = { get:get, index:index }