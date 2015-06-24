;( function (){

  'use strict';

  var allFamily = new app.Collections.Pictures();

  allFamily.fetch().done( function () {

    new app.Routers.MainRouter({
      collection: allFamily
    });

    Backbone.history.start();

  });



}());
