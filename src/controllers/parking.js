module.exports = {
    default: function( req, res ) {
        const { id } = req.params

        // Смотри в консоль на машине
        console.log(id)

        const params = Object.assign( { idPage: id, title: 'Засыпка парковочного места', bodyClass: 'page-index' }, req.params )
        res.render('parking', params)
    }
}