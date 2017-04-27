import Marionette from 'backbone.marionette';

const WelcomeView = Marionette.ItemView.extend({
	el: "#app",
	template: require("../templates/welcome.html"),
	ui: {
		name: "#name",
		btn: "button"
	},
	triggers: {
		"click @ui.btn": "btn:clicked"
	},
	onBtnClicked: function() {
		Backbone.history.navigate(`name/${this.ui.name.val()}`);
		this.model = new Backbone.Model( { name: this.ui.name.val() } );
		this.render();
	}
});

module.exports = WelcomeView;