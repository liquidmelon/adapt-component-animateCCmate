define(function(require) {

    var ComponentView = require("coreViews/componentView");
    var Adapt = require("coreJS/adapt");
    var t; //a reference to "this" to avoid confusion over any other local "this"

    var AnimateCCMate = ComponentView.extend({

        events: {
            'inview':'inview'
        },

        preRender: function() {

        },

        postRender: function() {

            t = this;

            this.$('.animateCCmate-object').ready(function() {

                t.setReadyStatus();

                window.addEventListener('myLOAD', t.CCloaded);

                Adapt.on('router:location', t.isNewLocation);

                t.$('.animateCCmate-object').attr('data', t.model.get('_source'));

            });

        },

        isNewLocation: function(e) {

            // listen for location change
            console.log('location changed: ' + e);

            window.removeEventListener('myLOAD', t.CCloaded);

            Adapt.off('router:location', t.isNewLocation);

            //undo more stuff here?

        },

        isDone: function() {

            this.setCompletionStatus();

        },

        CCloaded: function(e) {

            console.log('reference passed from CustomEvent: ' + e.detail);
            var mc = e.detail; //mc is the "this" in the Animate CC content

            var done = t.model.get('_isComplete');
            mc.canConnect(t, done); //pass a reference to "this" component and if this component is complete

        },

        getObjectValue: function(str) {
            var theValue = t.model.get(str);
            return theValue;
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
          if (visible) {

              // element is now visible in the viewport
              console.log('element is now visible in the viewport');

              if (visiblePartY === 'top') {
                  // top part of element is visible
                  this._isVisibleTop = true;
              } else if (visiblePartY === 'bottom') {
                  // bottom part of element is visible
                  this._isVisibleBottom = true;
              } else {
                  // whole part of element is visible
                  this._isVisibleTop = true;
                  this._isVisibleBottom = true;
              }

              //do more stuff here?

          }
          else {

              // element has gone out of viewport
              console.log('element has gone out of viewport');

              this._isVisibleTop = false;
              this._isVisibleBottom = false;

              //undo more stuff here?

          }
        }

    },
    {
        template: 'animateCCmate'
    });

    Adapt.register("animateCCmate", AnimateCCMate);

    return AnimateCCMate;

});
