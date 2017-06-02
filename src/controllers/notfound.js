module.exports = {
	default: function( req, res ) {
		// console.log(req.params)

		const { id } = req.params

		const params = Object.assign( { title: 'Не найдено', bodyClass: 'page-inside'} )
		res.render('notfound', params)
	}
}