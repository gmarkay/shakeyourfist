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
