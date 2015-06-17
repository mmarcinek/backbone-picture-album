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

    singleMember : function (){
      new app.Views.SingleView({
        collection: this.collection
      });
    }







  });


}());
