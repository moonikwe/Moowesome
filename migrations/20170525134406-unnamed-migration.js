'use strict';

module.exports = {
   up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('contents', [{
      name: 'VINH NGUYEN',
      content: 'Currently the director and choreographer for Super Galactic Beat Manipulators a competitive adult hip hop team. Kinjaz--Jabbawockeez'
    }, {
      name: 'OLIVIA IRENE CHACHI GONZALES',
      content: "American dancer, choreographer and occasional actress. She is a member of the dance crew I.aM.mE which won the sixth season of America's Best Dance Crew in 2011"
    },{
      name: 'PATRICK "PAT" RIVERA CRUZ',
      content: 'Teacher and choreographer of the hip hop general school and performance program of WSPA.As a young student of age 5, he studied ballet, tap, and jazz at WSPA.'
    },{
      name: 'JAWN HA',
      content: 'He has been a Dancer/Choreographer for GRV Jawn has also taken many fundamental classes in multiple styles of hip-hop which include break dancing, popping, locking, krump and choreography. Mos Wanted Crew'
    },{
      name: 'KEONE AND MARI MADRID',
      content: "Keone finally found a permanent home as a dancer and director with San Diego's finest, --Choreo Cookies-- As a teacher he has been able to travel with dance partner and significant other Mariel Martin in places all around the world in Asia, Europe, and North America."
    },{
      name: 'ANTHONY LEE',
      content: 'Current director of an America dance crew --The Kinjaz-- and the artistic director of Culture Shock LA. He cites his dances as “iso-urban movement” a mixture of urban dance with isolation dance moves.'
    },{
      name: 'KOHARU SUGAWARA',
      content: 'Sugawara started dancing when she was ten years old and never looked back. She has her own dance style which is very expressive and stands out from other types of dance. Koharu has been a dancer for Rihanna, SMAP, Amie Amuro, Girls Generation and more.'
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('contents', null, {});
  }
};
