'use strict';

module.exports = {
   up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contents', [{
      name: 'ADVENTURE',
      content: 'Life is too fun and exciting for us to be idle. One place is too boring for you to settle in. There is something good destined to happen tomorrow, and something better the day after.'
    }, {
      name: 'ART',
      content: "It is a proof that one's perspective is different from another.It takes courage to identify them and sacrifice to understand."
    },{
      name: 'ANYTHING CUTE',
      content: "What is cute? Small and deformed? Ugly but adorable? Well, it's anything that makes me smile"
      },{
      name: 'FOOD',
      content: "To pay off a day's hardwork, to celebrate a success, to mourn for a loss. Food is always a good companion."
    },{
      name: 'PUPPIES',
      content: "Why? Why not? They're just cute and that's why ^-^"
    },{
      name: 'POETRY',
      content: "I like the feeling when words are put into different contexts that create different meanings. It's just A W E S O M E"
    },{
      name: 'STITCH',
      content: 'Ohana means family and family means no one gets left behind.'
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contents', null, {});
  }
};
