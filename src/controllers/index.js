
module.exports = {
	default: function( req, res ) {

		const params = Object.assign( { title: 'Ковровское карьеоуправление', bodyClass: 'page-index' }, req.params )
		res.render('index', params)
	}
}