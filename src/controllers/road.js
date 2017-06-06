module.exports = {
    default: function( req, res ) {
        const { id } = req.params

        // Смотри в консоль на машине
        console.log(id)

        const params = Object.assign( { idPage: id, title: 'Засыпка дорог', bodyClass: 'page-index' }, req.params )
        res.render('road', params)
    }
}