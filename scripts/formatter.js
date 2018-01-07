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
  console.log(newAst, ' in formatter');
  doesThisWork(newAst);
};

function doesThisWork(newAst) {

  newAst.forEach((asteroid) => {
    // let 
    let fuMessage = [`ing/${asteroid.name}/Griffin`, `look/${asteroid.name}/Griffin`, `shakespeare/${asteroid.name}/Griffin`];
    let urlEnd = fuMessage[Math.floor(Math.random() * fuMessage.length)];
    let fUrl = 'http://foaas.com/' + urlEnd;
    fyou.getFu(fUrl);
  });
}