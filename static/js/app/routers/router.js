import Marionette from 'backbone.marionette';

import WelcomeView from '../views/welcome';

let welcome;

const Controller = Marionette.Object.extend({

	initialize: function() {
	    welcome = new WelcomeView({ 
			model: new Backbone.Model( { name: "Justin"} )
	    });
	    welcome.render();
	},	

	setName: function(string) { 
	    welcome = new WelcomeView({ 
			model: new Backbone.Model( { name: string } )
		});
	    welcome.render();		
	}
});

const Router = Marionette.AppRouter.extend({
	appRoutes: {
		'name/:string': 'setName'
	},
	controller: new Controller	
});

module.exports = Router;

