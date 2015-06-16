;( function (){

  'use strict';

  app.Models.Pictures = new Backbone.Model.extend ({

    idAttribute: '_id',

   defaults: {
    picture: '',
    title: ''
   }


  });

}());
