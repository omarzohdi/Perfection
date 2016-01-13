(function(window) {
mothAni = function() {
	this.initialize();
}
mothAni._SpriteSheet = new SpriteSheet({images: ["moth_SpriteSheet.png"], frames: [[0,0,720,480,0,360,240],[720,0,720,480,0,360,240],[0,480,720,480,0,360,240],[720,480,720,480,0,360,240],[0,960,720,480,0,360,240],[720,960,720,480,0,360,240],[0,1440,720,480,0,360,240],[720,1440,720,480,0,360,240],[0,1920,720,480,0,360,240],[720,1920,720,480,0,360,240],[0,2400,720,480,0,360,240],[720,2400,720,480,0,360,240],[0,2880,720,480,0,360,240],[0,0,720,480,0,360,240],[720,2880,720,480,0,360,240]]});
var mothAni_p = mothAni.prototype = new BitmapAnimation();
mothAni_p.BitmapAnimation_initialize = mothAni_p.initialize;
mothAni_p.initialize = function() {
	this.BitmapAnimation_initialize(mothAni._SpriteSheet);
	this.paused = false;
}
window.mothAni = mothAni;
}(window));

