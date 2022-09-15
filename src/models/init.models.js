const Users = require("./user.model");
const UserImages = require("./userImages.model");
const Roles = require("./role.model");
const Reservations = require("./reservations.model");
const Places = require("./places.model");
const Accommodations = require("./accommodations.model");
const AccommodationImages = require("./accommodationImages.model");

const initModels = () => {


      Users.hasOne(Roles);
      Roles.belongsToMany(Users);


      Users.hasMany(UserImages);
      UserImages.belongsTo(Users);


      Users.belongsToMany(Accommodations, { through: Reservations });
      Accommodations.belongsToMany(Accommodations, { through: Reservations });


      Accommodations.hasMany(AccommodationImages);
      AccommodationImages.belongsTo(Accommodations);


      Places.hasMany(Accommodations);
      Accommodations.belongsTo(Places);
};

module.exports = initModels;