/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user(_, __, { models }) {
      return models.User.findOne();
    },

    pet(_, __, { models }) {
      return models.Pet.findOne();
    }
  },
  // Mutation: {},
  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    }
  },
  User: {}
};
