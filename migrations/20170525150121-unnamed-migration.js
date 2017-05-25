'use strict';

module.exports = {
   up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contents', [{
      name: 'JASON CHEN',
      content: 'American pop singer of Taiwanese descent. He began as a singer performing covers on YouTube, where he gained a sizable following. He later released dozens of singles and four full albums. Best Friend, Miracle'
    }, {
      name: 'KINA GRANNIS',
      content: "American singer-songwriter and actress. Grannis was the winner of the 2008 Doritos Crash the Super Bowl contest. She won Best Web-Born Artist at the 2011 MTV O Music Awards. Valentine, Gone, The One You Say Goodnight To, Message from Your Heart"
    },{
      name: 'JOSEPH VINCENT',
      content: "Acoustic singer-songwriter who's ear for music extended to all genres, from hip-hop to pop to rock to folk. Picking up his first guitar at the age of 15, Joseph started playing covers of two of his main musical influences (Jack Johnson and Jason Mraz) which sparked his passion and interest for creating his own music. If you stay, Stardust, Life of a man, Be there "
    },{
      name: 'US THE DUO',
      content: 'American folk pop duo consisting of husband-and-wife Michael and Carissa. Carissa Alvarado, a Filipino American started singing at the age of 5 with a church choir. Michael Alvarado, a Puerto Rican descent started piano lessons at the age of 7. No Matter Where You Are, Better Together, Near or Far'
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contents', null, {});
  }
};
