'use strict';
const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');
// const fyou = require('./fyou');


$('#submit').click(()=>{
  $( "#fuDiv" ).empty();
  let $startDate = $('#startDate').val();
  let $endDate = $('#endDate').val();
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${$startDate}&end_date=${$endDate}&api_key=jbD6aTAL5LapUGaN7FaJFi3NYjsK0GU35ByNsfJX`;
    factory.getAsteroids(url)
    .then((data) => {
      formatter.formatData(data);
    });
    // .then((fUrl)=>{
    //       fyou.getFu(fUrl);
    // });
});





