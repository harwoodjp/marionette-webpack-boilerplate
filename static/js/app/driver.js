import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Router from "./routers/router";

const app = new Marionette.Application({
  onStart: function() {
  	const router = new Router();
	//Backbone.history.start( {pushState: true} );  		
	Backbone.history.start();  		
  }
});

app.start();


