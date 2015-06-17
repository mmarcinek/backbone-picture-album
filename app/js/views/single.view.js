;( function (){

  'use strict';

  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    template: hbs.single,

    events: {
      'submit #addFamily' : 'addFamily'
    },

    template: hbs.single,

    initialize: function (options){
      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.content').html(this.el);
    },

    render: function () {
      this.$el.html(this.template({ picture: this.collection.toJSON() }));
    },

    addFamily: function (event) {
      event.preventDefault();

      // Get Form and Form Data

      var self = this,
          form = $(event.target),
          title = form.find('#familyMember').val(),
          url = form.find('#hostURL').val(),
          description = form.find('#description').val();

      // Create new Family instance

      var fam = new app.Models.Pictures({
        title: title,
        url: url,
        description: description
      });

      this.collection.add(fam).save().success( function () {
        self.render();
      });
    }

  });

}());