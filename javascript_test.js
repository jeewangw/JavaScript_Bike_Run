(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"javascript_test_atlas_", frames: [[0,0,399,432],[240,434,167,167],[0,434,238,250]]}
];


// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["javascript_test_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pompadour = function() {
	this.spriteSheet = ss["javascript_test_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pump = function() {
	this.spriteSheet = ss["javascript_test_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["javascript_test_atlas_"],1)).ss(1,0,0,4).p("ASRepMgkhAAAMAAAg9RMAkhAAAg");
	this.shape.setTransform(124.6,203.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(190,151,112,0)","#BE9770","#9F7D5D","#765C45"],[0,0.894,0.894,0.941,1],-116.9,0,116.9,0).s().p("AyQepMAAAg9RMAkhAAAMAAAA9Rg");
	this.shape_1.setTransform(124.6,203.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCA277","#B08A69","#98755C","#886752","#7F5F4D","#7C5D4C","#9F7B60","#CCA277","#B48E6A","#88674E","#795B46","#CCA277","#BE9770","rgba(190,151,112,0)","rgba(0,0,0,0)"],[0,0.027,0.059,0.09,0.122,0.153,0.247,0.471,0.514,0.627,0.686,0.867,0.894,0.894,1],-116.9,0,116.9,0).s().p("AyQepMAAAg9RMAkhAAAMAAAA9Rg");
	this.shape_2.setTransform(124.6,203.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wood, new cjs.Rectangle(6.7,6.6,235.8,394.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363435").s().p("AAJABIgZAAIAhgCQABADgFAAIgEgBg");
	this.shape.setTransform(56.7,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363435").s().p("AgFgBIAFgBIAGAFg");
	this.shape_1.setTransform(30,38.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363435").s().p("AAAgKIACACIgDATQAAgPABgGg");
	this.shape_2.setTransform(6.1,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#363435").s().p("AgJgCQAFACAOAAIgOAEg");
	this.shape_3.setTransform(338.1,45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363435").s().p("AgUAEQgHgEAHgBIAYgCQgEABAOABQAOABgFAAQgRAAgDACQgDACgIAAIgMAAg");
	this.shape_4.setTransform(123.6,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#363435").s().p("AgDAFIAGgJIABAJg");
	this.shape_5.setTransform(165.5,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#363435").s().p("AgOABIATgCQASABgIAAIgPACIgIAAQgOAAAIgBg");
	this.shape_6.setTransform(213.9,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363435").s().p("AgGgCIAOADIgPACg");
	this.shape_7.setTransform(223.2,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#363435").s().p("AgNACQgBgBgBAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAggBQABAAAAABQABAAgBAAQAAAAgBAAQgBAAgCAAIgMACIgHAAIgHAAg");
	this.shape_8.setTransform(212.5,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#363435").s().p("AgSAAIAlAAQgIAAAAABg");
	this.shape_9.setTransform(248.3,3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#363435").s().p("AgIACIAKgEIAGAFg");
	this.shape_10.setTransform(260.4,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#363435").s().p("AgFAAQAbgFgIAFQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgCADgFgBIgOABQgLAAARgDg");
	this.shape_11.setTransform(240,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#363435").s().p("AgSAAIAagBQALAAgDACIADAAIgTABQgQAAgCgCg");
	this.shape_12.setTransform(261.6,2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#363435").s().p("AgIAAIARgBIABACIgLAAQgMAAAFgBg");
	this.shape_13.setTransform(280.7,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#363435").s().p("AAAAAIADABQgKgBAHAAg");
	this.shape_14.setTransform(24.8,5.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#363435").s().p("A6OC5IABgZQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAIADABQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQgBgUgGgBQgEAAADgfQACASAAgDQABgIAJgiQAIgegCgNIgDAPQgCgTAFgsQAEgjgFgEIgFAEQAEgjgCgPQgBgQADgjIABABIAAggIABgYQAKgBAGgDIgPgBIBdAAQAWgCAHACQABgEAvAAIA8ABQgUABACACQAAABALADQANgEAMAAQAMgBATADQADgIAJgEQANgFAhAAIgMACQgBAAgBAAQgBAAAAAAQgBAAAAABQABAAAAAAQAFACAQgCQABAAAAAAQAAAAAAAAQgBABgBAAQAAABgCAAQgFACADABQATgEAcABQAqABASgBQgKACAEABIAJAEQACgFAfAEQAZADgKgGQAvADBzABQBkAAATAEQAGACASgCIAdgCIgCAEIAqgFQAWgBAbgEQgQADAEADQACABAUADIAlgIIAIAGQAPgCAjACIgFAAIABACIAEgCQAJgEAegCQAogCADgCQAJAEAWgBQAVgBAGAEIAUgDQgHgDABgCQAAgCAKABIAEAAIAGAFQAVgCAVAAIgQgDIATADIAGAAIgEAAQARACAQgCQAZAEA/gFQA9gEAfAFQgUgCgFACIBJADQApACARgCIgCgEQBBgEAdAAIACgFIBWgBQA7gBAPAGQAGgCAfABIAvABIAGAEQAlABAigCQAmAFA3gCIBXgCIABABIA5gDQgCAAAAAAQgBABAAAAQABAAABAAQABgBACAAQARgCAJABQAegDAoAEIAkAAQgYACAKADQATAEAAABIAXgDQAFABgGACQgBAAgBAAQAAAAAAAAQABABABAAQACAAACAAIAmgCQAdgCAJgDIgPgDIAGgCIAUAAIgDgCQAPADAbABQAUABAMAEQgLgEAkAAQAqAAgKgEQAMAEAHAAQAGAAAHADQgVgBgdADIguAFIAbAEQgKAFgdgDQghgDgFABQAHgBAPABQAMAAACABIgHgFQgZgCgcACIgtAFQAMABgQACQgTADAKACIAVgBQAIACgeAEQgfgChZAAQhMgBgMgCQAKABAPgBQAPAAAJgCIgegCIAkACQAYACAVgBQgBgBAFgGQAFgEgRgEQgjgDgeAGQgjAHgqgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgDgbABQgqADgcAGQgcAGAAAGIAugEQAcgBAFAEIgqADQgYACgBADQgNgEAWgBQATAAgQgDIgfADQAGgCgKgCIgQgCIhGgCIhKgCQgJgDACgCQgXABgVAGQgWAHAHADIghgBQgPgBgPABIASACIgGABQgXgBgDAEQgQAAgBgCQgCgDgEAAQgQABgBAEQgIgDAQgHQAQgHgLgDQgJgCgigFIglgEQgLAEAEAOQADANAPAGQgBADgPgEIgYgEQgUgDgZADQgdAEgNgBIAYgEQgEgBgYABQgYABgFACIAJgHQAIgFgIgCQgngBgjAHQghAGADAGIBUgHQACACgeADQgeAEACADIhOgCQAogCgMgDQgTABgEgBIgQgDQAbgFAtgMQApgKAUgHIgoADIgKgDQghADgmANIgqAQQgUgBAAgGQgBgGAJgCQgdgBgeAIQgdAJgegBIAWACQhBgBAGACQgKgCgEgEQgEgEAGgCIgxAKQADgBAAgEQABgGABgBQgQAAgJAGQgHAEAFACIgfgEQgKgBgUgFQgIAAAFAFQAGAFAHABQgaADgfgDQAcgCgDgLQgEgPABgBIhjAdIAHgGQAFgFgBgBQgGAGhAACQgzACg3gBIAJgBQAIgCgZgBQgZgBgOACQADgBANAAQgSgDgYAGQgYAGgTgEQArACgEgIIg3ACQggACAIAGIgXgCQgKgBABgDIhEAGQABAAABAAQABgBAAAAQABAAAAgBQAAAAAAAAQgBgCgMgBQAQAAAlgCQAdgDAMAEIgEgIQgCgEALgDQguACgtAHIhGAMIhCgFIgCADIgMgHIgPACQAAAAAAAAQAAAAAAgBQABAAABgBQABAAABAAIgQACQgDgFAYgHIASAEQAagHgWgDIgJABQAOgEgHgBIgyADIAYAFQhFAKAfAFIgmgEIgqAGIgxAFQAAAAAAgBQAAAAAAAAQABgBABAAQAAgBABAAQAEgCgGgBIgQACIgQAAIgWgEQgEATADADIACAPQABAEABABQAEAEABAJQgDgDAAAGIAFAYQAAAEgDgIQgBgGgCAPIAFA7QABAbgCAaQABAdAFgPIADgHQABAAAAAQQgFAHgCAFQgDALAAATIAEAQQADAIABAPIgHgBIABAeIgBAKIgDACQADAIgBAIIABAAQAHgCAAgDIAAgFQAEgGADgCIgDAEIAEAEIABAAIAIACIgKACIgGABIAIACIAQgCQAMgBAKgDIAQgCQAIAAALAEQgSABgOADQgPAEAKABIAigGQABABgHABQgHABAJABIAmgKIgBAAIA7gGIgIACQgBABAIAAIAogHQgTAEAmgBQAZgBATgIQAQgHAUACIgMACIAUABQACgHA9gFQA9gFABgHQASACgKACQgYAEgTAFIAgABQgYABgNADQAbACAfgFIArgJQAEAAACAFQABAEAagDQAigEgMgEIgIgCQgBgCAMgBIAcAFQAegFAjgBIA8AAQAMgCAEgBQAXAAArgFQAqgGAPABQgEABALABIAQADIA0gGQgLABgEADIgHAGQASgBAVgEIgJADQAAAAAAAAQgBABABAAQAAAAABABQABAAACAAIA+gJIgRAAIAhgCQAYgCAOACIgLAFQgSgEgVAIQAYgBAAABQAAACAHAAQAWAAAKgEQAJgDgGgDIAnABQARgBAXgDIgGAFIAggCIgaAHQAeABAHgFQAIgFAiABIABAFIAegGQANgDAMADQALgBgQgDQgMgDAhgBQAMADAnACQANgCgPgCIgUgBQAqgCAZAHQAYAHApgEQgKgBADgFQABgDglAAQAOgBAhADQAeACARgDIgVAHQAJAAAWgEIgCAFQATgEAkABQAfABAMgFQgJAEATgBQAdgCAGACQgOACgtABQglAAgCAFQAIABAOgBQAPgBAHABIgdAFQAeADAfgEIAwgGIg2ACQACgEAOAAQAQgBAHgCQAPACAXgBQAXgCAKACIgKAAQAhAAAcAHQAeAHAGAAQATABAWgCQAWgDgLgCIgcgBQglgCAUgGQARAGAogCQAygCAkAEQgQACAKADQAKADgOACIAigCIASgDIALAEIAfgHQAIgCAqgBQgNABAQADQAPADgIABQAeABAWgDIgDABQAiAAAdADQAZACAigBIgGgCQAxgCBYADICMAFIgdgDIAjABQAhAAAQADIgUAAQABACAIADQAJADAOABIAIgEIAJAEQAPABgEgDQgFgDAQABQAJAGBGAEQBIAFANAGQAMgEgfgCQgdgCAMgDQAWAEANABIgHgFIBxAMQA3AGAyADIgEABQAqAGATgEQADABgHABQgGABAGACQAegFAwAKQAvAJAPgCQgCAEAcAMQAYAKgQADIAWABQgEACgjgCQgkgEgHADIhFgMIgCAEQgDACAHABQgmgEAcAHQhegRicgJQjEgLg0gGQgNAAAMAEQgRgEgLACIgRAEIgsgLQgLABACADIAEADQgigBhYgHQhJgFglABQgKgBABgEQABgCgPgBQAUAFgsAAQgpAAAFADQgNgFgtgDQglgDAHgHQgWgBgDADQgDADAKACQhBgDgnAEQgGgBhggCQhagBgVgGQAMAEgJABIgeABIAVAGIg0gBQgPABACgBQgDAAgCgCQgDgCgNgBQgWgBgMACQgMADgKABIAFABIgYABIASgDQAWgEgjgCQgiAJgPgEQAUABACgDQACgBgJgCIgpAAIANAHIi0gCQhvAAhMACQABgDgrAAQgqAAAGgFIAFABQAWgBgSgDQgTgDgTABQAKABgQAGQgNAEAkAAIgyAGQgPAKhGgBQhYgBgfADQAEgBABgBQgmAFhAAAQg6gBgFACIgGgFQgtAIgRACQgVACgxAAIAEgBQABgBgHgBQgSAFgKACQgUADgfABIACgBIhJAFQAAgHhBAJQhFAJgMgIQgJAEghAEIgxAHQAAgBgFAAQgQAGgnAAQgyAAgHABQgNADABACIAKADQgSgCgeAFIhNALQgCgnABgHgA5SCvIgIADIAHACQAEAAADgEIgDgCIgDABg");
	this.shape_15.setTransform(168,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#363435").s().p("AAHgHIAPALQgMgBgJABQgJAAgNAEg");
	this.shape_16.setTransform(90.1,5.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#363435").s().p("AgXAAQARgCAeACIgmABg");
	this.shape_17.setTransform(201.6,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#363435").s().p("AAFACIgZgDQAZABAQABQgDABgGAAIgHAAg");
	this.shape_18.setTransform(206,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#363435").s().p("AgHAAQABgBAOgBIgOAFQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_19.setTransform(79.8,35.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#363435").s().p("AgJABIASgCIgLADg");
	this.shape_20.setTransform(27.3,3.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#363435").s().p("AgMADIgGgEQgBgDAMADIAaAEQgPgCgQACg");
	this.shape_21.setTransform(122.6,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#363435").s().p("AgHAAIAPgBIgDADg");
	this.shape_22.setTransform(267.3,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#363435").s().p("AANgCIgGADIgTACg");
	this.shape_23.setTransform(273,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#363435").s().p("AgVAAIAsgCQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEABgPAAIAAACg");
	this.shape_24.setTransform(296,2.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#363435").s().p("AASAEQABAAAAgBQAAAAAAAAQgBAAgBgBQgBAAgCAAQgHgBgGABIgGACQgPgEgIgEIAKACQASACAOABIAEgBQAPACgFABIgNACIADgBg");
	this.shape_25.setTransform(311.4,3.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#363435").s().p("AgHABIASgEIgyAAIA0gDIABAAIAAAAIABAAIAZACIgdABQAUACgOABQgJACAbgBQgHABgKACQgIACgSABQgKgDALgDg");
	this.shape_26.setTransform(284.9,2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#363435").s().p("AAYACIg3AAQADgCAWgCQAcAEAKAAIgLABg");
	this.shape_27.setTransform(277.7,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363435").s().p("AgXAMIAEgCIggACQgEgEAagEQAYgEgHgBQAJABAGABQAJABAWgBQAPgBgVgDIgfgDQASgCAGgBQADgBABgCQAUAGAGAGQAHAIgTACQgTgDgUACQgTABgCADQgFAAADgBg");
	this.shape_28.setTransform(272,2.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363435").s().p("AgKABQgCAAAAAAQgBAAAAgBQgBAAAAAAQABAAAAAAIAcAAQgLABgJAAIgFAAg");
	this.shape_29.setTransform(295.1,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363435").s().p("AgZABQAfgBAJgBQALAAAAABIgDACg");
	this.shape_30.setTransform(291.5,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363435").s().p("AgOABIAdgCQgBAAgBAAQgBABAAAAQgBAAAAAAQAAAAAAAAIACACg");
	this.shape_31.setTransform(309.2,1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363435").s().p("AgKAAIAZgEQgNADAAACQABACgEABQgUgCALgCg");
	this.shape_32.setTransform(316.1,2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363435").s().p("AAAACIgJgDQANABAGACg");
	this.shape_33.setTransform(305.1,1.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363435").s().p("AgaACQAbgEAUAAQgGABAHABQAIACgGABQgegDgUACg");
	this.shape_34.setTransform(293.2,0.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#363435").s().p("AgNgCQABABAaACIgRACQgLgDABgCg");
	this.shape_35.setTransform(313.7,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#363435").s().p("AAAACIABgTQABgCgBASIAAATg");
	this.shape_36.setTransform(340,8.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#363435").s().p("AgBAAIgRgBQAhgBAEACQADACghABQAOgCgEgBg");
	this.shape_37.setTransform(332.1,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#363435").s().p("AgMAAIAZgBIgMABQgBAAAAAAQAAAAAAAAQgBAAABAAQAAAAAAAAIgIACIgEgCg");
	this.shape_38.setTransform(327.5,1.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#363435").s().p("AgRAAQAAgBARgBQgBAAAAABQAAAAAAAAQABAAAAAAQACABACAAIAOAAIgXADQgMgCAAgBg");
	this.shape_39.setTransform(327.8,0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#363435").s().p("AgMABIABAAQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIAYAAIgWABIgDAAg");
	this.shape_40.setTransform(334.9,0.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#363435").s().p("AgCAqIACgFIgBgyIAAgYIAAgKIABgIIADBvg");
	this.shape_41.setTransform(340.8,13);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#363435").s().p("AAAAFQgCgBAAgGIACgCQACgBABALIgDgBg");
	this.shape_42.setTransform(342,43.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#524830").s().p("AANB7QtQgBtPBOIAAmPMA0lAAAIAAGPQtGhMtAgBg");
	this.shape_43.setTransform(171.1,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,342.3,46.8), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALTAAQAAErjUDUQjUDUkrAAQkrAAjTjUQjUjUAAkrQAAkrDUjTQDTjUErAAQErAADUDUQDUDTAAErg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003AC2").s().p("An+H/QjTjTgBksQABkrDTjTQDUjTEqAAQErAADUDTQDTDTABErQgBEsjTDTQjUDUkrgBQkqABjUjUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,-73.2,146.5,146.5);


(lib.shellai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A7045").s().p("AAJAyIAAgYIgqAAIAAgMIAsg/IAKAAIAAA/IANAAIAAAMIgNAAIAAAYgAgWAOIAfAAIAAgsg");
	this.shape.setTransform(251.2,724.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A7045").s().p("AgWAoQgKgMAAgaQAAgcALgMQAJgMAOAAQANAAAHAGQAIAHABAMIgMABQgBgIgDgDQgGgFgHAAQgFAAgFAEQgFADgEAIQgDAJAAAPQAFgHAGgDQAGgDAHgBQALABAKAIQAIAJAAAOQAAAJgEAJQgEAHgIAFQgGAEgKAAQgOAAgJgLgAgMABQgGAHAAAJQAAAGACAGQAEAGAEADQAFADAEAAQAIAAAGgGQAGgGgBgLQABgKgGgHQgGgEgIgBQgIABgFAEg");
	this.shape_1.setTransform(243.6,724.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A7045").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_2.setTransform(237.8,728.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A7045").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_3.setTransform(231.8,724.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED3937").s().p("AggBDQgLgKgDgSIASgBQACAMAHAGQAGAGAKAAQAHAAAHgEQAHgEADgHQAFgGADgLQACgLAAgMIAAgEQgFAJgKAGQgKAFgKAAQgTAAgMgNQgNgNgBgWQABgXAOgOQAMgOAVAAQANAAANAIQAMAIAGAPQAHAOgBAcQABAcgHARQgGARgNAJQgMAJgQAAQgRAAgLgKgAgUgyQgKAKAAAQQABAOAIAJQAJAIAMAAQAMAAAJgIQAIgJAAgQQAAgQgIgJQgJgJgMAAQgLAAgJAKg");
	this.shape_4.setTransform(255.3,675.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED3937").s().p("AAJBLIAAh0QgGAGgKAHQgLAGgJADIAAgRQAQgIALgKQALgLAFgJIALAAIAACVg");
	this.shape_5.setTransform(242.8,675.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED3937").s().p("AgJAKIAAgUIATAAIAAAUg");
	this.shape_6.setTransform(234.9,682);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED3937").s().p("AgwBLQgBgGADgGQAEgKAIgKQAIgKAQgNQAYgUAIgLQAJgLAAgLQAAgLgIgIQgIgHgNAAQgMAAgIAIQgIAIAAAOIgTgCQACgVANgLQAMgLAVAAQAWAAAMALQANANAAARQAAAJgEAJQgEAJgIAIQgJAKgUARIgUATQgFAFgDAFIBJAAIAAARg");
	this.shape_7.setTransform(225.8,675.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 20
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5374B6").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_8.setTransform(201.9,726.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5374B6").s().p("AgSAXQgFgEAAgHQAAgDACgDQABgEADgBIAHgCIAIgCQAJgBAFgCIAAgCQAAgFgCgDQgEgDgGAAQgFAAgEACQgCADgCAFIgIgBQABgGACgDQADgDAFgCQAGgCAFAAQAHAAAEABQAEACACADQACACAAADIABAIIAAALIAAAQIADAGIgJAAIgCgHQgFAFgFACQgDABgFAAQgJAAgEgEgAgBADIgIACIgDADIgCAEQAAADADADQADADAFgBQAEABAEgDQAEgCACgEIABgJIAAgDQgEACgJABg");
	this.shape_9.setTransform(198.1,727.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5374B6").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAHgHAJAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAFAEAFAAQAFAAADgCQADgDACgGIAJABQgBAJgHAEQgFAEgJAAQgLAAgGgHgAgJgPQgEAEAAAHIAbAAQAAgGgCgEQgFgFgHAAQgEAAgFAEg");
	this.shape_10.setTransform(192.5,727.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5374B6").s().p("AgNAXQgGgEgCgJIAJgBQABAGAEACQACADAGAAQAGAAADgCQADgDAAgEQgBgDgCgBIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgDABgDQACgEADgCIAGgCIAHgBQAFAAAFABQAEACACAEQADACABAGIgJABQAAgFgEgCQgCgCgFAAQgFAAgDACQgCACgBADIABADIAEACIAHACIANAFQAEAAACADQACADAAAFQgBAEgCAEQgDAEgEACQgFACgGAAQgKAAgEgEg");
	this.shape_11.setTransform(187.2,727.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5374B6").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
	this.shape_12.setTransform(183.7,726.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5374B6").s().p("AgdAkIAAhHIAZAAIAMABQAGACAEADQAGAFADAIQADAHAAAJQAAAIgCAGQgCAGgDAEQgDAFgEACQgDACgFACIgLABgAgTAbIAPAAQAGAAAEgBQAEgBADgDQADgDACgGQACgFAAgIQAAgLgEgGQgDgGgGgCQgEgBgHAAIgPAAg");
	this.shape_13.setTransform(179.1,726.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5166AC").s().p("AgNAbIAAgzIAIAAIAAAIQADgGACgCQACgBADAAQAEAAAFACIgDAJQgDgCgEAAQgCAAgCACQgCABgBADIgBAKIAAAbg");
	this.shape_14.setTransform(207.5,666.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5166AC").s().p("AgTAXQgEgEAAgGQAAgFACgCQABgEAEgCIAFgBIAIgCQAKgBAFgCIAAgCQAAgGgCgCQgEgDgGAAQgGAAgCACQgEACgBAGIgJgBQACgFADgEQACgEAFgBQAFgCAGAAQAHAAAEABQAEACACADQACACABADIAAAIIAAAMIABAPIACAGIgKAAIgBgHQgFAFgFACQgDABgFAAQgIAAgGgEgAgBAEIgIABIgEADIgBAEQABADACADQADACAFAAQAEAAAEgCQAEgCACgEIABgJIAAgDQgEACgJACg");
	this.shape_15.setTransform(202.6,666.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5166AC").s().p("AgDAkIAAhHIAHAAIAABHg");
	this.shape_16.setTransform(198.7,665.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5166AC").s().p("AgLAZQgEgCgCgDQgCgCgBgEIAAgIIAAgfIAIAAIAAAcIABAIQABAEADACQADACADAAQADAAAEgCQAEgCABgEQABgDAAgGIAAgbIAJAAIAAAzIgIAAIAAgIQgGAJgKAAQgEAAgEgCg");
	this.shape_17.setTransform(194.9,666.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5166AC").s().p("AgPAhQgFgFAAgHIAJABQAAADACACQAEADAFAAQAFAAAEgDQADgCACgEIAAgMQgGAHgIAAQgKAAgGgIQgGgIAAgJQAAgHADgHQADgGAFgDQAFgEAGAAQAJAAAGAIIAAgHIAIAAIAAAsQAAAMgDAFQgCAFgFADQgGADgHAAQgJAAgGgEgAgJgYQgDAFAAAJQAAAKADAEQAEAFAFgBQAHABADgFQAFgEAAgKQAAgJgFgFQgDgFgHAAQgFAAgEAFg");
	this.shape_18.setTransform(189.2,667.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5166AC").s().p("AgQAUQgHgHAAgNQAAgMAHgHQAGgHAKAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAFQAEAEAGAAQAFAAADgDQAEgCACgGIAJABQgDAJgFAEQgGAEgJAAQgLAAgGgHgAgJgPQgEAFAAAGIAcAAQgBgGgDgDQgEgGgHAAQgFAAgEAEg");
	this.shape_19.setTransform(183.8,666.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5166AC").s().p("AAUAkIgKgPIgHgKIgEgFIgEgCIgFAAIgLAAIAAAgIgKAAIAAhHIAfAAQAKAAAEACQAFACAEAFQACAFAAAGQAAAHgEAGQgGAEgKABIAGAEQAFAEADAFIAMAUgAgVgDIAUAAQAFAAAEgCQAEgBACgDQACgDAAgDQAAgFgEgEQgEgDgHAAIgWAAg");
	this.shape_20.setTransform(177.8,665.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 19
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#363435").s().p("Ak5BgIAAi/IJzAAIAAC/g");
	this.shape_21.setTransform(251.7,725.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#363435").s().p("AlnDzIAAnkILPAAIAAHkg");
	this.shape_22.setTransform(247,675.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Layer 18
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#363435").s().p("AgOAdIAAg4IAJAAIAAAJQADgGACgCQACgCAEAAQAFAAAEADIgCAJQgEgCgEAAQgDAAgCACQgCACgBADQgBAFAAAGIAAAdg");
	this.shape_23.setTransform(101.1,782.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#363435").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_24.setTransform(95.7,782.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#363435").s().p("AALAcIgJghIgCgKIgKArIgKAAIgSg3IAKAAIAJAfIADANIADgMIAKggIAIAAIAJAfIADAMIADgMIAJgfIAKAAIgSA3g");
	this.shape_25.setTransform(88.7,782.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#363435").s().p("AgSAWQgIgHAAgPQAAgPAJgIQAIgGAJAAQAMAAAHAIQAIAIAAANQAAAKgDAHQgEAGgGAEQgGADgIAAQgLAAgHgIgAgLgQQgFAGAAAKQAAALAFAGQAFAFAGAAQAHAAAFgFQAFgGAAgLQAAgKgFgGQgFgFgHAAQgGAAgFAFg");
	this.shape_26.setTransform(81.7,782.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#363435").s().p("AgdAnIAAhNIAdAAIAMAAQAGABAEADQADADADAFQACAEAAAGQAAAKgHAGQgFAHgRAAIgUAAIAAAggAgTgBIAUAAQAKAAAEgEQAFgEAAgGQAAgFgDgEQgCgDgEgBIgKgBIgUAAg");
	this.shape_27.setTransform(75.2,781.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#363435").s().p("AgOAFIAAgJIAdAAIAAAJg");
	this.shape_28.setTransform(69.5,782.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#363435").s().p("AgFAnIgehNIALAAIAUA4IAEANIAEgNIAWg4IAKAAIgfBNg");
	this.shape_29.setTransform(64.6,781.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#363435").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_30.setTransform(84.1,767);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#363435").s().p("AgEAnIAAhNIAJAAIAABNg");
	this.shape_31.setTransform(81.6,767);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#363435").s().p("AgSAWQgHgIAAgOQAAgNAHgIQAIgIAKAAQAMAAAHAIQAHAIAAANIAAACIgpAAQAAAKAFAFQAFAFAGAAQAFAAAEgDQAEgDACgGIAKABQgCAJgHAFQgGAFgKAAQgMAAgHgIgAgKgRQgEAFgBAHIAfAAQAAgHgDgEQgFgFgHAAQgGAAgFAEg");
	this.shape_32.setTransform(77.4,768.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#363435").s().p("AANAnIAAgkQAAgGgCgDQgEgEgFAAQgEAAgDADQgEACgCAEQgBACgBAHIAAAfIgJAAIAAhNIAJAAIAAAcQAHgIAJAAQAHAAAEACQAFADACAEQACAFAAAHIAAAkg");
	this.shape_33.setTransform(71.3,767);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#363435").s().p("AgPAlQgHgDgEgGQgEgGAAgIIAKgBQAAAGADAEQACAEAGACQAFACAGAAQAGAAAEgCQAFgBACgDQACgDAAgEQAAgEgCgDQgCgCgFgCIgNgEIgPgEQgGgDgDgEQgCgFAAgFQAAgGADgFQADgFAHgDQAGgDAIAAQAIAAAHADQAHADADAFQAEAGAAAHIgKAAQgBgHgEgEQgFgEgJAAQgJAAgEAEQgEADAAAFQAAAEADADQADADAMADIARAFQAHACADAFQADAFAAAGQAAAGgDAGQgEAFgHAEQgGADgJAAQgJAAgIgEg");
	this.shape_34.setTransform(64.5,767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 17
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC373E").s().p("AgCADIACgFIADAFg");
	this.shape_35.setTransform(95.1,697.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D74C39").s().p("AgCgJIAFAAIAAATg");
	this.shape_36.setTransform(94.5,698.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D64939").s().p("AgHAIIALgRIAEADIgKAQg");
	this.shape_37.setTransform(112.9,717);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DB3E3B").s().p("AgGAIIABAAIAAgTIAJAAIADAOIgFAIIgCABQgCAAgEgEg");
	this.shape_38.setTransform(95.4,698.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D64939").s().p("AgRATIAhgpIACALIggAhg");
	this.shape_39.setTransform(115.2,714.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D74D39").s().p("AgbgWIAIgIIAuA4IgFAFg");
	this.shape_40.setTransform(89.5,714.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D74C39").s().p("AgSg3QAGAEADgCIAFgIIAXB5IgIACg");
	this.shape_41.setTransform(96.6,705.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D74839").s().p("AgnBIIBFiTIAKAOIhHCJg");
	this.shape_42.setTransform(113.8,706);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DA403A").s().p("AgBAAIADgBIgBADQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_43.setTransform(75.3,699.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D74839").s().p("AgBAFIABgJIACAJg");
	this.shape_44.setTransform(117.1,698);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DB3F3B").s().p("AgGgGIAFAAIAIAFIgEAIg");
	this.shape_45.setTransform(117.5,699.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DB3F3B").s().p("AAAgFIAGAFIgLAHg");
	this.shape_46.setTransform(124.7,687.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DB3E3B").s().p("AALgCIgVAJQAEgWARANg");
	this.shape_47.setTransform(88.1,679.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DA403A").s().p("AgFAAQABgHAKgKIgEAjQgKgKADgIg");
	this.shape_48.setTransform(76,694.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D8483A").s().p("AgDgUQAKAOAAAHQABAMgOAIg");
	this.shape_49.setTransform(128.8,694.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D84C39").s().p("AgHAQIgBgEIADgNIAGgPIAIAgIgGAAIgCgGIgCAGIAAABg");
	this.shape_50.setTransform(95,695.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D74C39").s().p("AgJggIATAzIgCAOg");
	this.shape_51.setTransform(93.4,693.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DA403A").s().p("AAAAvQgEgDAAgCIAFhcIACAAIABABIABBkIgFgEg");
	this.shape_52.setTransform(73.8,704.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D8453A").s().p("AgCgvIAFgGIgDBrIgChlg");
	this.shape_53.setTransform(103.7,681.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D8483A").s().p("AACgjQABgDgEgEIgIgHIAPAAIADBfQAAABgHADIAAhVg");
	this.shape_54.setTransform(130.1,704.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D8453A").s().p("AAjggIhLAOQAPgMAVgDQALgCAbACQACAAACADQADAEAAACIgCA7g");
	this.shape_55.setTransform(97.2,678.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D8483A").s().p("AgaATIAlgwIAQACIgzA5g");
	this.shape_56.setTransform(119.5,709.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D84C39").s().p("AgDAKQgEgRgIg7QAAgDADgFIAEgHIAYCjQgQg7gDgNg");
	this.shape_57.setTransform(93.4,685.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DA403A").s().p("AghgYIARAFIgBgVIAzBJIgIAIg");
	this.shape_58.setTransform(84.1,708.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D74739").s().p("AgfgvIAGgUIA5CEIgGADg");
	this.shape_59.setTransform(91.9,708);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D84D39").s().p("AgaCKIAwkIIAFgNIgQBsIgMBDIALgOIgbB2g");
	this.shape_60.setTransform(108.9,697.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D8453A").s().p("AgDCDIgIkEIAEAJQADAGAAAEIABAlQABAWACAQIANgmIgIDMg");
	this.shape_61.setTransform(102.3,696.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F3D135").s().p("AAAEYQgNgBgIgMQgGgJgJgDQgFgCgMAAIhsAAQgGg7AAgIQAAgpgjgXIg2gkIAAAAIgFgEIgNgPIAAABIgGgFIABAAIgBhkIAJgBQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAIABgBIAGAIIAlAlIAKAOIBtB4IAGgFIgwg5Ig0hJIAAAAIgEgFIgGgIIgIgJIgFgFIAAAAIgKgOIgFgFIABAAIgFgFIAAAAIgKgSIAAAAIgIgKIAEgkIAGgSIAIgKIAVgUIBVCcIA6BzIAHgDIg7iEIgDgFIAAgBIgTguIgFgJIAAgBIgEgJIAAAAIgYg4IAAgBIgEgIIAAgBIgGgNIAAAAIgFgWIAAAAIAGgJIANgOIAAAAIAFgEIAJgGIAAAAIAFgEIAAAAIAJgFIAXgJIgBgBIABAAIAAABIAbBkIABAGIADAIIAAACIAYBaIAAAAIAeB1IAHgBIgiipQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIAAgFIgZilIAAAAIAFgDIBNgOIAMFSIAHAAIANlGIACgJIATgCIAhADIABAAIAZAKIAAAAQAAABAAAAQABABAAAAQABAAAAABQAAAAABAAIAAAOIgIAvIAAACIgEANIgyEIIAJABIAch0IA7jTIA9AvIAFAFIABAWIgUAqIAAAAIgEAKIAAgBIgIAUIgBADIgFALIAAgBIgFAKIABAAIgFAKIAAgBIgGAOIAAAAIgDAKIhGCTIAIAEIBujNIAKgYIAAAAIAFgJIAAAAIAEgGIAFgJIANgHIASAVIAEAFIAFAJIgBAAIAFAOIgDAqIgGAIIgFAKIgOASIAAAAIgEAFIAAAAIgTAXIgFAEIABAAIgGAFIgDAKIgGAIIgFAFIABAAIgFAFIAAAAIhIBcIgMASIAFACIAKgRIBVhcIAIgHIAJgJIAMgSIAAAAIAgggIAAAAIAJgJIAAAAIAIAHQAEAEAAADIAABVIgFAEIgBABIgNAOIgTAOIABAAIgJAGIAAAAIgFAEIAAAAIgFAFIAAgBIgJAGQgtAWgCA5QgCAsgIAIQgIAHgsAAIgoAAQgVAAgEABQgNADgJANQgGALgLAAIgCgBg");
	this.shape_62.setTransform(102.3,703.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CE3639").s().p("AhMgCICaAAIAKADIiwACQAKgFACAAg");
	this.shape_63.setTransform(114.6,734.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CE3639").s().p("AhXABIAVgDICFAAQAFAAAGACIAKADg");
	this.shape_64.setTransform(90.1,734.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC373E").s().p("AggFCIgKgEQgGgCgFAAIiGAAIgWAEIgIguQgFgcAAgTQgBgXgJgQQgJgQgUgNQgQgJgUgRIgigeQgIgIgBgMQgNibBGhtQAXgmAfgcQCwiaC+BbQBVAnAyBEQAzBEAPBdQAEAZABAjIAAA+QAAAGgDAHQgDAIgFADIgrAjIgsAjQgOANgDARQgFAigGBEQgBAFgEAJIgLgEIibAAQgCAAgJAGQgMAXgWAAQgVAAgMgXgAjJB+QAjAWAAApQAAAJAGA7IBsAAQAMAAAFABQAJADAGAJQAIANAMABQANABAHgMQAJgMANgDQAEgBAVAAIAoAAQAsAAAIgIQAIgHACgtQACg4AtgWIAJgGIAAAAIAKgIIAJgGIgBAAIATgOIANgPIABAAIAFgEIAAAAQAHgDAAgBIgEhfIgPAAIAAgBIgJAKIAAAAIggAfIAAABIgMARIgJAKIgIAGIgQgCIAAAAIAFgFIgBAAIAFgFIAGgJIADgJIAGgFIgBAAIAYgcIAAABIAEgGIAAABIAOgTIAFgJIAGgJQAPgIgBgLQAAgJgLgNIgFgOIABAAIgFgJIgEgGIgSgVIgIgFIgKAWIgEAFIAAAAIgFAJIAAAAIgKAYIgiA8IgJgFIgCgKIAAgBIAGgNIAAAAIAFgKIgBABIAFgKIAAAAIAFgLIABgCIAIgUIAAAAIAEgJIAAgBIAUgpIgBgXIgFgEIg9gwIg7DTIgMAOIANhEIAQhsIAAgCIAIgvIAAgOIgDgDIAAAAIgZgKIgBABIghgDIgTABIgCAJIgGAGIACBmIgBAOIgNAnQgBgQgBgWIgBglQAAgEgDgGIgFgKIAAgJIADg8QAAgDgDgDQgDgEgCAAQgagBgNABQgVADgPAMIgFAEIAAAAIgEAHQgDAFAAADQAIA7AEASQADANARA7IAAAFQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgHAPIgUg0IAAgCIgDgHIgBgHIgchlQgSgMgEAXIgJAFIAAgBIgFAFIAAAAIgJAFIgFAFIAAgBIgNAOIgGAJIAAAAIAFAXIAAgBIAGAOIAAAAIAEAJIAAAAIAYA4IAAABIAEAJIAAAAIAFAJIATAvIAAAAIADAGIgGASIhVibIgVAUIgIALIgGASIAAgBQgLAKgCAHQgCAJAKAKIABABIAIAKIAAgBIAKATIAAAAIAFAFIgBAAIAFAFIAKANIAAAAIAFAFIAIAKIAGAIIAEAFIABAUIgQgFIgKgPIglgkIgGgIIgBAAIABgDIgDABIgJACIgBgCIgCAAIgGBdQAAACAEACIAGAFIgBAAIAGAEIAAAAIANAOIAFAFIAAgBgADrBoIAAABg");
	this.shape_65.setTransform(102.2,703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 16
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#E2E2E2").p("AJJCMIyRAAIAAkYISRAAg");
	this.shape_66.setTransform(230.5,773);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ApICNIAAkYISRAAIAAEYg");
	this.shape_67.setTransform(230.5,773);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#E2E2E2").p("AHZCMIuwAAIAAkYIOwAAg");
	this.shape_68.setTransform(102.2,773);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EE445C").s().p("AnXCNIAAkYIOwAAIAAEYg");
	this.shape_69.setTransform(102.2,773);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#E2E2E2").p("AJJH8IyRAAIAAv3ISRAAg");
	this.shape_70.setTransform(230.5,695.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ApIH8IAAv3ISRAAIAAP3g");
	this.shape_71.setTransform(230.5,695.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#E2E2E2").p("AHZH8IuwAAIAAv3IOwAAg");
	this.shape_72.setTransform(102.2,695.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AnXH8IAAv3IOwAAIAAP3g");
	this.shape_73.setTransform(102.2,695.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(1));

	// Layer 15
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E2E2E2").s().p("Az6NrIAA7VMAn1AAAIAAbVg");
	this.shape_74.setTransform(172,722.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_74).wait(1));

	// Layer 14
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DC373E").s().p("AAAgCIACAFIgDAAg");
	this.shape_75.setTransform(703.2,442.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D74C39").s().p("AgCgJIAFABIgBASg");
	this.shape_76.setTransform(702.7,443.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D64939").s().p("AgHAIIALgRIADADIgJAQg");
	this.shape_77.setTransform(721.1,461.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DB3E3B").s().p("AgGAIIAAAAIABgSIAJgBIADAOQgDAHgCABIgCABQgCAAgEgEg");
	this.shape_78.setTransform(703.6,443.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D64939").s().p("AgSATIAigoIADALIghAhg");
	this.shape_79.setTransform(723.3,459);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D74D39").s().p("AgbgWIAIgIIAvA4IgHAFg");
	this.shape_80.setTransform(697.6,459.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D74C39").s().p("AgSg4QAGAFADgCQACgBADgHIAXB5IgIACg");
	this.shape_81.setTransform(704.7,450.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D74839").s().p("AgnBIIBFiTIAJAPIhGCIg");
	this.shape_82.setTransform(722,450.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DA403A").s().p("AgBAAIADgBIgCADQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_83.setTransform(683.5,444.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D74839").s().p("AgBAEIABgIIADAJg");
	this.shape_84.setTransform(725.2,442.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DB3F3B").s().p("AgGgHIAFABIAJAFIgGAJg");
	this.shape_85.setTransform(725.7,444.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DB3F3B").s().p("AAAgGIAGAGIgMAGg");
	this.shape_86.setTransform(732.8,432.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DB3E3B").s().p("AALgCIgVAJQADgWASANg");
	this.shape_87.setTransform(696.3,424);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DA403A").s().p("AgFAAQACgHAKgKIgFAjQgKgKADgIg");
	this.shape_88.setTransform(684.1,439.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D8483A").s().p("AgDgUQAKAOAAAHQABAMgOAIg");
	this.shape_89.setTransform(737,439.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D84C39").s().p("AgGAQIgCgEIADgNIAGgPIAIAgIgGAAIgCgGIgCAHg");
	this.shape_90.setTransform(703.1,440.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D74C39").s().p("AgJggIATAzIgCAOg");
	this.shape_91.setTransform(701.5,438.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DA403A").s().p("AgDAqIAEhdIACAAIACACIAABlQgJgHABgDg");
	this.shape_92.setTransform(682,449.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D8453A").s().p("AgCgvIAFgGIgDBrg");
	this.shape_93.setTransform(711.9,426.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D8483A").s().p("AADgjQgBgDgDgEIgIgHIAPAAQADA1AAAqIgHAEIABhVg");
	this.shape_94.setTransform(738.3,449.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D8453A").s().p("AAkggIhMAOQAPgMAVgDQAMgCAaACQACAAADADQADAEgBACIgCA7g");
	this.shape_95.setTransform(705.3,423.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D8483A").s().p("AgaAUIAlgyIAQADIgyA6g");
	this.shape_96.setTransform(727.7,454.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D84C39").s().p("AgDAKQgFgXgHg1QAAgDACgFIAFgHIAYCjQgRg8gCgMg");
	this.shape_97.setTransform(701.6,430.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DA403A").s().p("AghgYIARAFIgCgVIA0BJIgIAIg");
	this.shape_98.setTransform(692.3,453);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D74739").s().p("AgfgvIAGgUIA5CEIgGADg");
	this.shape_99.setTransform(700,452.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D84D39").s().p("AgaCKIAwkIIAFgNIgQBsIgMBDIALgOIgcB2g");
	this.shape_100.setTransform(717.1,442.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D8453A").s().p("AgDCCIgIkEIAEAKQADAGAAAEIABAlQABAWACAQIAMgnIgIDMg");
	this.shape_101.setTransform(710.5,441);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F3D135").s().p("AgBEYQgNgBgIgMQgFgJgJgDQgFgCgMAAIhtAAQgGguAAgVQABgpgkgXIg1gkIAAAAIgFgEIgOgPIAAABIgFgEIAAhlIAJgBQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIABgBIAGAIIAlAlIAJAOIBtB4IAHgFIgwg5Ig0hJIAAAAIgFgFIABAAIgOgRIgGgFIABAAIgGgJIgEgFIgFgFIAAAAIgEgFIgKgSIAAAAIgJgKIAFgkIgBAAIAGgSIAEgFIAAAAIAagZIBVCcIA6BzIAGgDIg6iEIgEgFIABgBIgPglIgFgJIAAAAIgEgJIAAgBIgEgJIgBAAIgXg4IAAgBIgFgIIAAgBIgGgNIABAAIgFgWIAAAAIAFgJIAFgFIgBAAIAFgFIAAABIAKgJIAJgGIgBAAIAGgEIAAAAIAJgFIAAAAIAWgJIAcBkIABAGIADAIIAAACIARBCIACAEIAFAUIgBAAIAeB1IAIgBIgiipQABAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIgZilIgBAAIAGgDIAAAAIBNgOIALFSIAIAAIANlGIABgJIATgCIAhADIACAAIAZAKQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAAAOIgHAvIAAACIgFANIgxEIIAIABIAdh0IA7jTIA9AvIAFAFIAAAXIABgBIgZA0IAAgBIgIAUQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFALIAAgBIgFAKIAAAAIgEAKIAAgBIgGAOIgBAAIgDAKIhFCTIAIAEIBtjNIALgYIAFgJIgBAAIAKgPIgBAAIANgHIAXAaIgBAAIAFAJIAFAOIgEAqIgGAIIgFAKIgOASIgJAKIgOASIABAAIgFAEIAAAAIgFAFIgEAKIgGAIIgEAFIAAAAIgEAFIhJBcIgLASIAEACIALgRIBmhsIALgSIAJgIIAAAAIAFgFIAAAAIAcgcIAHAHQAFAEAAADIgBBWIABAAIgFADIgCABIgMAOIgTAOIAAAAIgJAGIgKAJIAAgBIgJAGQgsAWgDA5QgCAsgIAIQgIAHgsAAIgoAAQgUAAgEABQgNADgJANQgHALgLAAIgCgBgADogegADogeIABAAIgBAAg");
	this.shape_102.setTransform(710.5,448.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CE3639").s().p("AhSAAQAEgCACAAICaAAIAKADIivACIAFgDg");
	this.shape_103.setTransform(722.7,479.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CE3639").s().p("AhYABIAWgDICGAAIAVAFg");
	this.shape_104.setTransform(698.3,479.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DC373E").s().p("AggFCIgUgGIiHAAIgWAEIgIguQgFgcAAgTQgBgXgJgQQgJgQgUgNQgQgKgUgQIgigeQgIgIgBgMQgMibBFhtQAZgoAegaQCuiaDABbQBUAnAyBEQAzBEAPBdQAEAZABAjIAAA+QAAAGgDAHQgDAIgFADQg6AugdAYQgNAMgEASQgFAigGBFIgFANIgLgEIibAAQgCAAgDACIgGAEQgLAXgXAAQgVAAgMgXgAjJB+QAjAXAAAoQAAAWAGAuIBsAAQANAAAFABQAIADAGAJQAIANAMABQANABAHgMQAJgMANgDQAFgBAUAAIAoAAQAsAAAIgIQAIgHACgtQACg4AtgWIAJgGIAAAAIAKgIIAJgGIgBAAIATgOIANgPIABAAIAFgEIAHgEQAAgqgEg1IgPAAIgbAbIAAABIgFAFIAAgBIgJAJIgLARIgRAQIgRgCIAFgFIgBAAIAFgFIAGgJIAEgJIAFgFIgBAAIAFgFIAAAAIAGgIIARgTIAAgBIAAABIAOgTIAFgJIAGgJQAPgIgBgLQAAgJgLgNIgEgOIgFgJIAAAAIgWgbIgIgFIgFANIAAAAIgJAOIAAAAIgFAJIgKAYIghA8IgKgFIgCgKIAAgBIAGgNIAAAAIAFgKIAAABIAEgKIAAAAIAFgLQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAIgUIAAAAIAYgzIAAAAIgBgWIgFgFIg9gwIg7DTIgLAOIAMhEIARhsIgBgCIAIgvIAAgOIgDgDIgZgKIgBABIghgDIgTABIgCAJIgGAGIABB0IgNAnQgBgQgBgWIgBglQAAgEgDgGIgEgKIgBgJIADg8QAAgDgDgDQgCgEgDAAQgagBgNABQgVADgPAMIABAAIgGAEIAAAAIgEAHQgDAFABADQAGA1AFAYQADAMARA8IAAAFQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgIAPIgUg0IAAgCIgDgHIgBgHIgchlQgSgMgDAXIgBAAIgJAFIAAgBIgFAFIAAAAIgJAFIgJAJIAAAAIgFAFIAAAAIgEAEIgGAJIABAAIAEAXIAAgBIAGAOIAAAAIAEAJIAAAAIAYA4IAAABIAFAJIAAAAIAEAJIAAABIAFAJIgBAAIAPAlIAAAAIADAGIgGASIhVibIgaAaIABAAIgEAFIgGASQgLAJgCAHQgCAKALAKIAAgBIAIALIAAgBIALATIgBAAIAFAFIgBAAIAFAFIAEAFIAGAIIAAAAIAFAFIAOASIAAgBIAEAGIACAUIgRgFIgKgPIglgkIgGgIIgBAAIABgDIgDABIgIACIgCgCIgCAAIgFBdQgBADAKAGIgBAAIAGAEIAAAAIANAOIAFAFIAAgBg");
	this.shape_105.setTransform(710.4,447.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]}).wait(1));

	// Layer 12
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E2E2E2").s().p("AFrF+IrZAAQgPAAAAgLIAAriQAAgGAHgEQAGgEAFAAILZAAQAQAAAAALIAALiQAAAJgKADIgHACIgCAAgAlbFmIK3AAIAArKIq3AAg");
	this.shape_106.setTransform(710.4,443.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AlsFxIAAriILZAAIAALig");
	this.shape_107.setTransform(710.4,443.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106}]}).wait(1));

	// Layer 11
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E74C38").s().p("Egr1ABWIAAirMBXrAAAIAACrg");
	this.shape_108.setTransform(865,478.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F6EB3A").s().p("Egr1ACsIAAlWMBXrAAAIAAFWg");
	this.shape_109.setTransform(865,470.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8F9181").s().p("EgsrAE+IAAp7MBZXAAAIAAJ7g");
	this.shape_110.setTransform(859.6,455.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]}).wait(1));

	// Layer 13
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#AAAC95").s().p("EgvOABRIFHihMBZWAAAIlHChg");
	this.shape_111.setTransform(859.6,488.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).wait(1));

	// Layer 10
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8F9181").s().p("EgBVAh4MAAAhDvICrAAMAAABDvg");
	this.shape_112.setTransform(1085,696.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8F9181").s().p("EgBVAh9MAAAhD6ICrAAMAAABD6g");
	this.shape_113.setTransform(625.1,703.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112}]}).wait(1));

	// Layer 9
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B5D347").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_114.setTransform(1033.9,738.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B5D347").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_115.setTransform(1022.3,740);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B5D347").s().p("AASAlIAAgrQAAgHgCgEQgBgEgEgCQgEgCgEAAQgIAAgFAEQgGAGAAANIAAAnIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAHAAAFACQAFACADAEQADAEABAFIABANIAAArg");
	this.shape_116.setTransform(1014.5,739.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B5D347").s().p("AgfAzIAAhjIAMAAIAAAJQAEgFAFgDQAFgDAGAAQAJAAAHAEQAHAFAEAJQAEAJAAAKQAAALgEAJQgEAIgIAFQgIAEgIABQgFgBgFgCQgFgDgDgDIAAAjgAgNghQgGAHAAAOQAAANAFAHQAGAGAIABQAHgBAGgHQAGgHAAgNQAAgOgGgHQgFgGgIAAQgHgBgGAIg");
	this.shape_117.setTransform(1003,741.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B5D347").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgEQgDgDgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgFAGgEQAGgDAHAAQAIAAAFADQAEAEADAGQAIgNAOAAQALAAAGAGQAFAFAAANIAAAxg");
	this.shape_118.setTransform(993.1,739.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B5D347").s().p("AgPAiQgHgCgCgEQgDgDgBgGIgBgLIAAgsIANAAIAAAnIABANQABAFADADQAEADAFgBQAGAAAEgCQAFgDACgFQACgFAAgJIAAgmIANAAIAABHIgLAAIAAgKQgJAMgOAAQgGAAgFgDg");
	this.shape_119.setTransform(983.4,740.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B5D347").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAGAAAIQAAANgIAHQgIAKgVgBIgZAAIAAApgAgYgBIAZAAQANAAAFgGQAFgEAAgJQAAgGgDgEQgDgFgFgCIgNAAIgYAAg");
	this.shape_120.setTransform(975.1,738.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EF4B38").s().p("AoiCHIAAkNIRFAAIAAENg");
	this.shape_121.setTransform(1011.4,740.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BBD245").s().p("Ak2CbIAAk1IJtAAIAAE1g");
	this.shape_122.setTransform(1008.8,877.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2A7045").s().p("AoBOeIAA2YIjYAAIAAmjIWzAAIAAGjIj0AAIAAWYgAlREVIJtAAIAAsPIptAAg");
	this.shape_123.setTransform(1011.5,814);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B5D347").s().p("AAGAyIAAhNQgEAEgHAEQgHAFgFACIAAgMQAKgFAHgHQAIgHADgGIAIAAIAABjg");
	this.shape_124.setTransform(672.9,738.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B5D347").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_125.setTransform(661.7,740);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B5D347").s().p("AARAlIAAgrQAAgHgBgEQgCgEgDgCQgEgCgEAAQgIAAgFAEQgGAGAAANIAAAnIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIABANIAAArg");
	this.shape_126.setTransform(653.9,739.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B5D347").s().p("AgfAzIAAhjIAMAAIAAAJQAEgFAFgDQAFgDAGAAQAJAAAHAEQAHAFAEAJQAEAJAAAKQAAALgEAJQgEAIgIAFQgIAEgIABQgFgBgFgCQgFgDgDgDIAAAjgAgNghQgGAHAAAOQAAANAFAHQAGAGAIABQAHgBAGgHQAGgHAAgNQAAgOgGgHQgFgGgIAAQgHgBgGAIg");
	this.shape_127.setTransform(642.4,741.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B5D347").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgEQgDgDgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgFAGgEQAGgDAHAAQAIAAAFADQAEAEADAGQAIgNAOAAQALAAAGAGQAFAFAAANIAAAxg");
	this.shape_128.setTransform(632.5,739.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B5D347").s().p("AgPAiQgHgCgCgEQgCgDgCgGIgBgLIAAgsIANAAIAAAnIABANQABAFADADQAEADAFgBQAFAAAFgCQAFgDACgFQACgFAAgJIAAgmIANAAIAABHIgMAAIAAgKQgIAMgNAAQgHAAgFgDg");
	this.shape_129.setTransform(622.7,740.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B5D347").s().p("AglAyIAAhjIAlAAIAPABQAHABAFADQAFAEADAGQADAGAAAIQAAANgIAHQgIAKgVgBIgZAAIAAApgAgYgBIAZAAQANAAAFgGQAFgEAAgJQAAgGgDgEQgDgFgFgCIgNAAIgYAAg");
	this.shape_130.setTransform(614.4,738.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]}).wait(1));

	// Layer 8
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EF4B38").s().p("AoiCHIAAkNIRFAAIAAENg");
	this.shape_131.setTransform(650.8,740.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_131).wait(1));

	// Layer 7
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BBD245").s().p("Ak2CbIAAk1IJtAAIAAE1g");
	this.shape_132.setTransform(648.2,877.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2A7045").s().p("AoBOeIAA2YIjYAAIAAmjIWzAAIAAGjIj0AAIAAWYgAlREVIJtAAIAAsPIptAAg");
	this.shape_133.setTransform(650.9,814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132}]}).wait(1));

	// Layer 6
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#ED3338").s().p("AgEB6QgKgGgEgIQgDgJAAgdIAAhqIgYAAIAAgZIAYAAIAAguIAegTIAABBIAgAAIAAAZIggAAIAABsQAAANACAEQACAEADACQAEADAHAAIAOgCIAEAcQgNADgLAAQgQAAgJgFg");
	this.shape_134.setTransform(955,545.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#ED3338").s().p("AgyBgIAAi6IAdAAIAAAcQALgTAJgHQAIgHALAAQAQAAARALIgLAdQgMgGgMgBQgKAAgHAHQgIAGgEALQgFARAAAUIAABhg");
	this.shape_135.setTransform(945.2,548.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ED3338").s().p("AhEBTQgRgPAAgYQAAgOAHgLQAFgLALgHQAJgGANgEQAKgCASgCQAmgFASgGIAAgIQAAgTgJgJQgMgKgXAAQgWAAgLAHQgKAJgGATIgegEQAEgUAJgMQAKgMASgHQATgGAWgBQAYAAAPAGQAQAGAHAJQAGAIADANQACAIAAAVIAAAqQAAArACAMQACAMAGALIghAAQgFgKgBgOQgSAQgQAFQgQAHgSAAQgfgBgQgOgAgHAMQgUACgHAEQgJAEgEAGQgEAHAAAIQAAANAJAIQAKAJASAAQARAAAPgIQAOgIAHgOQAFgKAAgWIAAgLQgRAHgiAFg");
	this.shape_136.setTransform(927.7,548.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#ED3338").s().p("ABbCBIAAjXIhMDXIgdAAIhLjbIAADbIghAAIAAkBIA0AAIA8C2IAMAmIANgqIA+iyIAuAAIAAEBg");
	this.shape_137.setTransform(902.7,544.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#ED3338").s().p("AgpB3QgSgNgLgWQgKgWAAgcQAAgcAJgWQAKgXASgMQATgMAXAAQAQAAANAHQANAHAIAMIAAhdIAgAAIAAEBIgdAAIAAgYQgSAcgiAAQgWAAgTgMgAghgUQgOARAAAlQAAAjAPASQAPASATAAQAVAAAPgRQAOgRAAgjQAAglgPgSQgOgSgWAAQgUAAgOARg");
	this.shape_138.setTransform(867.1,544.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#ED3338").s().p("Ag/BIQgXgZAAgvQAAgzAdgYQAXgWAiAAQAnAAAYAaQAZAZgBAtQABAjgLAUQgMAVgUAMQgVALgYAAQgmgBgZgZgAgng1QgPATAAAiQAAAkAPASQAQARAXAAQAYAAAPgRQAQgSAAgkQAAgigQgTQgPgRgYAAQgXAAgQARg");
	this.shape_139.setTransform(847.7,548.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#ED3338").s().p("Ag/BIQgYgZAAgvQABgzAdgYQAXgWAiAAQAmAAAZAaQAYAZABAtQgBAjgKAUQgMAVgUAMQgVALgYAAQgmgBgZgZgAgmg1QgQATAAAiQAAAkAQASQAPARAXAAQAXAAAQgRQAQgSAAgkQAAgigQgTQgQgRgXAAQgXAAgPARg");
	this.shape_140.setTransform(827.7,548.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#ED3338").s().p("AhWCBIAAkBICtAAIAAAeIiLAAIAABQIB4AAIAAAeIh4AAIAAB1g");
	this.shape_141.setTransform(807.4,544.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]}).wait(1));

	// Layer 5
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFDC84").s().p("EgkaAFtIAArZMBI1AAAIAALZg");
	this.shape_142.setTransform(855.6,538.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_142).wait(1));

	// Layer 4
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E5EEED").s().p("An2iLICBjiINsJJIh5CSg");
	this.shape_143.setTransform(1000.8,638.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C9E8E5").s().p("ApzGjIAAtFITnAAIAANFg");
	this.shape_144.setTransform(1000.8,640.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#808051").s().p("ArfHWIAAurIW/AAIAAOrg");
	this.shape_145.setTransform(1000.9,640.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]}).wait(1));

	// Layer 3
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E5EEED").s().p("AkMhiIBriOIGuGGIhcBbg");
	this.shape_146.setTransform(861.8,696);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C9E8E5").s().p("AllI/IAAx8ILLAAIAAR8g");
	this.shape_147.setTransform(870.5,699.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#808051").s().p("AnGJtIAAzYIONAAIAATYg");
	this.shape_148.setTransform(869.8,695.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]}).wait(1));

	// Layer 2
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E5EEED").s().p("An2iLICAjiINuJJIh7CSg");
	this.shape_149.setTransform(714.6,643.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C9E8E5").s().p("AqoGjIAAtFIVRAAIAANFg");
	this.shape_150.setTransform(716.2,640.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#808051").s().p("AsaHzIAAvmIY1AAIAAPmg");
	this.shape_151.setTransform(717.2,640.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]}).wait(1));

	// Layer 1
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F8EF77").s().p("EgkaAPbIAA+1MBI1AAAIAAe1g");
	this.shape_152.setTransform(855.6,658.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_152).wait(1));

	// Layer 22
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2A7045").s().p("AglAaQgQgIAAgSQAAgKAGgHQAGgHAMgEQAMgEARAAQANAAALACQAKACAGAEQAHAEADAGQAEAFAAAJQAAALgGAHQgGAHgMAEQgMAEgSAAQgXAAgOgHgAgWgVQgKAGAAAPQAAAQAJAFQAKAFANAAQAOAAAKgFQAJgFAAgQQAAgPgJgFQgKgFgOAAQgNAAgJAEg");
	this.shape_153.setTransform(599.8,841.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2A7045").s().p("AAKAgIAAgxQgHADgLACQgMADgKABIAAgHQASgDAMgFQAMgEAGgEIAMAAIAAA/g");
	this.shape_154.setTransform(586.1,841);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2A7045").s().p("AgeAEIAAgHIA9AAIAAAHg");
	this.shape_155.setTransform(599.8,834.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2A7045").s().p("AgeAEIAAgHIA9AAIAAAHg");
	this.shape_156.setTransform(592.1,834.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2A7045").s().p("AgeAEIAAgHIA9AAIAAAHg");
	this.shape_157.setTransform(584.4,834.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2A7045").s().p("AgkAdQgMgFgDgHIAUgBQADAGAHACQAHACALAAQAIAAAHgBQAHgCAFgDQAEgDADgEQADgFAAgFIAAgCQgGAEgKADQgLACgLAAQgVAAgOgGQgPgFAAgJQAAgKAPgGQAPgGAXAAQAPAAANADQAOAEAHAGQAHAGAAAMQAAAMgHAHQgHAHgOAEQgOAEgRAAQgTAAgNgEgAgXgVQgKAEAAAHQAAAGAKAEQAKADANAAQAOAAAJgDQAJgEAAgHQAAgGgJgEQgKgEgNAAQgMAAgLAEg");
	this.shape_158.setTransform(593.4,827);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#ED3937").s().p("AgxAjQgWgLAAgYQAAgOAIgKQAIgJAQgFQAQgFAXAAQASAAANADQAOADAIAFQAJAFAFAIQAFAHAAAMQAAAPgIAJQgIAKgQAFQgQAFgYAAQgfAAgSgJgAgdgcQgOAIAAAUQAAAVAMAHQANAHASAAQATAAAMgHQANgHAAgVQAAgUgNgHQgMgHgTAAQgSAAgLAGg");
	this.shape_159.setTransform(616.9,794.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#ED3937").s().p("AAOArIAAhCQgKADgPAEIgdAGIAAgKQAXgFARgGQAQgFAIgGIARAAIAABVg");
	this.shape_160.setTransform(598.7,794.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#ED3937").s().p("AgpAFIAAgJIBTAAIAAAJg");
	this.shape_161.setTransform(617,783.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#ED3937").s().p("AgpAFIAAgJIBTAAIAAAJg");
	this.shape_162.setTransform(606.7,783.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#ED3937").s().p("AgpAFIAAgJIBTAAIAAAJg");
	this.shape_163.setTransform(596.4,783.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#ED3937").s().p("AgwAmQgRgFgDgLIAagBQAEAIAJADQAJADAPAAQAMAAAJgCQAJgCAHgEQAGgEAEgGQAEgHAAgGIAAgCQgJAFgOADQgOADgPAAQgcAAgTgIQgTgGAAgNQAAgNAUgIQAUgIAeAAQAUAAASAFQASAEAKAIQAJAJAAAQQAAAPgJAKQgKAKgSAFQgSAFgYAAQgaAAgQgGgAgfgdQgNAGAAAJQAAAJANAFQANAEASAAQASAAAMgEQANgFAAgKQAAgJgNgFQgMgFgSAAQgRAAgOAFg");
	this.shape_164.setTransform(608.4,770.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.5,405.1,1180.5,515.7);


(lib.startscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("AP2EGQgcgGgXgUQgNgKgKgQQgLgRgEgXIBYAAQADAKAFAFQAEAGAGAEQAHAEAJACIASACQASAAAJgFQAKgEAEgEQAHgIAEgKQADgKABgKIABgOIAAgdQgFAIgIAJQgJAIgPAGQgPAGgWABQgdAAgXgJQgXgJgRgSQgPgPgKgXQgLgXAAghQAAgfAKgZQALgaAQgRQAHgHANgJQAMgIASgGQARgFAYAAQAWAAAPAGQAPAHAJAJQAJAIAEAHIAAgdIBRAAIAADqQAAARgCATQgCASgGASQgHASgOAQQgQAQgTAIQgTAIgTADQgSACgPAAIgGAAQgWAAgYgGgAQRgrQgLAFgIAHQgJAJgFANQgFAMAAAMQAAAMAEAMQAFALAIAJQAIAJAMAEQALAFAOAAQAQAAALgFQALgFAGgGQAJgJAGgMQAFgNAAgOQAAgOgGgLQgFgMgIgIQgJgIgMgEQgMgDgLAAQgNAAgMAEgAuFCUQgfAAgYgKQgYgKgSgRQgOgOgMgYQgMgXgBgiQABgfALgZQAMgZASgRQAVgUAYgIQAYgIAaABQAQAAAQADQAPADAQAIIAABJQgPgMgOgEQgNgDgKAAQgTABgMAGQgLAGgEAFQgIAIgGAMQgEALgBAPQAAAOAFALQAEAMAIAIQAJAKANAFQANAFAOAAQALAAANgEQANgEAOgMIAABJQgQAJgPADQgOADgPAAIgEAAgALuCUQgcABgYgIQgZgHgWgWQgRgQgKgYQgKgZgBgfQAAgaAKgaQAKgaASgUQAYgWAZgHQAagHAVABQAOgBASADQARADARAIQASAIAPAQQAWAYAHAbQAHAbgBAXIAAAIIi6AAQAAAKAEAMQAEAMAHAJQAKAKALADQALADAKgBQAJAAAIgBQAJgCAGgEIAHgFQAFgFAGgLIBMAIQgJAagOAPQgOAPgMAHQgSALgUADQgSAEgTAAIgEAAgAMngSQAAgDgEgIQgEgJgIgJQgHgHgKgDQgJgEgMAAQgQAAgKAFQgJAFgGAGIgJAMQgDAGgCAJIBtAAIAAAAgA29CUQgzAAgkgPQgkgPgXgYQgagZgQgkQgQgjgBgtQABgsAQgkQAQgkAagYQAYgZAkgOQAjgPAsAAQASgBAWAFQAWAFAcAMIAABjQgPgQgVgLQgWgMgegBQgXAAgTAIQgTAHgPAOQgQAQgJAWQgKAWAAAbQAAAdAKATQAJAVANAMIAPAMQAKAHAQAGQARAGAXABQARAAAWgIQAWgHAZgYIAABjQgZAMgUAEQgTAEgPAAIgEAAgAhiCIQgcgLgRgRQgTgTgJgZQgJgZAAgYQAAgYAJgYQAJgZATgTQARgRAcgMQAcgLAkAAQAkAAAcALQAcAMARARQATATAJAZQAJAYAAAYQAAAYgJAZQgJAZgTATQgRARgcALQgcAMgkAAQgkAAgcgMgAg7gsQgLAEgJAJQgJAJgEALQgFALAAAPQAAARAFAMQAGALAHAHQAIAIALAFQALAFAQAAQAOAAALgFQAKgEAJgJQAJgJAFgLQAEgMAAgPQAAgPgEgLQgFgLgJgJQgJgJgKgEQgMgFgOAAQgNAAgMAFgAG7CMIiMAAIAAl1IByAAQAKAAARACQARABASAGQASAGAPAOQAMALAGAOQAFANACAMQACAMAAAIQAAALgCAMQgDANgIAMQgHAMgIAGQgJAGgHADQAOADAOAGQANAGALALQAJAJAHAQQAHAPABAZQgBAcgIATQgJASgLALQgQAPgSAGQgTAHgRACIgYACIgFAAgAGEBIIAVAAQAQABASgDQARgCAMgLQAGgFADgIQAEgIAAgKQgBgLgDgIQgEgHgEgDQgIgHgLgDQgLgDgLgBIgVAAIgXAAgAGEhRIAOAAQAJAAAMgCQANgCAKgHQAGgEAEgIQAEgIABgNQgBgMgEgHQgFgIgFgEQgKgHgLgBQgMgCgMABIgNAAgAY6CMIAAiAQAAgMgCgOQgCgNgKgKQgEgFgIgDQgHgDgLAAQgNAAgIAEQgIAEgFAFQgKAKgDANQgDAMAAAMIAACAIhQAAIAAj5IBQAAIAAAeQATgXAUgHQAVgHASAAQAQAAAUAFQATAFAQAPQARATAFATQAEAUAAAQIAACdgAT3CMIAAj5IBQAAIAAD5gAlNCMIAAi4IgcAAIAAhBIAcAAIAAhRIBRAAIAABRIAxAAIAABBIgxAAIAAC4gApcCMIhghsIAABsIhRAAIAAmXIBRAAIAAD6IBbhcIBqAAIh3BwIB/CJgAyVCMIAAj5IBQAAIAAD5gA0tCMIAAmXIBRAAIAAGXgAT+i2QgOgNAAgVQAAgUAOgNQANgNAUgBQAUABANANQAOANAAAUQAAAVgOANQgNANgUAAQgUAAgNgNgAyOi2QgOgNAAgVQAAgUAOgNQANgNAUgBQAUABANANQAOANAAAUQAAAVgOANQgNANgUAAQgUAAgNgNg");
	this.shape.setTransform(-0.4,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("EgjCgPuMAjCAATMAjKAAPIgpgoIgLfPIA0g0IoygEIozgFYl3gDl3gDl3gBYl2gBl3ACl3ADIoyAFIozAHIA0A0IgIn0IgFj6IgFj5IgGj6IgGj6IgHj6IgIj0EgjPgP7IgJEBIgHD6IgGD6IgGD6IgFD5IgED6IgJH0IAAAzIA0AAIIzAHIIyAGYF3ADF3ABF2gBYF3gBF3gDF3gDIIzgFIIygDIA0gBIAAgzIgL/PIAAgpIgpAAMgjKAAQMgjPAAS");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("EgjJAPoIAA/PMBGTAAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.startscreen, new cjs.Rectangle(-230.2,-104.1,460.5,210.8), null);


(lib.overscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("AuNDDQgbABgXgJQgXgIgUgWQgUgVgIgYQgJgXAAgZQABggAKgaQAKgZASgRQARgRAWgIQAWgJAaAAQALgBAOADQANADAOAIQAOAIAMAPIAAgcIBRAAIAAD5IhRAAIAAgeQgLAQgNAJQgNAIgNADQgLACgKAAIgDAAgAuWADQgLAFgIAIQgHAGgGALQgFAMgBAQQABARAFALQAFALAGAGQAJAJAMAFQAMAGAPAAQAMAAALgFQAKgFAJgHQAIgIAFgMQAGgMAAgQQAAgNgFgMQgFgMgIgJQgKgIgMgFQgMgDgLAAQgNAAgMAEgAz4DDQgWABgXgEQgXgEgXgLQgXgMgWgWQgMgLgMgTQgNgTgJgcQgJgcAAglQAAgtAPgkQAPgkAYgYQAXgXAZgMQAagMAZgEQAZgEAWABQAYgBAbAGQAcAGAaARQATANAQASQAPARALASIhOAqQgGgKgIgLQgIgLgLgIQgNgJgOgEQgOgFgRAAQgZAAgTAIQgTAIgOAPQgPAQgIAXQgJAXAAAZQABAgAJAVQAKAVAMAMQAQAQATAHQATAGAVAAQAcgBAPgHQAQgGAGgGIAHgHQAFgFAGgJQAFgKAEgOIhaAAIAAhEIC5AAIAAAEQAAAWgFAcQgGAcgNAcQgNAcgUAWQgVAVgXAMQgWALgXAEQgUADgUAAIgFAAgARNDDQgcABgZgIQgZgHgWgWQgQgQgKgYQgLgZAAgfQAAgbAJgaQAKgZATgUQAXgWAagHQAZgHAWABQAOgBARADQARADASAIQARAIAQAQQAVAYAHAaQAHAbAAAYIAAAIIi6AAQAAAKADAMQAEAMAIAJQAJAKALADQAMADAJgBQAJAAAIgBQAJgCAHgEIAGgFQAGgFAFgLIBMAIQgJAagOAPQgOAPgLAHQgSALgUADQgSAEgTAAIgEAAgASFAcQAAgDgDgIQgEgJgJgIQgGgHgKgDQgKgEgMAAQgPAAgKAFQgKAFgGAFIgIAMQgEAGgCAJIBtAAIAAAAgAhfDDQgcABgYgIQgZgHgWgWQgRgQgKgYQgKgZgBgfQAAgbAKgaQAKgZASgUQAYgWAZgHQAagHAVABQAOgBASADQARADARAIQASAIAOAQQAWAYAHAaQAHAbgBAYIAAAIIi5AAQAAAKAEAMQAEAMAHAJQAKAKALADQALADAKgBQAJAAAIgBQAJgCAGgEIAHgFQAFgFAGgLIBLAIQgJAagOAPQgNAPgMAHQgSALgUADQgSAEgTAAIgEAAgAgmAcQAAgDgEgIQgEgJgIgIQgHgHgKgDQgJgEgMAAQgQAAgKAFQgJAFgGAFIgJAMQgDAGgCAJIBtAAIAAAAgAFeC7QgcgIgUgMQgVgNgOgOQgbgZgPgkQgQgkAAgqQAAgoAQglQAQgmAZgZQANgNAUgNQAUgMAcgIQAdgJAlAAQArAAAlANQAkAOAcAbQAbAaAQAkQAPAkAAAqQAAAmgOAkQgOAkgeAeQgaAagkAOQgjAPgvAAQgjAAgcgIgAFvhqQgVAIgQAPQgMAMgKAVQgKAVgBAeQAAAaAJAUQAIAVASARQASARAUAHQAUAHAVAAQAdgBAVgJQAUgIANgOQAMgLAKgUQAKgUABghQgBgcgJgVQgKgVgNgNQgOgOgVgIQgVgJgagBQgYAAgVAJgAUDC7IAAj5IBQAAIAAAnQAGgKAIgJQAIgKAKgGQAKgGAKgCQALgCAMAAIANABIANADIgEBKQgIgEgJgCQgJgDgLAAQgNAAgKAFQgKAEgHAIQgNAPgEASQgDASAAAQIAABmgAL+C7Ih+j5IBYAAIBACFIA/iFIBYAAIh+D5gAlrC7IAAh/QAAgKgCgOQgBgOgIgLQgFgGgHgDQgIgDgJAAQgKAAgIADQgIAEgFAHQgIALgCANQgDANAAAMIAAB9IhQAAIAAiCQAAgNgCgNQgCgNgJgKQgGgGgHgCQgIgBgGAAQgIAAgHABQgHADgGAFQgHAIgEAKQgDAKgBAJIgBAOIAACAIhQAAIAAj5IBQAAIAAAdQALgPANgIQAMgIAMgCQANgCAJAAQAJAAAMACQAOACAMAHQAKAFAIAKQAIAIAFAMQAEgIAIgIQAHgJAMgHQANgIANgDQANgDAPAAQAWAAASAGQASAGAMALQAMAMAFAOQAGAOABAMQACANgBAJIAACeg");
	this.shape.setTransform(1.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC98").s().p("EgjCgPuMAjCAATMAjKAAPIgpgoIgLfPIA0g0IoygEIozgFYl3gDl3gDl3gBYl2gBl3ACl3ADIoyAFIozAHIA0A0IgIn0IgFj6IgFj5IgGj6IgGj6IgHj6IgIj0EgjPgP7IgJEBIgHD6IgGD6IgGD6IgFD5IgED6IgJH0IAAAzIA0AAIIzAHIIyAGYF3ADF3ABF2gBYF3gBF3gDF3gDIIzgFIIygDIA0gBIAAgzIgL/PIAAgpIgpAAMgjKAAQMgjPAAS");
	this.shape_1.setTransform(0,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("EgjJAPoIAA/PMBGTAAAIAAfPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.overscreen, new cjs.Rectangle(-230.2,-104.1,460.5,210.8), null);


(lib.Road = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93CB2C").s().p("ADyFIIAAhVIJYAAIAABVgAqGFIIAAhVIJYAAIAABVgA5gFIIAAhVIJYAAIAABVgEgnZAFIIAAhVIJYAAIAABVgAeCFGIAAhVIJYAAIAABVgAQJFGIAAhVIJYAAIAABVgADyjpIAAhcIJYAAIAABcgAqGjpIAAhcIJYAAIAABcgA5gjpIAAhcIJYAAIAABcgEgnZgDpIAAhcIJYAAIAABcgAeCjsIAAhcIJYAAIAABcgAQJjsIAAhcIJYAAIAABcg");
	this.shape.setTransform(270.3,83.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E4F4C").s().p("EgrwAM4IAA5vMBXhAAAIAAZvgACQF9IAAAUIJYAAIAAgUIAAhWIpYAAgAroF9IAAAUIJYAAIAAgUIAAhWIpYAAgA7CF9IAAAUIJYAAIAAgUIAAhWIpYAAgEgo7AF9IAAAUIJXAAIAAgUIAAhWIpXAAgAcgF6IAAAUIJYAAIAAgUIAAhVIpYAAgAOnF6IAAAUIJXAAIAAgUIAAhVIpXAAgACQkRIAABcIJYAAIAAhcIAAgNIpYAAgArokRIAABcIJYAAIAAhcIAAgNIpYAAgA7CkRIAABcIJYAAIAAhcIAAgNIpYAAgEgo7gERIAABcIJXAAIAAhcIAAgNIpXAAgAcgkTIAABbIJYAAIAAhbIAAgOIpYAAgAOnkTIAABbIJXAAIAAhbIAAgOIpXAAg");
	this.shape_1.setTransform(280.1,78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ANBBmQAxAAAxAAQBphQgIiVQgCg4gZgsIhuAAQi1CoB7ChgAKfhNIAAB3QBSA7BOABQABAAABAAQAxA/BfA/AsUixINRAAIAACCIr3AAIAAAKIlAAAIAAgUIDmAAIAAgUIjwAAIAAhkgAq6gvIhaAAIAAgKAsUhNIAAhk");
	this.shape_2.setTransform(113.9,65.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008335").s().p("AlOBBIhaAAIAAgKIAAgUIAAhjINRAAIAACBg");
	this.shape_3.setTransform(77.6,54.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiaBGIAAgUIDlAAIAAAKIBaAAIAAAKgAikAeIAAhjIDvAAIAABjg");
	this.shape_4.setTransform(27.6,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Road, new cjs.Rectangle(0,-3.9,560.2,164.8), null);


(lib.pumpinside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pump();
	this.instance.parent = this;
	this.instance.setTransform(-53.7,-67.2,0.452,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pumpinside, new cjs.Rectangle(-53.7,-67.2,107.6,67.3), null);


(lib.mountain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("EhOMAVaYA9gtA+gsA8guYA9guA9gtA9guIC1iKIC1iLYA8guA8gvA8guICziNICziNICziOICyiOICxiOYB2hfB2hgB2hgYA6gwA7gxA6gxYA6gwA7gxA5gxYA6gxA6gyA5gxYA6gyA6gxA5gyIhGgCID2DLYBSBEBTBDBRBFIB7BlIB6BnIB6BnIB5BoIANALIAPgIYB3hHB4hGB4hGIC1hoIC1hnIgcAAICGBVICFBVYBZA5BYA5BYA5IAWAOIAXgPIGFkEIDDiDIDCiDYCBhXCBhZCAhYIGBkKIhcgFIFPEoIFPEnYDhDEDhDCDjDBIAlAgIAsgSIGjiqIGhirIhNgUIFDFxICiC2ICjC4ICjC2YA3A9A3A8A3A9ICkC1YAcAfAbAeAcAeIBTBaIAMgKIhKhiYgZgggZgggZghIiWjBYgyhBgyhBgzhAIiXjAIiZjAIiZi+Ikzl+IgeglIgvASImmCeImmCgIBSAOYjgjFjgjDjijCIlTkjIlVkhIgtgmIgvAiIl8ESYh+Bbh+Bch+BcIi9CLIi8CMIl3EYIAsgCYhag1hcg0hbg1IiIhQIiJhRIgOgIIgOAIIiyBrIizBrYh4BGh4BGh4BFIAcADIh3hrIh3hqIh2hsIh1hsYhOhIhOhIhOhJIjqjZIgggeIgmAdYg8Aug8Avg7AvYg8Aug8Avg8AvYg8Avg7Awg7AvYg7Awg7Avg7AxYh2Bgh1Bgh1BhIivCRIiuCTIiuCTIiuCTIitCVYg6Axg5Ayg5AyIisCVIirCXYg5Ayg5Azg4AzYg5Ayg4A0g4AzIAKAM");
	this.shape.setTransform(-4.4,-71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#352415").s().p("EhOWAb5Igox0MAsEgkFIPANIILQmkIIcFKIX5w4IVGSSINIlKITsXbIBaZyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mountain, new cjs.Rectangle(-505.9,-208.9,1011.4,408.5), null);


(lib.mcdonalds_ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F9F8").s().p("ABUEOInDobIEcAAIHDIbg");
	this.shape.setTransform(312.9,225.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F9F8").s().p("ABUEOInDobIEbAAIHEIbg");
	this.shape_1.setTransform(74.5,225.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBYQgMgEgKgFIAIgYQAIAFALADQALAEAMAAQAQAAAIgHQAJgHgBgLQAAgMgHgHQgIgHgQgGQgXgJgLgMQgMgMAAgQQAAgOAHgMQAIgLANgHQAOgHARAAQANAAAMADQALAEAHAEIgIAXIgOgHQgKgDgLAAQgNAAgIAHQgHAHAAAKQgBAKAJAHQAHAGAQAGQAXAJALALQAMAMAAAUQAAAXgRAOQgRAOgeABQgOAAgNgDg");
	this.shape_2.setTransform(251.3,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSATIAHgeIAGgdIAggDIgLAgIgLAeIgLAWIgUADIAIgZg");
	this.shape_3.setTransform(243.3,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtB2QgQgLgKgTQgKgUAAgbQAAgdALgUQAKgVASgLQASgLAVAAQATAAANAIQAOAHAGALIAAAAIAAhoIAgAAIAADSIAAAYIABAVIgcAAIgCgeIAAAAQgIAOgPAKQgPAJgVABQgVgBgRgLgAgZgSQgMAJgGAOQgGAPAAAUQAAASAGAOQAFAPAMAIQALAJAQAAQARAAAMgKQANgKAFgSIABgGIAAgHIAAgfIAAgGIgBgHQgEgOgMgLQgMgKgSgBQgPABgMAIg");
	this.shape_4.setTransform(228.4,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPCAIAAj/IAfAAIAAD/g");
	this.shape_5.setTransform(214.6,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBTQgMgGgGgMQgFgLgBgNQABggAagQQAbgQAzAAIAAgDQgBgIgCgKQgCgJgJgHQgJgGgQgBQgMAAgMAEQgMADgJAGIgHgUQAKgIAPgEQAPgEAPAAQAbAAAPAKQAOALAGAQQAFARgBARIAABAIACAWIACAUIgdAAIgDgWIgBAAQgHAKgNAIQgPAHgRABQgSAAgMgIgAABAAQgPADgMAJQgLAIABARQAAAQAIAHQAJAIAMgBQAQAAALgJQALgIAEgMIABgEIAAgGIAAgdIgFAAQgPAAgPABg");
	this.shape_6.setTransform(201.2,43.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBZIAAhkQAAgOgEgLQgEgMgIgGQgJgIgPABQgPAAgLAJQgLAJgFANIgBAHIgBAIIAABoIgfAAIAAh+IgBgZIgBgWIAcAAIACAdIABAAQAEgJAIgHQAIgHALgFQAMgFANAAQAKAAAKADQALAEAJAHQAJAJAHAPQAGAOAAAWIAABng");
	this.shape_7.setTransform(183,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrBQQgTgLgLgUQgLgUAAgcQAAgcAMgUQALgVAUgLQATgLAXAAQAZAAATALQATALALAVQAKATAAAcQAAAfgNAUQgNAVgTAJQgUAKgVAAQgXAAgTgLgAgdg4QgMAKgFAPQgGAQAAAPQAAATAHAQQAGAPAMAIQAMAJAPAAQAPAAAMgJQAMgIAHgPQAHgQAAgTQAAgOgFgQQgGgPgLgKQgMgLgSgBQgSABgMAKg");
	this.shape_8.setTransform(163.1,43.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhIB7IgbgCIAAjuIAfgEQARgBATAAQAhAAAYAIQAYAHAQAPQARAPAIAVQAJAWAAAdQABAdgKAYQgJAYgRARQgQARgcAIQgaAJgkAAIgeAAgAg0hgIgQACIAAC+QAHACAIAAIARAAQAyAAAagbQAagaAAgxQABgcgLgVQgLgVgVgMQgXgLgfAAIgWABg");
	this.shape_9.setTransform(141.8,40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBQQgTgLgLgVQgKgTgBgcQABgZALgVQALgVAVgMQAVgMAcABQAOgBAMADQALADAHAEIgHAYQgGgDgJgDQgJgCgNAAQgUAAgNAJQgNAIgIAPQgHAPAAARQABAUAHAPQAIAPAOAHQANAJARgBQANAAAKgCIAQgGIAFAYQgGADgNADQgNADgSAAQgZABgUgLg");
	this.shape_10.setTransform(113.5,43.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABdB5IgGhqIgCgjIgBgkIAAghIgCAAIgNAsIgRAvIgrB2IgXAAIgnh0IgQgwQgHgXgFgWIgBAAIgBAhIgCAlIgBAkIgHBoIgeAAIARjxIAoAAIApB1IAOAqIALAnIAAAAIALgnIAPgqIArh1IAoAAIAPDxg");
	this.shape_11.setTransform(90.6,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BAC045").s().p("AhJDmIAAnKICTAAIAAHKg");
	this.shape_12.setTransform(347.7,175.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BAC045").s().p("AhJDmIAAnKICTAAIAAHKg");
	this.shape_13.setTransform(309.6,175.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BAC045").s().p("AhJDmIAAnLICTAAIAAHLg");
	this.shape_14.setTransform(270.1,174.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BAC045").s().p("AhJDmIAAnKICTAAIAAHKg");
	this.shape_15.setTransform(114,175.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BAC045").s().p("AhJDmIAAnLICTAAIAAHLg");
	this.shape_16.setTransform(74.5,174.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BAC045").s().p("AhJDmIAAnLICTAAIAAHLg");
	this.shape_17.setTransform(37.7,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDE850").s().p("AqBDmIAAnKIUDAAIAAHKg");
	this.shape_18.setTransform(312.9,175.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDE850").s().p("AqBDmIAAnLIUDAAIAAHLg");
	this.shape_19.setTransform(80.9,174.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECD32").s().p("AAAAAIABAAIAAABg");
	this.shape_20.setTransform(395.9,68.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FECD32").s().p("AAAAAIABgBIAAADg");
	this.shape_21.setTransform(396.1,73.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE295").s().p("AAAgVIAAgDIABADIgBArIAAADg");
	this.shape_22.setTransform(314.4,75.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FECD32").s().p("AFfGEIgKj8IgBgWIgLhpIgcilIgOgzQgGgWgJgVQgFgPgKgTQgFgKgHgKQgJgMgGgFQgQgOgRAFQgKACgHAGQgPAMgIAPIgPAcQgIASgFAOQgJAagHAYIgOA8IgaCgIgODNIgBBdIh0AAIgBhWIgilXIgIgsIgPg7QgGgVgJgXQgFgQgJgRQgOgbgOgOQgOgOgQAAQgKgBgKAHQgHAFgJAKQgNAQgIASIgPAmQgHAVgHAYQgHAbgIAlIgPBPIgUCnIgBAaIgIDBIgBADIAAAvIgCACIh0AAIABg3QAAgXABgWIAKh7IAEguIAPhdIAGggIAliOIAPgrIANgfIAPghIAqhEIAeggQAKgJASgKQASgKAVgCQAdgCAdAPQAUALANANIAdAhIAeAtIAdA8IAOAkIAPArIADAMIAmhoIAPggIAcguQAJgOARgTQAMgOASgOQAbgTAbgEQAbgDAXAKQARAHAMAKIAWAUQAIAIAMAQIAYAjQALATAHAQIAQAkQAIARAGAQIAQAwIANAwIAPA8IAGAcIATB4IANClIgBABIABABIABATIgBABIABABIABAbIgCABIACACIAAAtg");
	this.shape_23.setTransform(349.4,39.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C9E8E5").s().p("An6HSIAAujIP1AAIAAOjg");
	this.shape_24.setTransform(312,214.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C8E7E4").s().p("An6HSIAAujIP1AAIAAOjg");
	this.shape_25.setTransform(80.9,214.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#363435").p("AfJGIMg+RAAAIAAsPMA+RAAAg");
	this.shape_26.setTransform(199.8,39.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#824632").s().p("A/IGIIAAsPMA+RAAAIAAMPg");
	this.shape_27.setTransform(199.8,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E5AD59").s().p("A/IX3MAAAgvtMA+RAAAMAAAAvtg");
	this.shape_28.setTransform(199.8,153.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcdonalds_ai, new cjs.Rectangle(-0.5,-0.5,481.4,306.4), null);


(lib.Star_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEC98").s().p("AhVBVQhUhUh3gBQB3AABUhVQBVhUAAh3QABB3BUBUQBVBVB3AAQh3ABhVBUQhUBVgBB3QAAh3hVhVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0A535").s().p("AipCpQhGhGAAhjQAAhjBGhGQBGhGBjAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAQhjAAhGhHgAiSiSQg9A9AABVQAABWA9A9QA9A9BVAAQBWAAA9g9QA9g9AAhWQAAhVg9g9Qg9g9hWAAQhVAAg9A9g");
	this.shape_1.setTransform(0,0,0.75,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0A535").s().p("AipCpQhGhGAAhjQAAhjBGhGQBGhGBjAAQBjAABGBGQBHBGAABjQAABjhHBGQhGBHhjAAQhjAAhGhHgAililQhFBFAABgQAABhBFBFQBFBFBgAAQBhAABFhFQBFhFAAhhQAAhghFhFQhFhFhhAAQhgAAhFBFg");
	this.shape_2.setTransform(0,0,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Star_anim, new cjs.Rectangle(-29.2,-29.2,58.5,58.5), null);


(lib.hole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvOAnIAAg7QPilxO7FxIAAA7QnKCmnoAAQnmAAoFimg");
	this.shape.setTransform(0,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hole, new cjs.Rectangle(-97.5,-41.1,195,41.1), null);


(lib.birdwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AigC5QB5iOC3hCQAogQAogKQCSglCUAXAoFi6QAsgNBAAfQBlAwBEBhQBDBfANBxAilC/QADgDACgD");
	this.shape.setTransform(0,-19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.birdwing, new cjs.Rectangle(-54.2,-40.6,108.5,43.2), null);


(lib.birdflat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AhxBSQCXhmDAgSQArgFApABQCXACCJA8ApZgzQAgghBGgGQBwgIBrAxQBlAwBCBTAh7BZQADgCADgCQACgCACgBQAEAFADAF");
	this.shape.setTransform(0,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.birdflat, new cjs.Rectangle(-62.7,-20.8,125.4,23.4), null);


(lib.bicycleai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2A5QgGgBgHgHQgLgJgFgLQgFgMAEgLQAFgJARgKQA1ghAggHQAXgGANAGQANAGAKAVQAFALgBAHQgCAJgOAKQgWAOgeALIg2ATQgJACgFAAIgEAAg");
	this.shape.setTransform(114.7,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:true},1).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A454D").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_1.setTransform(88.8,95.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:true},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5B2BC").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQAKAAAJAIQAHAHAAAKQAAALgHAIQgJAHgKAAQgKAAgHgHg");
	this.shape_2.setTransform(35.8,102.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:true},1).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B8A95").s().p("AhPBQQgighABgvQgBguAighQAhgiAuAAQAvAAAhAiQAiAhAAAuQAAAvgiAhQghAigvAAQguAAghgigAg4g4QgXAYgBAgQABAhAXAYQAXAXAhAAQAhAAAYgXQAYgYgBghQABgggYgYQgYgXghAAQghAAgXAXg");
	this.shape_3.setTransform(88.8,95.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:true},1).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B8A95").s().p("AgYAZQgKgKAAgPQAAgNAKgLQAKgLAOAAQAPAAAKALQAKALAAANQAAAPgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_4.setTransform(39.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4).to({_off:true},1).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A5B2BC").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(39.6,91.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4).to({_off:true},1).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A454D").s().p("AkXBvQgYgGgLgJQgJgHgEgKQgFgLADgKQACgHAHgJQAFgHABgFQACgHgHgRIgEgHQgMggASggQARgfAfgPQBMgkBQATQAYAFArASQApAQAUAFQApALAsgGIAngHQAkgHASgBQAegCAZAHQArANAXAjQANATADAWQADAXgHAWQgMAogmASQgWALgyAJQhFALh0ABIgoABQibAAhngZgAi/h5QgnAEghARQgcANgOAaQgQAcAKAbIADAHQAJAVgDALQgCAIgGAIQgFAHgCAFQgEAOAOALQAJAIAWAFQBDAQBUAGQA5ADBXgBQA1AAAkgCQA0gDAqgHQAxgJAWgLQAfgQALgiQAFgTgCgUQgDgTgLgRQgVgggngLQgSgGgUAAQgUAAgsAJIgoAHQgtAGgtgLQgXgGgogQQgpgRgYgGQgYgFgYAAQgNAAgOABg");
	this.shape_6.setTransform(66.3,94.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(4).to({_off:true},1).wait(1));

	// Layer 10
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#06BBE8").s().p("AAcDsInxgsQgKgBgGgIQgHgHABgKQABgKAIgHQAHgGAKABIHmAqIGumeQAHgHALABQAKAAAHAHQAHAHgBAKQAAAKgHAHIm2GmQgHAHgKAAg");
	this.shape_7.setTransform(86.4,74.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:true},1).wait(1));

	// Layer 11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#06BBE8").s().p("AhSD6QgNAAgGgMQhQiCgliuQgMg4gHg2IgEgvQAAgKAHgHQAGgIAKAAQAKgBAIAHQAHAHABAKIASCFQAgCbBAB3IEUlrQAHgIAKgBQAJgBAIAGQAJAGABAKQABAKgGAIIkqGHQgHAKgMAAg");
	this.shape_8.setTransform(47.7,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:true},1).wait(1));

	// Layer 12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06BBE8").s().p("ADpBJQgRgTgdgUQg3gmgzgFQhYgKj0gLQgJgBgIgHQgGgIAAgKQABgKAHgGQAIgHAKAAQD1AMBaAKQA9AGBBAtQAhAWAWAXQAIAHgBAKQAAALgHAGQgIAHgJAAQgKAAgIgHg");
	this.shape_9.setTransform(40.8,51.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4).to({_off:true},1).wait(1));

	// Layer 13
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#06BBE8").s().p("AicEYQgRAAgGgQIh6k9QgDgJAEgJQAEgJAJgEQAKgEAJAEQAJAEADAKIB0EtQDJgPBmiDQBAhSAUh6QAOhSgIguQgFgPAMgLQAHgGAKAAQAKABAHAHQAEAFACAGQACAIABAUQABAfgCAeQgGBjgjBTQgtBrhVBDQhxBXitAIg");
	this.shape_10.setTransform(95.4,52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4).to({_off:true},1).wait(1));

	// Layer 14
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNA7QgQAAgKgKQgHgFgIgOQgJgQgFgFQgLgMgXgIQgcgIgNgFQgJgDgDgFQgGgKAKgJQAIgHAMAAQAMAAASAFIAfAKQAfAHA/gNQBBgNAfAHQARADAMAKQAPANgKAOQgGAKgPAEIgYADQgWAEgZARIgXARQgOAJgLAFQgNAFgMAAIgCAAg");
	this.shape_11.setTransform(62.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4).to({_off:true},1).wait(1));

	// Layer 15
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7B8A95").s().p("AgGAmQgKgBgGgFQgMgHgEgTQgDgKABgKQAAgPAHgFQAIgGAHAEQAEADAAAGIgCAKQgDAJACAIQACAJAHAFQAMAIARgJIAKgFQAIgBACAGQACAEgEAGQgMAQgXAAIgKgBg");
	this.shape_12.setTransform(55.1,32.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off:true},1).wait(1));

	// Layer 16
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A5B2BC").s().p("AAPBfIg/ixQgDgHAEgHQADgHAHgCQAHgDAGADQAIADACAHIAoBvIAXBDQADAHgEAHQgDAHgHACIgGACQgNAAgEgNg");
	this.shape_13.setTransform(66.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(4).to({_off:true},1).wait(1));

	// Layer 17
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#06BBE8").s().p("ACmFiQgbgQgegaQg8gygig2Qgfg0hdjuQhCipgahKQgDgJAEgJQAEgJAJgEQAKgDAJAEQAJAEAEAKIBYDrQBdDwAfAxQAdAvA3AuQAcAXAWAOQAJAFACAKQADAKgGAIQgHAMgOAAQgGAAgGgEg");
	this.shape_14.setTransform(141,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(4).to({_off:true},1).wait(1));

	// Layer 18
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A5B2BC").s().p("AgQCRQgjhPAFgpQAEgcAggfQAPgOAJgMQAGgJgCgIQgFgNgVgNQgRgLgRgFQgHgDgDgGQgEgHADgHQACgHAHgEQAGgDAHACQARAFAWANQAjAVAJAaQAIAagQAYQgKANgUATQgMALgEAGQgGAIgBALQgFAeAeBIQADAHgCAHQgDAHgHADIgHABQgLAAgFgLg");
	this.shape_15.setTransform(124.7,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(4).to({_off:true},1).wait(1));

	// Layer 19
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjcDdQhchcAAiBQAAiABchcQBbhcCBAAQCBAABcBcQBcBcAACAQAACBhcBcQhcBciBAAQiBAAhbhcgAjUjTQhYBYAAB7QAAB8BYBZQBZBYB7AAQB8AABYhYQBYhZAAh8QAAh7hYhYQhYhZh8AAQh7AAhZBZg");
	this.shape_16.setTransform(40.2,92.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AkbEdQh2h2AAinQAAimB2h1QB1h2CmAAQCmAAB3B2QB1B1AACmQAACnh1B2Qh3B1imAAQimAAh1h1gAjtjtQhkBiABCLQgBCMBkBjQBiBiCLAAQCMAABjhiQBjhjAAiMQAAiLhjhiQhjhjiMAAQiLAAhiBjg");
	this.shape_17.setTransform(40.2,92.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BDC8D1").s().p("AlMCDIKVkOIAEAJIqVEOg");
	this.shape_18.setTransform(40.2,92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BDC8D1").s().p("AiLlIIAJgEIEOKVIgJAEg");
	this.shape_19.setTransform(40.2,92.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BDC8D1").s().p("AiOFIIETqTIAKAEIkUKTg");
	this.shape_20.setTransform(40.2,92.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BDC8D1").s().p("AlLiFIAEgIIKTETIgEAIg");
	this.shape_21.setTransform(40.2,92.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BDC8D1").s().p("Aj/j4IAGgHIH5H4IgHAHg");
	this.shape_22.setTransform(40.2,92.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDC8D1").s().p("Aj/D5IH4n4IAHAHIn5H4g");
	this.shape_23.setTransform(40.2,92.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BDC8D1").s().p("AllAFIAAgJILLAAIAAAJg");
	this.shape_24.setTransform(40.2,92.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BDC8D1").s().p("AgEFmIAArLIAJAAIAALLg");
	this.shape_25.setTransform(40.2,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25,p:{rotation:0}},{t:this.shape_24,p:{rotation:0}},{t:this.shape_23,p:{rotation:0}},{t:this.shape_22,p:{rotation:0}},{t:this.shape_21,p:{rotation:0}},{t:this.shape_20,p:{rotation:0}},{t:this.shape_19,p:{rotation:0}},{t:this.shape_18,p:{rotation:0}},{t:this.shape_17,p:{rotation:0}},{t:this.shape_16,p:{rotation:0}}]}).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},1).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},1).to({state:[{t:this.shape_25,p:{rotation:15}},{t:this.shape_24,p:{rotation:15}},{t:this.shape_23,p:{rotation:15}},{t:this.shape_22,p:{rotation:15}},{t:this.shape_21,p:{rotation:15}},{t:this.shape_20,p:{rotation:15}},{t:this.shape_19,p:{rotation:15}},{t:this.shape_18,p:{rotation:15}},{t:this.shape_17,p:{rotation:15}},{t:this.shape_16,p:{rotation:15}}]},2).to({state:[]},1).wait(1));

	// Layer 20
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjcDdQhchcAAiBQAAiABchcQBchcCAAAQCBAABcBcQBcBcAACAQAACBhcBcQhcBciBAAQiAAAhchcgAjTjTQhZBYAAB7QAAB8BZBZQBYBYB7AAQB8AABZhYQBYhZAAh8QAAh7hYhYQhZhZh8AAQh7AAhYBZg");
	this.shape_26.setTransform(158.8,92.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkbEdQh2h2AAinQAAimB2h1QB1h2CmAAQCnAAB2B2QB1B1AACmQAACnh1B2Qh2B1inAAQimAAh1h1gAjtjtQhjBiAACLQAACMBjBjQBiBiCLAAQCMAABjhiQBihjAAiMQAAiLhihiQhjhjiMAAQiLAAhiBjg");
	this.shape_27.setTransform(158.8,92.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BDC8D1").s().p("AlMCDIKVkOIAEAJIqVEOg");
	this.shape_28.setTransform(158.8,92.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BDC8D1").s().p("AiLlIIAJgEIEOKVIgJAEg");
	this.shape_29.setTransform(158.8,92.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BDC8D1").s().p("AiNFIIETqTIAIAEIkTKTg");
	this.shape_30.setTransform(158.8,92.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BDC8D1").s().p("AlLiFIAEgIIKTETIgEAIg");
	this.shape_31.setTransform(158.8,92.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BDC8D1").s().p("Aj/j4IAHgHIH4H4IgHAHg");
	this.shape_32.setTransform(158.8,92.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BDC8D1").s().p("Aj/D5IH4n4IAHAHIn4H4g");
	this.shape_33.setTransform(158.8,92.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BDC8D1").s().p("AllAFIAAgJILLAAIAAAJg");
	this.shape_34.setTransform(158.8,92.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BDC8D1").s().p("AgEFmIAArLIAJAAIAALLg");
	this.shape_35.setTransform(158.8,92.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35,p:{rotation:0}},{t:this.shape_34,p:{rotation:0}},{t:this.shape_33,p:{rotation:0}},{t:this.shape_32,p:{rotation:0}},{t:this.shape_31,p:{rotation:0}},{t:this.shape_30,p:{rotation:0}},{t:this.shape_29,p:{rotation:0}},{t:this.shape_28,p:{rotation:0}},{t:this.shape_27,p:{rotation:0}},{t:this.shape_26,p:{rotation:0}}]}).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},1).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},1).to({state:[{t:this.shape_35,p:{rotation:15}},{t:this.shape_34,p:{rotation:15}},{t:this.shape_33,p:{rotation:15}},{t:this.shape_32,p:{rotation:15}},{t:this.shape_31,p:{rotation:15}},{t:this.shape_30,p:{rotation:15}},{t:this.shape_29,p:{rotation:15}},{t:this.shape_28,p:{rotation:15}},{t:this.shape_27,p:{rotation:15}},{t:this.shape_26,p:{rotation:15}}]},2).to({state:[]},1).wait(1));

	// Layer 22
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAYQgGAAgGgFQgEgFAAgHIAAgNQAAgHAEgFQAGgFAGAAIBPAAQAHAAAFAFQAEAFAAAHIAAANQAAAHgEAFQgFAFgHAAg");
	this.shape_36.setTransform(83.8,111.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(1).to({rotation:22.7,x:77.8,y:108.4},0).wait(1).to({rotation:82.7,x:71.9,y:92.1},0).wait(2).to({rotation:142.7,x:83.2,y:78.8},0).to({_off:true},1).wait(1));

	// Layer 23
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgnAXQgHABgEgFQgFgFAAgHIAAgNQAAgHAFgFQAEgEAHgBIBPAAQAHABAFAEQAEAFAAAHIAAANQAAAHgEAFQgFAFgHgBg");
	this.shape_37.setTransform(94.4,78.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(1).to({rotation:22.7,x:100.3,y:81.9},0).wait(1).to({rotation:82.7,x:106.2,y:98.4},0).wait(2).to({rotation:142.7,x:94.9,y:111.6},0).to({_off:true},1).wait(1));

	// Layer 24
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A454D").s().p("Ag+CcIBmk+IAWAHIhlE+g");
	this.shape_38.setTransform(88.8,95.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({rotation:22.7,x:88.5,y:95.8},0).wait(1).to({rotation:82.7,x:88.2,y:95.1},0).wait(2).to({rotation:142.7,x:88.8,y:94.4},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,132.3);


(lib.house1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape.setTransform(20.6,117.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_1.setTransform(1.5,117.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_2.setTransform(-17.6,117.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_3.setTransform(20.6,85.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_4.setTransform(1.5,85.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_5.setTransform(-17.6,85.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_6.setTransform(20.6,54.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_7.setTransform(1.5,54.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_8.setTransform(-17.6,54.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_9.setTransform(20.6,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_10.setTransform(1.5,22.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_11.setTransform(-17.6,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_12.setTransform(20.6,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_13.setTransform(1.5,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_14.setTransform(-17.6,-9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_15.setTransform(20.6,-42.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_16.setTransform(1.5,-42.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_17.setTransform(-17.6,-42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_18.setTransform(20.6,-75.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_19.setTransform(1.5,-75.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_20.setTransform(-17.6,-75.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_21.setTransform(20.6,-108.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_22.setTransform(1.5,-108.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_23.setTransform(-17.6,-108.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C1C1C").s().p("AljW7IAOizIAGhaYACgeADgeABgeIAJi1IAFhbIACgtIABgtIAEi1YABg8ADg9gBg8IAAi1YAAg8AAg8gCg8IgEi0YgBg8gBg8gDg8IgIi1IgEhaIgCgtIgDgtIgMi0YgEg8gDg8gFg8IgfloIgzAvIByAQIBzAMIBzAGIByABIBzgEIBzgJIBygOIBygSIgngmIgSC1IgIBaIgGBaIgLC0YgCAeAAAegBAeIgDBaIgEC1IgBC0YABA8gBA8ABA8IAEC0IAEC0IAIC0IAIC0YADA8AEA7ADA8IAMC0IAFBaIAHBaIAcFnIAAAAIgUloIgFhaIgDhaIgHizYgCg8gDg8gBg8IgEi0IgEi0IAAi0IAAizYABg8ACg8ABg7IAEi0IAJi0IAFhZYABgeABgeADgeIAPizIAIhZIAKhZIAWiyIAFgrIgsAGIhvAQIhvALIhwAGIhwABIhugEIhwgIIhvgOIhugSIg3gJIAEA3IAWFnYAEA8ABA8ADA7IAIC0IACAsIABAtIACBaIADCzYACA8AAA8AAA8IAACyYAAA8gCA8gBA7IgEC0YgBA7gDA8gDA8IgJCzIgCAsIgDAtIgGBZIgNCyYgCAegDAegDAdIgJBaIgRCzICZAN");
	this.shape_24.setTransform(-1.9,-2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3F3F3F").s().p("AnDWeQCD0ciD4fQHDBQHEhQQiIQJCIcyg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house1, new cjs.Rectangle(-52.8,-149.1,101.9,293.6), null);


(lib.house2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape.setTransform(77.5,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_1.setTransform(59.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_2.setTransform(42.3,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_3.setTransform(24.7,20.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_4.setTransform(7.1,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_5.setTransform(-10.3,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_6.setTransform(-27.9,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_7.setTransform(-45.5,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_8.setTransform(-63.1,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_9.setTransform(-80.7,20.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_10.setTransform(77.5,-11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_11.setTransform(59.9,-11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_12.setTransform(42.3,-11.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_13.setTransform(24.7,-11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_14.setTransform(7.1,-11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_15.setTransform(-10.3,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_16.setTransform(-27.9,-11.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_17.setTransform(-45.5,-11.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_18.setTransform(-63.1,-11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#232323").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_19.setTransform(-80.7,-11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0E0E0E").ss(8.2,0,0,3).p("AwuGjQA5mng5l8QO3ALSngLQhDG/BDFk");
	this.shape_20.setTransform(0,-1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#313131").s().p("AwvGSQA6mmg6l9QO3ALSogLQhDG/BDFkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house2, new cjs.Rectangle(-111.8,-44.3,223.7,88.6), null);


(lib.house3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape.setTransform(34.2,104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_1.setTransform(16.4,104.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_2.setTransform(-1.1,104.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_3.setTransform(-18.8,104.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_4.setTransform(-36.2,104.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_5.setTransform(34,72.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_6.setTransform(16.4,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_7.setTransform(-1.2,72.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_8.setTransform(-18.4,72.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_9.setTransform(-36.3,72.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_10.setTransform(34.2,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_11.setTransform(16.4,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_12.setTransform(-0.9,39.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_13.setTransform(-18.4,39.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_14.setTransform(-36.1,39.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_15.setTransform(34,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_16.setTransform(16.4,5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_17.setTransform(-0.8,6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_18.setTransform(-18.6,6.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_19.setTransform(-36.2,6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_20.setTransform(34.1,-26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_21.setTransform(16.4,-26.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_22.setTransform(-1.1,-26.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_23.setTransform(-18.4,-27);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_24.setTransform(-36.1,-27);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_25.setTransform(34,-59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_26.setTransform(16.6,-59.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_27.setTransform(-1.1,-59.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_28.setTransform(-18.9,-59.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_29.setTransform(-36.4,-59.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_30.setTransform(34.2,-92.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_31.setTransform(16.5,-92.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_32.setTransform(-0.9,-92.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_33.setTransform(-18.5,-92.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A2A2A").s().p("Ag7BpIAAjRIB3AAIAADRg");
	this.shape_34.setTransform(-36,-92.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#151515").ss(8.2,0,0,3).p("AqBT/QB2ych206QI5AkLJgkQiXTrCXTr");
	this.shape_35.setTransform(0.1,-1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#383838").s().p("AqBTsQB3ydh306QI6AkLJgkQiXTrCXTsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.house3, new cjs.Rectangle(-68.6,-130.2,137.3,260.3), null);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,-191.9,1.543,0.888);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,-191.9,615.8,383.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(171.1,23.4,1,1,0,0,0,171.1,23.4);
	this.instance.alpha = 0.922;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,342.3,46.8), null);


(lib.utabuidlingai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#363435").p("ACGEwIkLAAIAApfIELAAg");
	this.shape.setTransform(587.4,632.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("AiFEwIAApfIELAAIAAJfg");
	this.shape_1.setTransform(587.4,632.6);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(713.1,512.3,1,1,0,0,0,171.1,23.4);
	this.instance.alpha = 0.922;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#363435").p("ACGEwIkLAAIAApfIELAAg");
	this.shape_2.setTransform(835.9,631.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0E0E0").s().p("AiFEwIAApfIELAAIAAJfg");
	this.shape_3.setTransform(835.9,631.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E514A").s().p("A/oFiIAArDMA/RAAAIAALDg");
	this.shape_4.setTransform(710.1,516.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#363435").p("AH/IQIv9AAIAAwfIP9AAg");
	this.shape_5.setTransform(834.1,753.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#E7CD9D","#BA9263","#E9C696","#C09866","#E8C391","#E9C696","#E1B376"],[0,0.173,0.361,0.529,0.667,0.796,0.937],0,0,0,0,0,51.1).s().p("An+IQIAAwfIP9AAIAAQfg");
	this.shape_6.setTransform(834.1,753.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#363435").p("AICITIwDAAIAAwlIQDAAg");
	this.shape_7.setTransform(584.2,754);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#E7CD9D","#BA9263","#E9C696","#C09866","#E8C391","#E9C696","#E1B376"],[0,0.173,0.361,0.529,0.667,0.796,0.937],0,0,0,0,0,51.4).s().p("AoBITIAAwlIQDAAIAAQlg");
	this.shape_8.setTransform(584.2,754);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0)","rgba(190,151,112,0)","#BE9770","#9F7D5D","#765C45"],[0,0.894,0.894,0.941,1],-45.4,0,45.4,0).s().p("AnFPqIAA/TIOLAAIAAfTg");
	this.shape_9.setTransform(835.9,600.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#CCA277","#B08A69","#98755C","#886752","#7F5F4D","#7C5D4C","#9F7B60","#CCA277","#B48E6A","#88674E","#795B46","#CCA277","#BE9770","rgba(190,151,112,0)","rgba(0,0,0,0)"],[0,0.027,0.059,0.09,0.122,0.153,0.247,0.427,0.478,0.612,0.686,0.867,0.894,0.894,1],-45.4,0,45.4,0).s().p("AnFPqIAA/TIOLAAIAAfTg");
	this.shape_10.setTransform(835.9,600.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0)","rgba(190,151,112,0)","#BE9770","#9F7D5D","#765C45"],[0,0.894,0.894,0.941,1],-43.1,0,43.2,0).s().p("AmvPwIAA/fINfAAIAAffg");
	this.shape_11.setTransform(587.9,600.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CCA277","#B08A69","#98755C","#886752","#7F5F4D","#7C5D4C","#9F7B60","#CCA277","#B48E6A","#88674E","#795B46","#CCA277","#BE9770","rgba(190,151,112,0)","rgba(0,0,0,0)"],[0,0.027,0.059,0.09,0.122,0.153,0.247,0.427,0.478,0.612,0.686,0.867,0.894,0.894,1],-43.1,0,43.2,0).s().p("AmvPwIAA/fINfAAIAAffg");
	this.shape_12.setTransform(587.9,600.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D5740").s().p("EghnABNIAAiZMBDPAAAIAACZg");
	this.shape_13.setTransform(707.8,473.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#363435").ss(2).p("AbODnQ8JDX6SjXIAAo5MA2bAAAg");
	this.shape_14.setTransform(707.1,34.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E514A").s().p("A7NDnIAAo5MA2bAAAIAAI5QuFBstmAAQtnAAtJhsg");
	this.shape_15.setTransform(707.1,34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#363435").p("ADnGZIjniMIjpCLIAtknIi7jQIEEgrIB0kMIBzENIEEAsIi9DPg");
	this.shape_16.setTransform(706.6,187.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FECA31","#FFE7A6","#F9AE35"],[0.251,0.561,1],0,0,0,0,0,38.6).s().p("AAAEMIjoCLIAtknIi8jRIEEgqIB0kMIB0ENIEDArIi9DQIAsEng");
	this.shape_17.setTransform(706.6,188);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#363435").p("AEDh+IAAD9Il9AAIiEj9g");
	this.shape_18.setTransform(752.7,119.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#556B89").s().p("Ah7B/IiFj9IIBAAIAAD9g");
	this.shape_19.setTransform(752.9,119.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#363435").p("AkBh2IAADtIF8AAICEjtg");
	this.shape_20.setTransform(662.9,118.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#556B89").s().p("AkAB3IAAjtIIBAAIiFDtg");
	this.shape_21.setTransform(662.8,118.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#556B89").s().p("AgQDuIAAnbIAhAAIAAHbg");
	this.shape_22.setTransform(691.7,148.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#363435").p("AjAnOIGEAAIAAOKg");
	this.shape_23.setTransform(760.5,184.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#556B89").s().p("AjCnFIGEAAIAAOLg");
	this.shape_24.setTransform(760.6,183.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#363435").p("AjNG7IGauLIlhAAg");
	this.shape_25.setTransform(651.7,184.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#556B89").s().p("AiTnFIFhAAImbOLg");
	this.shape_26.setTransform(651.7,183.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#363435").p("AAAIkIGPAAInRxHIlPAAIAFHfQAIHaAOgUQCZiUB4BiQAuAlAdBBQAaA7AAAzg");
	this.shape_27.setTransform(732,178.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#556B89").s().p("AACIkQgCg0gZg6QgdhBgtglQh4hiiaCUQgNAUgInaIgFnfIFPAAIHQRHg");
	this.shape_28.setTransform(731.9,178.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#363435").p("AAAIkImOAAIHRxHIFPAAIgFHfQgIHagNgUQiaiUh4BiQguAlgdBBQgaA7gBAzg");
	this.shape_29.setTransform(681.8,178.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#556B89").s().p("AmPIkIHQxHIFPAAIgFHfQgHHagOgUQiZiUh4BiQguAlgdBBQgaA6gBA0g");
	this.shape_30.setTransform(681.9,178.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#363435").p("AFxEdIrhAAIAAo5ILhAAg");
	this.shape_31.setTransform(748.4,413.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#556B89").s().p("AlwEdIAAo5ILhAAIAAI5g");
	this.shape_32.setTransform(748.4,413.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#363435").p("AlomPIBRAAIBDCVIImAAIAXKAIrRAKg");
	this.shape_33.setTransform(747.7,268.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#556B89").s().p("AlomPIBSAAIBCCVIImAAIAXKAIrRAKg");
	this.shape_34.setTransform(747.7,268.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#363435").p("AlljBIIfAAIBKi5IBiAAIAAL1IrLAAg");
	this.shape_35.setTransform(666.9,266.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#556B89").s().p("AllF7IAAo8IIfAAIBLi5IBhAAIAAL1g");
	this.shape_36.setTransform(666.9,266.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#363435").p("AFxFDIrhAAIAAqFILhAAg");
	this.shape_37.setTransform(748.4,346.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#556B89").s().p("AlwFDIAAqFILhAAIAAKFg");
	this.shape_38.setTransform(748.4,346.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#363435").p("AFmFDIrLAAIAAqFILLAAg");
	this.shape_39.setTransform(666.9,346.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#556B89").s().p("AllFDIAAqFILLAAIAAKFg");
	this.shape_40.setTransform(666.9,346.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#363435").p("AFmEdIrLAAIAAo5ILLAAg");
	this.shape_41.setTransform(666.9,413.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#556B89").s().p("AllEdIAAo5ILLAAIAAI5g");
	this.shape_42.setTransform(666.9,413.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#363435").p("AM7btI50AAMAAAg3ZIZ0AAg");
	this.shape_43.setTransform(707.8,272.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D1DFEE").s().p("As6btMAAAg3ZIZ1AAMAAAA3Zg");
	this.shape_44.setTransform(707.8,272.9);

	this.instance_1 = new lib.wood();
	this.instance_1.parent = this;
	this.instance_1.setTransform(710.8,254.1,1,1,0,0,0,124.6,203.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(127,127,127,0.749)",2,2,9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5E514A").s().p("EgW3AiBMAAAhEBMAtvAAAMAAABEBg");
	this.shape_45.setTransform(709.5,247.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.instance_1},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(492.7,0,430.4,808.1);


(lib.uta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.events.Event;
		// make a variable to control the speed
		var speed = 3; // start as 10
		
		// 'update' this block every frame
		for (var i:int =0 ; i< 100; i++ ) {
			//trace (i);
			if (i == 50) {
				addEventListener(Event.ENTER_FRAME, update);
			}
		}
		x = 5000;
		// explain what update means
		function update(e:Event) {
			// manipulate the x property to move sidewards
			x = x - speed; // move to the left
			// accelerate
			// limit the position to stay on screen
			if (x < -width) { // off the left of the screen
				// move it to the right of the screen
				x = stage.stageWidth + width;
				// randomly position the block vertically
				//y = Math.random() * stage.stageHeight;
				
				removeEventListener(Event.ENTER_FRAME, update);
			}
		}
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.utabuidlingai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.7,251.7,0.333,0.314,0,0,0,701.6,802.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.uta, new cjs.Rectangle(0,-1,143.5,255.1), null);


(lib.Shell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.events.Event;
		
		// make a variable to control the speed
		var speed = 3; // start as 10
		
		// 'update' this block every frame
		for (var i:int =0 ; i< 100; i++ ) {
			//trace (i);
			if (i == 50) {
				addEventListener(Event.ENTER_FRAME, update);
			}
		}
		
		// explain what update means
		function update(e:Event) {
			// manipulate the x property to move sidewards
			x = x - speed; // move to the left
			// accelerate
			// limit the position to stay on screen
			if (x < -width) { // off the left of the screen
				// move it to the right of the screen
				x = stage.stageWidth + width;
				// randomly position the block vertically
				//y = Math.random() * stage.stageHeight;
				removeEventListener(Event.ENTER_FRAME, update);
			}
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.shellai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(218.2,114,0.356,0.342,0,0,0,612.6,457.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shell, new cjs.Rectangle(15.9,96,420.4,176.6), null);


(lib.pump_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		import flash.events.Event;
		
		// make a variable to control the speed
		var speed = 3; // start as 10
		
		// 'update' this block every frame
		addEventListener(Event.ENTER_FRAME, update);
		
		// explain what update means
		function update(e:Event) {
			// manipulate the x property to move sidewards
			x = x - speed; // move to the left
			// accelerate
		//	speed = speed + 0.02;
			// limit the position to stay on screen
			if (x < -width) { // off the left of the screen
				// move it to the right of the screen
				x = stage.stageWidth + width;
				// randomly position the block vertically
				y = Math.random() * stage.stageWidth/2;
			}
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.pumpin = new lib.pumpinside();
	this.pumpin.name = "pumpin";
	this.pumpin.parent = this;
	this.pumpin.setTransform(0,-33.6,1,1,0,0,0,0,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.pumpin).wait(1));

}).prototype = getMCSymbolPrototype(lib.pump_1, new cjs.Rectangle(-53.7,-67.2,107.6,67.3), null);


(lib.mcDonalds_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.events.Event;
		
		// make a variable to control the speed
		var speed = 3; // start as 10
		
		// 'update' this block every frame
		for (var i:int =0 ; i< 100; i++ ) {
			//trace (i);
			if (i == 50) {
				addEventListener(Event.ENTER_FRAME, update);
			}
		}
		
		
		// explain what update means
		function update(e:Event) {
			// manipulate the x property to move sidewards
			x = x - speed; // move to the left
			// accelerate
			// limit the position to stay on screen
			if (x < -width) { // off the left of the screen
				// move it to the right of the screen
				x = stage.stageWidth + width;
				// randomly position the block vertically
				//y = Math.random() * stage.stageHeight;
				removeEventListener(Event.ENTER_FRAME, update);
			}
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.mcdonalds_ai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(146,46.7,0.609,0.647,0,0,0,240.3,153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcDonalds_2, new cjs.Rectangle(-1,-53,293.5,198.6), null);


(lib.Star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Star_anim();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.5,58.5);


(lib.collectible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Star();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.51,scaleY:0.51,y:0.5},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:30},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40);


(lib.blueB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueB, new cjs.Rectangle(-73.2,-73.2,146.5,146.5), null);


(lib.bird1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.birdwing();
	this.instance.parent = this;
	this.instance.setTransform(4.3,-18.5,1,1,0,0,0,0,-19.1);

	this.instance_1 = new lib.birdflat();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.2,-11.6,1,1,0,0,0,-0.1,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-40,108.5,43.2);


(lib.bird = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bird1();
	this.instance.parent = this;
	this.instance.setTransform(-1,-27.2,1,1,0,0,0,0,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-0.5,y:-26.5},0).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-46,108.5,43.2);


(lib.bike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		addEventListener(KeyboardEvent.KEY_DOWN, fl_KeyboardDownHandler_2);
		
		function fl_KeyboardDownHandler_2(event:KeyboardEvent):void
		{
			if (event.keyCode == Keyboard.UP) {
				stop();
			}
		
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.instance = new lib.bicycleai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-46.1,0.698,0.698,0,0,180,99.5,66.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.4,-92.3,139,92.3);


// stage content:
(lib.javascript_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bike = {}; // this is object player
		var pump = {}; // this is object pump
		var Road = {}; // this is object road
		var mountain = {}; // this is object mountain
		var bg = {}; // this is object background
		var startscreen = {}; // this is start screen
		var overscreen = {}; // this is over screen
		var collectibles = []; // this is food object
		var hole = {}; // this object is hole, created to destroy player
		var house1 = {}; // this is building 1 object
		var house2 = {}; // this is building 2 object
		var house3 = {}; // this is building 3 object
		var bird = {}; // this is made to destroy player
		var mcDonalds_2 = {}; // this is object building
		var foodQuantity = 0;
		var gamestate = "play";
		var gamestage = this;
		var score = 0;
		var ypos = 350; // position of bike in y axis
		var yposHole = 340; // position of hole in y-axis
		
		//createBackground (-70);
		createStartScreen (200);
		
		
		
		function init () {
		gamestate = "playing";
		score = 0;
		// Function Calls
		createjs.Sound.play("bgm", false, 0, 0, -1, 1);
		createMountain (350);
		createHouse(250);
		createRoad (350);
		generateHole (yposHole);
		createBike (ypos);
		generatePump ();
		foodRotation ();
		createBird ();
		setInterval (ground , 10); //Bring the player back to the ground using gravity
		// work as a thread
		}
		
		// Generate Food
		function generateFood(n) {
				var positionx = 600;
				var positiony = Math.floor(Math.random()*200);
				for(var i=1; i<=n; i++){
				var c = new lib.collectible();
				c.x = positionx; 
				c.y = positiony;
				positionx += 40;
				collectibles.push(c);
				gamestage.addChild(c);
			}
		}
		
		//Create Start Screen
		function createStartScreen (a) {
		startscreen = new lib.startscreen();
		startscreen.x = 250; 
		startscreen.scaleX = 1;
		startscreen.scaleY = 1;
		startscreen.y = a; // background appears on the bottom left corner
		gamestage.addChild(startscreen); // background appears on-stage
		}
		
		//Create Over Screen
		function createOverScreen (a) {
		overscreen = new lib.overscreen();
		overscreen.x = 250; 
		overscreen.scaleX = 1;
		overscreen.scaleY = 1;
		overscreen.y = a; // background appears on the bottom left corner
		gamestage.addChild(overscreen); // background appears on-stage
		}
		
		//Create Pump
		function generatePump()
		{
			pump = new lib.pump();
			pump.x = 500; // width of screen
			pump.y = Math.floor(Math.random()*200);
			pump.scaleX = 0.5;
			pump.scaleY = 0.3;
			gamestage.addChild(pump);
		}
		
		//Create Bird
		function createBird()
		{
			bird = new lib.bird();
			bird.x = 500; // width of screen
			bird.y = Math.floor(Math.random()*200);
			bird.scaleX = 0.5;
			bird.scaleY = 0.5;
			gamestage.addChild(bird);
		}
		
		//Create Hole
		function generateHole(a)
		{
			hole = new lib.hole();
			hole.x = 1500; // width of screen
			hole.y = a;
			hole.scaleX = 0.8;
			hole.scaleY = 0.7;
			gamestage.addChild(hole);
		}
		
		//Create House
		function createHouse (a) {
		house1= new lib.house1();
		house2= new lib.house2();
		house3= new lib.house3();
		mcDonalds_2= new lib.mcDonalds_2();
		house1.x = 1550; 
		house2.x = 1250;
		house3.x = 2350;
		mcDonalds_2.x = 1800;
			
		house1.scaleY = 0.5;
		house2.scaleY = 1;
		house3.scaleY = 0.5;
		mcDonalds_2.scaleY = 0.5;
		mcDonalds_2.scaleX = 0.5;
		
		house1.y = a; // house appears on the bottom left corner
		house2.y = 280;
		house3.y = a;
		mcDonalds_2.y = a;
		
		gamestage.addChild(house1);
		gamestage.addChild(house2);
		gamestage.addChild(house3);
		gamestage.addChild(mcDonalds_2);
		// house appears on-stage
		}
		
		//Create Mountain
		function createMountain (a) {
		mountain= new lib.mountain();
		mountain.x = 550; 
		mountain.scaleY = 1;
		mountain.y = a; // mountain appears on the bottom left corner
		gamestage.addChild(mountain); // mountain appears on-stage
		}
		
		//Create BG
		function createBackground (a) {
		bg= new lib.bg();
		bg.x = 1; 
		bg.scaleX = 1.5;
		bg.scaleY = 1;
		bg.y = a; // background appears on the bottom left corner
		gamestage.addChild(bg); // background appears on-stage
		}
		
		//Create Road
		function createRoad (a) {
		Road= new lib.Road();
		//Road.x = 10; 
		Road.scaleY = 10;
		Road.y = a; // road appears on the bottom left corner
		gamestage.addChild(Road); // road appears on-stage
		}
		
		//Create Player
		function createBike (a) {
		bike= new lib.bike();
		bike.scaleX =-0.7; // the player turns right
		bike.scaleY =0.7; // the player turns right
		bike.x = 25; 
		bike.y = a; // the player appears on the bottom left corner
		gamestage.addChild(bike); // the player appears on-stage
		}
		
		//Move player
		window.onkeydown = function(e) {
		        var key = e.keyCode;
		        if (key===37) {//left arrow pressed
					bike.x -= 10;
					bike.scaleX = 0.7;
						if (bike.x < 4) {
							bike.x = 4 ;
				}
		
		        } else if (key==39) {//right arrow pressed
					bike.x += 10;
					bike.scaleX =-0.7;
					if (bike.x > 490) {
					bike.x =490 ;
				}
		        } else if (key==38) { // up arrow pressed
					bike.y -= 100;
					if ( bike.y <= 0) {
					// max height for bike is 0
					bike.y += 100;
				}
					
				}
		
		}
		
		
		
		// works in background
		function ground ( ) {
			//Update Score every second
			gamestage.score_txt.text = score;
			// check to see if bike is on the ground or not
			if (bike.y == ypos ) {
				bike.y = ypos;
				flyUpDown = 2; // if the player is in ground , bird will fly down
			} else {
				bike.y += 10;
				flyUpDown = 1; // if the player is in air, bird will fly up
			}
			
			//move pump, mountain, bird and foods
			if (gamestate == "playing"){
				
				
				//move foods
				for (var i=0;i < foodQuantity;i++){
					collectibles[i].x -=4;
					if (collectibles[i].x < -500){
					//gamestage.removeChild(collectibles[i]);
					//collectibles.splice(i, 0);
						collectibles[i].x =1600;
						collectibles[i].y =Math.floor(Math.random()*200);
					}
				}
				//move hole
				hole.x -=3;
				if (hole.x < -50) {
					hole.x = 1100;
					hole.y = yposHole;
				}
				
				//move houses
				house1.x -=3;
				house2.x -=3;
				house3.x -=3;
				mcDonalds_2.x -=3;
				
				//move pump
				pump.x -=3;
				if (pump.x < -50) {
					pump.x = 1100;
					pump.y = Math.floor(Math.random()*200);
				}
				
				//move bird
				bird.x -=3;
				if (flyUpDown == 1) {
					bird.y -=0.5;
				}
				else {
					bird.y +=0.5;
				}
				// Repeatation of bird after certain time
				if (bird.x < -50) {
					bird.x = 1100;
					bird.y = Math.floor(Math.random()*200);
				}
				// Bird cannot go max than 300 unit depth
				if (bird.y > 300) {
					bird.y = 300;
				}
				//Bird cannot go max than 30 unit height
				if (bird.y < 30) { 
					bird.y = 30;
				}
				
					//move mountain
					mountain.x -=3;
					if (mountain.x < -450) {
					mountain.x = 1800;
				}
			}
			
			//Collision Detection with hole
			var ht = bike.globalToLocal(hole.x, hole.y);
				if(bike.hitTest(ht.x, ht.y)){
					bike.visible=false;
					destroyCollectibles();
					hole.visible=false;
					Road.visible=false;
					createOverScreen (200);
					overscreen.visible = true;
					mountain.visible = false;
					house1.visible = false;
					house2.visible=false;
					house3.visible=false;
					mcDonalds_2.visible = false;
					bird.visible = false;
				}
				
			//Collision Detection with pump
			var pt = bike.globalToLocal(pump.x, pump.y);
				if(bike.hitTest(pt.x, pt.y)){
					pump.x = 1200;
					pump.y = Math.floor(Math.random()*200);
					score= score + 5;
					createjs.Sound.play("pickup", true, 0, 0, 0, 0.1);
				}
				
			//Collision Detection with bird
			var bt = bike.globalToLocal(bird.x, bird.y);
				if(bike.hitTest(bt.x, bt.y)){
					bike.visible=false;
					destroyCollectibles();
					hole.visible=false;
					Road.visible=false;
					createOverScreen (200);
					overscreen.visible = true;
					mountain.visible = false;
					house1.visible = false;
					house2.visible=false;
					house3.visible=false;
					mcDonalds_2.visible = false;
					bird.visible = false;
				}
				
					//Collision Detection with star
			for (var i= 0; i < collectibles.length ; i++ ) {
			var ft = bike.globalToLocal(collectibles[i].x, collectibles[i].y);
				if(bike.hitTest(ft.x, ft.y)){
					collectibles[i].x = 2200;
					collectibles[i].y = Math.floor(Math.random()*200);
					score++;
					createjs.Sound.play("pickup", true, 0, 0, 0, 0.1);
				}
			}
		
		
		}
		
		//Rotates food
		function foodRotation(){
			// Function calls
		//foodQuantity = Math.floor(Math.random()*30);
		  foodQuantity = 15;
		generateFood(foodQuantity);
		}
		
		//Destroy Food
		function destroyCollectibles() {
			for(var i=0; i<collectibles.length; i++){
				gamestage.removeChild(collectibles[i]);
			}
			collectibles = [];
		}
		
		//Start Screen
		startscreen.addEventListener("click", startClicked);
		function startClicked() {
			startscreen.visible = false;
			var flyUpDown = Math.floor(Math.random()*2);
			init();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.instance = new lib.overscreen();
	this.instance.parent = this;
	this.instance.setTransform(-396.9,280.9);

	this.score_txt = new cjs.Text("", "44px 'Arial'", "#FFEC98");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 51;
	this.score_txt.lineWidth = 141;
	this.score_txt.parent = this;
	this.score_txt.setTransform(540,14.1);

	this.instance_1 = new lib.hole();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-207.4,154.1,1,1,0,0,0,0,-20.6);

	this.instance_2 = new lib.collectible();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-432.1,318.1);

	this.instance_3 = new lib.mountain();
	this.instance_3.parent = this;
	this.instance_3.setTransform(974.4,249.2,0.713,0.639,0,0,0,-3.8,-4.9);

	this.start_screen = new lib.startscreen();
	this.start_screen.name = "start_screen";
	this.start_screen.parent = this;
	this.start_screen.setTransform(-256.1,-36);

	this.yellowPump = new lib.pump_1();
	this.yellowPump.name = "yellowPump";
	this.yellowPump.parent = this;
	this.yellowPump.setTransform(660.9,330.1,1,1,0,0,0,0,-33.6);

	this.instance_4 = new lib.Road();
	this.instance_4.parent = this;
	this.instance_4.setTransform(937,87.1,1,1,0,0,0,280.1,78.4);

	this.movieClip_4 = new lib.bike();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(631,227.1,1,1,0,0,0,0,-46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_4},{t:this.instance_4},{t:this.yellowPump},{t:this.start_screen},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.score_txt},{t:this.instance}]}).wait(1));

	// bird
	this.instance_5 = new lib.background();
	this.instance_5.parent = this;
	this.instance_5.setTransform(281.1,196.7,1.02,1.07,0,0,0,307.9,0.1);

	this.instance_6 = new lib.bird();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-195.5,240.8,1,1,0,0,0,0,-21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.4,57.5,1966.1,544.4);
// library properties:
lib.properties = {
	id: '4AE1832512692444961C277F1722CC35',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/javascript_test_atlas_.png", id:"javascript_test_atlas_"},
		{src:"sounds/bgm.mp3", id:"bgm"},
		{src:"sounds/pickup.mp3", id:"pickup"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4AE1832512692444961C277F1722CC35'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;