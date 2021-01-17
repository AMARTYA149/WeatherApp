const getCurrentDay = () => {
  let weekDay = new Array(7);
  weekDay[0] = "Sunday";
  weekDay[1] = "Monday";
  weekDay[2] = "Tuesday";
  weekDay[3] = "Wednesday";
  weekDay[4] = "Thursday";
  weekDay[5] = "Friday";
  weekDay[6] = "Saturday";

  let month = new Array(12);
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  let currentTime = new Date();
  let days = weekDay[currentTime.getDay()];
  let months = month[currentTime.getMonth()];
  let date = currentTime.getDate();
  const today_date = document.getElementById("today_date");
  const day = document.getElementById("day");
  today_date.innerText = `${date} ${months}`;
  day.innerText = days;
};
getCurrentDay();
