const time = document.getElementById("clock");
const dateElem = document.getElementById("date");
const updateTime = () => {
  let now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12;
  // Date
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayOfWeek = weekdays[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

 time.innerHTML = `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

 dateElem.innerHTML = `${dayOfWeek.slice(0, 3)} ${date} ${month.slice(0, 3)} ${year}`;
}
setInterval(updateTime, 1000);
updateTime();