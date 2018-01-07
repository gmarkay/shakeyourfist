'use strict';
const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');
// const fyou = require('./fyou');


function runProgram($startDate, $endDate){
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${$startDate}&end_date=${$endDate}&api_key=jbD6aTAL5LapUGaN7FaJFi3NYjsK0GU35ByNsfJX`;
    factory.getAsteroids(url)
    .then((data) => {
      formatter.formatData(data);
    });
    // .then((fUrl)=>{
    //       fyou.getFu(fUrl);
    // });
}



$('#submit').click(()=>{
  $( "#fuDiv" ).empty();
  let $startDate = $('#startDate').val();
  let $endDate = $('#endDate').val(); 
  let startDate = document.getElementById('startDate').value;

    let sDateTime = new Date($startDate).getTime();
    let eDateTime =new Date($endDate).getTime();
    let timeDiff = Math.abs(sDateTime - eDateTime);
    let timeDiffDays =  Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (timeDiffDays > 7){
      window.alert('Please choose a window of less than seven days');
    }else if (sDateTime > eDateTime){
      window.alert('Your end date must come after your start date');
    }
    else {
    runProgram($startDate, $endDate);
  }
});

