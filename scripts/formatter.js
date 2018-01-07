'use strict';

const $ = require('jquery');
const fyou = require('./fyou');
module.exports.formatData = (data) => {
  let asteroids = [];
  let newAst = [];
  let neos = data.near_earth_objects;
  let neoKeys = Object.keys(neos);

  neoKeys.forEach((date) => {
    for (let i = 0; i < neos[date].length; i++) {
      asteroids.push(neos[date][i]);
    }
  });
  for (let i = 0; i < 3; i++) {
    newAst.push(asteroids.splice(Math.random() * (asteroids.length - 1), 1).pop());
  }
  sendFuMessage(newAst);
};

function sendFuMessage(newAst) {

  newAst.forEach((asteroid) => {
    let hazardous = asteroid.is_potentially_hazardous_asteroid;
    let date = asteroid.close_approach_data[0].close_approach_date;
    let name = asteroid.name;
    let fuMessage = [`ing/${name}/Griffin`, `look/${name}/Griffin`, `shakespeare/${name}/Griffin`];
    let urlEnd = fuMessage[Math.floor(Math.random() * fuMessage.length)];
    let fUrl = 'http://foaas.com/' + urlEnd;
 
    fyou.getFu(fUrl, date, name, hazardous);
  });
}