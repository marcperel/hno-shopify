const next2PM = new Date();
const offsetHours = next2PM.getTimezoneOffset() / 60;
console.log(`current hours at 0 offset (UTC) = ${next2PM.getHours() + offsetHours}h`);
next2PM.setHours(14 + offsetHours, 0, 0, 0); // UTC
if (new Date() >= next2PM) next2PM.setDate(next2PM.getDate() + 1); // doesn't work for the 30/31st (write a func to calculate the next day)
// Update the count down every 1 second
const x = setInterval(function () {
  const now = new Date();
  const difference = next2PM.getTime() - now.getTime();
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // add/remove hours based on timezone
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  console.log(`${hours}:${minutes}:${seconds}`);
  if (difference < 0) {
    console.log('Time finished');
    clearInterval(x);
    // if someone has had the timer opened for more than a day, probably restart the next2PM calculation and this timeout
  }
}, 1000);
