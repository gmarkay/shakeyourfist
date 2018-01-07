'use strict';

const $ = require('jquery');

module.exports.getAsteroids = (url) => {

  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,    
    }).done(data => {

      resolve(data);

    }).fail(error => {
      reject(error);

    });
  });
};

  // url: nasaUrl,    
  //   success: function(result){
  //     console.log(result.near_earth_objects);

  //     let neos = result.near_earth_objects;
  //     console.log(Object.keys(neos, 'keys'));
  //     let neoKeys = Object.keys(neos);
  //   }

  // });
