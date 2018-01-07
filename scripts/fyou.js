'use strict';

const $ = require('jquery');

module.exports.getFu = (fUrl, date, name, hazardous) => {
  return new Promise((resolve, reject) => {
  $.ajax({
    url: fUrl,    
  }).done(result => {
    let danger = '';
    if(hazardous){
      danger = 'may destroy the earth';
    }else{
      danger = 'will not destroy the earth';
    }
    let resMessage = `Asteroid ${name} will approach earth on ${date}. ${name} ${danger} ${result}`;
    $('#fuDiv').append(resMessage);    
    resolve(result);
  
  });
});
};