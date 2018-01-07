'use strict';

const $ = require('jquery');

module.exports.getFu = (fUrl, astData) => {
  console.log(astData, 'in fu');
  return new Promise((resolve, reject) => {
  $.ajax({
    url: fUrl,    
  }).done(result => {
    $('#fuDiv').append(result);    
    resolve(result);
  
  });
});
};