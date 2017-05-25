var express = require('express');
var consolidate = require('consolidate');
var app  = express();
const Content = require('./models').Content;
const database = require('./database');

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);
app.use('/static', express.static('./static'));

app.get('/', function(request, response){	
	Content.findOne({ where: { id: 1 } }).then(function(user1) {
		Content.findOne({ where: { id: 2 } }).then(function(user2) {
			Content.findOne({ where: { id: 3 } }).then(function(user3) {
				Content.findOne({ where: { id: 4 } }).then(function(user4) {
					Content.findOne({ where: { id: 5 } }).then(function(user5) {
						Content.findOne({ where: { id: 6 } }).then(function(user6) {
							Content.findOne({ where: { id: 7 } }).then(function(user7) {
								Content.findOne({ where: { id: 8 } }).then(function(user8) {
									Content.findOne({ where: { id: 9 } }).then(function(user9) {
										Content.findOne({ where: { id: 10 } }).then(function(user10) {
											Content.findOne({ where: { id: 11 } }).then(function(user11) {
												Content.findOne({ where: { id: 12 } }).then(function(user12) {
													Content.findOne({ where: { id: 13 } }).then(function(user13) {
														Content.findOne({ where: { id: 14 } }).then(function(user14) {
															Content.findOne({ where: { id: 15 } }).then(function(user15) {
																Content.findOne({ where: { id: 16 } }).then(function(user16) {
																	Content.findOne({ where: { id: 17 } }).then(function(user17) {
																		Content.findOne({ where: { id: 18 } }).then(function(user18) {
																		response.render('index.html', {
																			artist1: user1.name,
																			cont1: user1.content,
																			artist2: user2.name,
																			cont2: user2.content,
																			artist3: user3.name,
																			cont3: user3.content,
																			artist4: user4.name,
																			cont4: user4.content,
																			artist5: user5.name,
																			cont5: user5.content,
																			artist6: user6.name,
																			cont6: user6.content,
																			artist7: user7.name,
																			cont7: user7.content,
																			artist8: user8.name,
																			cont8: user8.content,
																			artist9: user9.name,
																			cont9: user9.content,
																			artist10: user10.name,
																			cont10: user10.content,
																			artist11: user11.name,
																			cont11: user11.content,
																			artist12: user12.name,
																			cont12: user12.content,
																			artist13: user13.name,
																			cont13: user13.content,
																			artist14: user14.name,
																			cont14: user14.content,
																			artist15: user15.name,
																			cont15: user15.content,
																			artist16: user16.name,
																			cont16: user16.content,
																			artist17: user17.name,
																			cont17: user17.content,
																			artist18: user18.name,
																			cont18: user18.content,
																		});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});


app.listen(3000, function(request, response){
	console.log('Server Listening');
});