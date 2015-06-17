;( function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    template: hbs.main,

    initialize: function (options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.content').html(this.el);

    },

    render: function () {
      console.log('I am rendering');
      this.$el.html(this.template);
    }

  });


}());


