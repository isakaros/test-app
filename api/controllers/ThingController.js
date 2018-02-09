/**
 * ThingController
 *
 * @description :: Server-side logic for managing things
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  'new': function (req,res) {
    res.view();
  },

  create: function (req, res, next){


    Thing.create(req.params.all(), function ThingCreated(err, thing) {

      // if (err) return next(err);
          if (err) {
            console.log(err);
            req.session.flash = {
              err: err
            };

            return res.redirect('/thing/new');
          }

      // res.json(user);
      //
      // req.session.flash ={};

      res.redirect('/thing');
    });
  },

  show: function(req, res, next) {


    Thing.findOne(req.param('id'), function foundThing(err, thing) {
      if (err) return next(err);
      if (!thing) return next();
      res.view({
        thing: thing
      });
    });
  },

  index: function (req, res, next) {

    // console.log(new Date());
    // console.log(req.session.authenticated);

    //get an array of all users in the user controller
    Thing.find(function foundThings (err, things) {
      if (err) return next(err);
      res.view({
        things: things
      });
    });
  },

  edit: function (req, res, next) {

    Thing.findOne(req.param('id'), function foundThing(err, thing){
      if (err) return next(err);
      if (!thing) return next();

      res.view({
        thing: thing
      });
    });
  },

  update: function (req, res, next) {
    Thing.update(req.param('id'), req.params.all(), function thingUpdated (err) {
      if (err) {
        return res.redirect('/thing/show' + req.param('id'));
      }

      res.redirect('thing/show/' + req.param('id'));
    });
  },

  destroy: function (req, res, next) {

    Thing.findOne(req.param('id'), function foundThing (err, thing){
      if (err) return next(err);

      if (!thing) return next ('Thing doesn\'t exist.');

      Thing.destroy(req.param('id'), function thingDestroyed(err){
        if (err) return next(err);
      });

      res.redirect('/thing');
    });
  },

  search: function (req, res, next) {
  	Thing.find(req.params.all(),function foundThings (err, things){
  		if (err) return next(err);
  		if (!thing) return next('thing doesnt exist');
  		// res.view({
  		// 	things: things
  		// });

  		return res.json(things);
  	});
  }

};