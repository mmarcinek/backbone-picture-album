;( function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options){

      var args = options || {};

      this.collection = args.collection;
    },

    routes: {
      '' : 'homePage',
      'member/:id' : 'singleMember',
      'input' : 'editFamily'
    },

    homePage : function (){
      new app.Views.Main({
        collection: this.collection
      });
    },

    editFamily : function (){
      new app.Views.EditView({
        collection: this.collection
      });
    },

    singleMember: function (id){
      new app.Views.Single({
        singleId: id,
        collection: this.collection
      });
    }







  });


}());
