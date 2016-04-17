var postsData = [ {
					title: 'Introducing Telescope',
					author: 'Sacha Greif',
					url: 'http://sachagreif.com/introducing-telescope/'
				}, 
				{
					title: 'Meteor',
					author: 'Tom Coleman', 
					url: 'http://meteor.com'
				}, 
				{	title: 'The Meteor Book', 
					author: 'Tom Coleman',
					url: 'http://themeteorbook.com'}
				];

Template.postsList.helpers({
	posts: postsData
});

Template.tis.helpers({

	x: [{a:1},{a:2},{a:33}]


});			


