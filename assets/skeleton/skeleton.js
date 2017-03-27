(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.myButt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape.setTransform(129.2,18.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBAIAAhiIgjBiIgSAAIgkhiIgBAAIAABiIgVAAIAAh/IAgAAIAjBjIAAAAIAihjIAgAAIAAB/g");
	this.shape_1.setTransform(116.1,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape_2.setTransform(98.2,18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABA7QgEgBgDgDQgDgDgBgEIgBgLIAAg2IgPAAIAAgPIAPAAIAAgcIAUAAIAAAcIASAAIAAAPIgSAAIAAAxQAAAHABACQACAEAHAAIAIgBIAAAQIgNABQgIAAgFgCg");
	this.shape_3.setTransform(90,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape_4.setTransform(82.2,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_5.setTransform(75,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBBIAAh+IATAAIAAAMQACgEAEgDIAHgEQAHgEAIAAIALABIAJADQAHADAGAIQAGAGACAJQADAJAAALQAAAJgDAIQgCAIgFAHQgFAHgHAEIgIADIgKABQgJAAgHgDQgFgCgEgDIgFgGIgBAAIAAAugAgKguQgFADgEAEQgDAFgCAFQgCAHAAAHQAAAHACAGQACAFADAEQAEAFAFACQAFADAFAAQAHAAAEgDQAGgDACgFQAEgEABgFQABgFAAgHQAAgHgBgFIgFgLQgDgFgFgCQgFgDgGAAQgFAAgFACg");
	this.shape_6.setTransform(67.7,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvAwIAAg2IAAgKIgCgIQgDgDgDgCQgDgCgGAAQgFAAgEACQgEACgCADIgEAIIgBAKIAAA2IgUAAIAAg7IgBgIQAAgEgCgDQgCgCgDgBQgDgCgFAAQgEAAgDACIgHAFQgDADgBAEQgCAFAAAFIAAA3IgVAAIAAhcIATAAIAAANIABAAQAGgIAGgEIAHgDIAKgBQAJAAAGAEIAGAFIAEAHQAGgIAGgEIAIgDIAJgBQAIAAAFACQAGACAEADQAEAEACAGQADAGgBAJIAAA/g");
	this.shape_7.setTransform(54.1,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKAwIgJgCQgJgEgFgHQgHgGgDgJQgDgKAAgKQAAgKADgJQADgJAHgGQAFgHAJgDIAJgDIAKgBQAIAAAMAEQAJADAFAHQAHAGADAJQADAJAAAKQAAAKgDAKQgDAJgHAGQgFAHgJAEQgMADgIAAgAgLgdQgFADgDAEQgDAFgCAGQgBAFAAAGIABAMQACAGADAEQADAFAFADQAGADAFAAQAGAAAGgDQAFgDADgFQADgEACgGIABgMQAAgGgBgFQgCgGgDgFQgDgEgFgDQgGgDgGAAQgFAAgGADg");
	this.shape_8.setTransform(41,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKBCQgGgBgFgDIgLgGQgFgEgEgFIgHgKIgFgLIgDgNIgBgNIABgMIADgNIAFgLIAHgKQAEgFAFgEIALgGQAFgDAGgBIAOgBQALAAAJADQAJADAIAFQAHAGAEAIQAGAMAAAHIgXAAIgDgLQgDgEgEgEQgEgDgFgCQgGgCgGAAIgJABIgIADQgIAEgFAHQgEAHgCAJQgCAIgBAJQABAKACAIQACAJAEAHQAFAHAIAEIAIADIAJABQAGAAAGgDQAHgCADgFQAEgEADgHQADgGAAgHIAWAAQgCAPgDAGQgHAMgEAFIgRALQgOADgHAAIgOgBg");
	this.shape_9.setTransform(29.2,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#115B93").s().p("ApvChQhDAAgvgwQgvgvAAhCQAAhBAvgvQAvgwBDAAITfAAQBDAAAvAwQAvAvAABBQAABCgvAvQgvAwhDAAg");
	this.shape_10.setTransform(78.5,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#46A1DF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape_11.setTransform(129.2,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#46A1DF").s().p("AAtBAIAAhiIgjBiIgSAAIgkhiIgBAAIAABiIgVAAIAAh/IAgAAIAjBjIAAAAIAihjIAgAAIAAB/g");
	this.shape_12.setTransform(116.1,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#46A1DF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape_13.setTransform(98.2,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#46A1DF").s().p("AABA7QgEgBgDgDQgDgDgBgEIgBgLIAAg2IgPAAIAAgPIAPAAIAAgcIAUAAIAAAcIASAAIAAAPIgSAAIAAAxQAAAHABACQACAEAHAAIAIgBIAAAQIgNABQgIAAgFgCg");
	this.shape_14.setTransform(90,16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#46A1DF").s().p("AgIAwIgJgCQgJgEgGgGQgFgIgDgIQgDgJAAgLQAAgJADgJQADgJAGgGQAGgIAIgDIAJgDIAJgBIAKABIAJAEQAFACADADIAHAGQAGAJACAJQACAOgBAFIhDAAQAAAGACAEQABAGADADQADAFAFABQAFADAFAAQAJAAAGgEQAFgEADgHIATAAQgBAHgEAGQgEAFgGAFQgFAEgHACQgHACgIAAgAAYgHQAAgFgCgEQgCgFgDgDQgDgEgEgCQgEgCgFAAQgFAAgEACQgFACgDAEQgDADgCAEQgCAFAAAFIAvAAIAAAAg");
	this.shape_15.setTransform(82.2,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#46A1DF").s().p("AgJBAIAAh/IATAAIAAB/g");
	this.shape_16.setTransform(75,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#46A1DF").s().p("AgtBBIAAh+IATAAIAAAMQACgEAEgDIAHgEQAHgEAIAAIALABIAJADQAHADAGAIQAGAGACAJQADAJAAALQAAAJgDAIQgCAIgFAHQgFAHgHAEIgIADIgKABQgJAAgHgDQgFgCgEgDIgFgGIgBAAIAAAugAgKguQgFADgEAEQgDAFgCAFQgCAHAAAHQAAAHACAGQACAFADAEQAEAFAFACQAFADAFAAQAHAAAEgDQAGgDACgFQAEgEABgFQABgFAAgHQAAgHgBgFIgFgLQgDgFgFgCQgFgDgGAAQgFAAgFACg");
	this.shape_17.setTransform(67.7,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#46A1DF").s().p("AAvAwIAAg2IAAgKIgCgIQgDgDgDgCQgDgCgGAAQgFAAgEACQgEACgCADIgEAIIgBAKIAAA2IgUAAIAAg7IgBgIQAAgEgCgDQgCgCgDgBQgDgCgFAAQgEAAgDACIgHAFQgDADgBAEQgCAFAAAFIAAA3IgVAAIAAhcIATAAIAAANIABAAQAGgIAGgEIAHgDIAKgBQAJAAAGAEIAGAFIAEAHQAGgIAGgEIAIgDIAJgBQAIAAAFACQAGACAEADQAEAEACAGQADAGgBAJIAAA/g");
	this.shape_18.setTransform(54.1,18.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#46A1DF").s().p("AgKAwIgJgCQgJgEgFgHQgHgGgDgJQgDgKAAgKQAAgKADgJQADgJAHgGQAFgHAJgDIAJgDIAKgBQAIAAAMAEQAJADAFAHQAHAGADAJQADAJAAAKQAAAKgDAKQgDAJgHAGQgFAHgJAEQgMADgIAAgAgLgdQgFADgDAEQgDAFgCAGQgBAFAAAGIABAMQACAGADAEQADAFAFADQAGADAFAAQAGAAAGgDQAFgDADgFQADgEACgGIABgMQAAgGgBgFQgCgGgDgFQgDgEgFgDQgGgDgGAAQgFAAgGADg");
	this.shape_19.setTransform(41,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#46A1DF").s().p("AgKBCQgGgBgFgDIgLgGQgFgEgEgFIgHgKIgFgLIgDgNIgBgNIABgMIADgNIAFgLIAHgKQAEgFAFgEIALgGQAFgDAGgBIAOgBQALAAAJADQAJADAIAFQAHAGAEAIQAGAMAAAHIgXAAIgDgLQgDgEgEgEQgEgDgFgCQgGgCgGAAIgJABIgIADQgIAEgFAHQgEAHgCAJQgCAIgBAJQABAKACAIQACAJAEAHQAFAHAIAEIAIADIAJABQAGAAAGgDQAHgCADgFQAEgEADgHQADgGAAgHIAWAAQgCAPgDAGQgHAMgEAFIgRALQgOADgHAAIgOgBg");
	this.shape_20.setTransform(29.2,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#115B93").s().p("ApvChQhDAAgvgwQgvgvAAhCQAAhCAvgvQAvgvBDAAITfAAQBDAAAvAvQAvAvAABCQAABCgvAvQgvAwhDAAg");
	this.shape_21.setTransform(78.5,16.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FF00").s().p("ApvChQhDAAgvgwQgvgvAAhCQAAhCAvgvQAvgvBDAAITfAAQBDAAAvAvQAvAvAABCQAABCgvAvQgvAwhDAAg");
	this.shape_22.setTransform(78.5,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157.1,32.2);


// stage content:
(lib.skeleton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		////////////////////////////////////
		//set up the two-way communication
		
		var t = this;
		var myAdapt;
		
		this.canConnect = function(tRef,dRef){
			
			console.log("component _isComplete: " + tRef.model.get('_isComplete') + " / done: " + dRef);
			
			myAdapt = tRef;
			
			var val = myAdapt.getObjectValue("_isComplete");
			console.log("val: " + val);
			
			if(Boolean(val)){
				t.myTxt.text = "! completed !";
				t.myButt.visible = false;
			}
			else{
				t.myTxt.text = "not completed";
			}
			
		}
		
		var myLoadEvent = new CustomEvent('myLOAD', { 'detail': t });
		window.parent.dispatchEvent(myLoadEvent);
		
		////////////////////////////////////
		// do some stuff
		
		this.myButt.addEventListener("click", completeMe.bind(this));
		
		function completeMe(){
			
			console.log("completeMe");
			
			//
			
			myAdapt.isDone();
			
			var val = myAdapt.getObjectValue("_isComplete");
			console.log("val: " + val);
			
			if(Boolean(val)){
				t.myTxt.text = "! completed !";
				t.myButt.visible = false;
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// myTxt
	this.myTxt = new cjs.Text("", "16px 'Open Sans Semibold'", "#FBFAF8");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 24;
	this.myTxt.lineWidth = 196;
	this.myTxt.parent = this;
	this.myTxt.setTransform(200,62);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// myButt
	this.myButt = new lib.myButt();
	this.myButt.parent = this;
	this.myButt.setTransform(121.5,134);
	new cjs.ButtonHelper(this.myButt, 0, 1, 2, false, new lib.myButt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.myButt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,210,200,106.1);
// library properties:
lib.properties = {
	width: 400,
	height: 300,
	fps: 30,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;