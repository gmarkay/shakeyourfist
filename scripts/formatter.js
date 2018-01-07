'use strict';

const $ = require('jquery');

module.exports.formatData = (data) => {
  let neos = data.near_earth_objects;
  let neoKeys = Object.keys(neos);
  console.log(neos, 'neos');
  console.log(neoKeys, 'keys');

  neoKeys.forEach((date)=>{
    for(let i = 0; i< neos[date].length; i++){

      console.log(`Asteroid on ${date}`, neos[date][i].name);
    }

  });


};