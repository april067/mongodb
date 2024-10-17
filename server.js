const mongoose = require('mongoose');

const app = require('./app');

mongoose
	.connect('mongodb+srv://Iker:C9WRM6xBxFSVm7jN@cluster0.smxt4.mongodb.net/db-contacts')
	.then(() =>
		app.listen((PORT = 3000), () => {
			console.log('Database connected successful');
		})
	)
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	});
