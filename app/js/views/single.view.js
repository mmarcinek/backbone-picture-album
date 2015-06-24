;(function (){

  'use strict';

  app.Views.Single = Backbone.View.extend({

    className: 'single',

    template: hbs.single,


  initialize: function (options) {

      var args = options || {};

      this.singleId = args.singleId;
      this.collection = args.collection;

      this.render();
      $('.content').html(this.el);

    },

  render: function () {
    var individual = this.collection.get(this.singleId);
    // console.log(singleId);
    this.$el.html(this.template(individual.toJSON() ));
  }

});

}());
