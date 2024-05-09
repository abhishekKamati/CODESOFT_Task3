function myFunction() {
  let date = new Date();

  let status = "";

  let hour = date.getHours();
  let h = (hour % 12).toString().padStart(2, "0");
  if (hour === 12) h = 12;

  let minute = date.getMinutes();
  let m = minute.toString().padStart(2, "0");

  let second = date.getSeconds();
  let s = second.toString().padStart(2, "0");

  let day = date.getDay();

  if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  } else {
    day = "Sunday";
  }

  if (hour < 12) status = "AM";
  else status = "PM";
  document.querySelector(".time").innerHTML =
    h + " :  " + m + " :  " + s;
  document.querySelector(".status").innerHTML = status;

  document.querySelector(".day").innerHTML = day;
}

setInterval(myFunction, 100);
