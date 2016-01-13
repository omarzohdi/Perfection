(function(window) {
butterflyanimation = function() {
	this.initialize();
}
butterflyanimation._SpriteSheet = new SpriteSheet({images: ["butterfly.png"], frames: [[0,0,157,144,0,77.9,77.25],[157,0,157,144,0,77.9,77.25],[314,0,157,144,0,77.9,77.25],[471,0,157,144,0,77.9,77.25],[628,0,157,144,0,77.9,77.25],[785,0,157,144,0,77.9,77.25],[0,144,157,144,0,77.9,77.25],[157,144,157,144,0,77.9,77.25],[314,144,157,144,0,77.9,77.25],[471,144,157,144,0,77.9,77.25],[628,144,157,144,0,77.9,77.25],[785,144,157,144,0,77.9,77.25],[0,288,157,144,0,77.9,77.25],[157,288,157,144,0,77.9,77.25],[314,288,157,144,0,77.9,77.25],[471,288,157,144,0,77.9,77.25],[628,288,157,144,0,77.9,77.25],[785,288,157,144,0,77.9,77.25]]});
var butterflyanimation_p = butterflyanimation.prototype = new BitmapAnimation();
butterflyanimation_p.BitmapAnimation_initialize = butterflyanimation_p.initialize;
butterflyanimation_p.initialize = function() {
	this.BitmapAnimation_initialize(butterflyanimation._SpriteSheet);
	this.paused = false;
}
window.butterflyanimation = butterflyanimation;
}(window));

