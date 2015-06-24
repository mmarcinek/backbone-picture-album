;( function (){

  'use strict';

  app.Models.Pictures = Backbone.Model.extend ({

    idAttribute: '_id',

   defaults: {
    id: '',
    title: '',
    image: '',
    description: ''
   }


  });

}());
