const Sequelize = require('sequelize');
const database = require('./database');

const Content = database.define('contents', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

database.sync();

module.exports.Content = Content;