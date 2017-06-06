// Это как бы среверная часть, где ты делаешь всю обработку,
// пишешь скрипты, подлючаешь библиотеки 
// вот кстати пример const _ = require('lodash')
// и получается во вьюху ты отдаешь данные с переменными указаными в params
// попробуем с id


module.exports = {
	default: function( req, res ) {
		const { id } = req.params

		// Смотри в консоль на машине
		console.log(id)

		const params = Object.assign( { idPage: id, title: 'Щебень для фундамента', bodyClass: 'page-index' }, req.params )
		res.render('foundation', params)
	}



}