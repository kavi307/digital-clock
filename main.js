// alert("Jai Sree krishna");



// function updateClock() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
//     var timeString = hours.toString()+ ':' + minutes.toString()+ ':' + seconds.toString();
//     var date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


//     minutes = (minutes < 10 ? "0" : "") + minutes;
//   seconds = (seconds < 10 ? "0" : "") + seconds;
    

//   var meridiem = (hours < 12) ? "AM" : "PM";
//   hours = (hours > 12) ? hours - 12 : hours;
//   hours = (hours == 0) ? 12 : hours;

//   var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

//   document.getElementById('clock').textContent = timeString;
//   }

//   setInterval(updateClock, 1000);

function updateClock() {
    
  
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.getDate();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    var meridiem = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;
    
  document.getElementById('day').value = day;
  document.getElementById('hours').value = hours;
  document.getElementById('minutes').value = minutes;
  document.getElementById('meridiem').textContent = meridiem;
  document.getElementById('seconds').value = seconds;
  document.getElementById('date').value = date;
  document.getElementById('month').value = month;
  document.getElementById('year').value = year;
 


}
  
  setInterval(updateClock, 1000);
  