# adapt-component-animateCCmate
a component which embeds Adobe Animate CC content into an object

**animate CC mate** is a *presentation component* for the [Adapt framework](https://github.com/adaptlearning/adapt_framework).

**animate CC mate** is based on the [Game Frame](https://github.com/anthkris/adapt-game-frame) plugin and is built to allow you to embed responsive HTML5 content created with Adobe Animate CC into your course. the content must be completed in order to complete the component.



## Usage

this component is more for reference than for production. it is suggested to make a fork to support your own scenario. knowledge of animate cc will be helpful.

here is the code used to handle the communication between adapt and the animate cc content.* the animate cc content initiates the communication by sending a custom event to window.parent which is adapt's course window. the window listener in component's code is then able to set a reference to the animate cc content. the component passes a reference to itself when calling a function in the animate cc content. once they have a reference to each other, passing data back and forth is easy.

*code is from an Animate CC .fla file, which was published as HTML5 content. the .fla requires a dynamic text field (myTxt) and a button (myButt) on it's stage. the published example is included in the skeleton directory.

```
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
```



## Notes

when using the default source path and included example after installing this plugin, be sure to check the plugin assets directory in the build of a course. you may have to move the contents of the skeleton directory back into the skeleton directory. use the skeleton's directory structure in the repo as a guide.

you can also move the skeleton directory to the course assets directory. if you do, be sure to change the source path to "course/en/assets/skeleton/skeleton.html". (this is the preferred method for production.)



## Limitations

not known at this time

----------------------------
**Version number:**  0.0.1<br>
**Framework versions:** ^2.0

