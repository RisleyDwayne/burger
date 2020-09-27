const orm = require('../config/orm');

// burger model 
const burger = {
	selectAll: function () {
		return orm.selectAll('burgers');
	},
	insertOne: function (cols, vals) {
		return orm.insertOne('burgers', cols, vals);
	},
	updateOne: function (objColVals, condition) {
		return orm.updateOne('burgers', objColVals, condition);
	},
	deleteOne: function (condition) {
		return orm.deleteOne('burgers', condition);
	}
};

module.exports = burger;