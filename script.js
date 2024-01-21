setInterval(() => {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  hdeg = 30 * h + m / 2;
  mdeg = 6 * m + 0.1 * s;
  sdeg = 6 * s;
  // console.log(hdeg, mdeg, sdeg);
  document.getElementById("hour").style.transform = `rotate(${hdeg}deg)`;
  document.getElementById("min").style.transform = `rotate(${mdeg}deg)`;
  document.getElementById("second").style.transform = `rotate(${sdeg}deg)`;
}, 1000);
