var post = require('./post.js');

var analytics = (function(win){

	var img = new Image;
		img.width = img.height = "1px";
	var	res = window.navigator,
		data = {},
		_plugins = {};

	var callback = function(resp){
		if(resp){
			console.debug('Post is success from analytics.js');
		}
	},

	grab = function(){

		data.url = window.location.href;
		data.ref = window.refferer;
		data.nav = res;

		img.dataset.stats = JSON.stringify(data);

		window.addEventListener('beforeunload', function(){
			console.log("unloading");
			//post(url,async,content-type, callback function, <additional variable to send>)
			post('post_receiver.php', true, 'application/x-www-form-urlencoded', callback);
		});

	};

	return grab;

})(window);

module.exports = analytics;
