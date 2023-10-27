// Just noticed accessing localStorage is banned from codepen, so disabling saving theme to localStorage

// const deg = 6;
// const hour = document.querySelector(".hour");
// const min = document.querySelector(".min");
// const sec = document.querySelector(".sec");

// const setClock = () => {
// 	let day = new Date();
// 	let hh = day.getHours() * 30;
// 	let mm = day.getMinutes() * deg;
// 	let ss = day.getSeconds() * deg;

// 	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
// 	min.style.transform = `rotateZ(${mm}deg)`;
// 	sec.style.transform = `rotateZ(${ss}deg)`;
// };

// // first time
// setClock();
// // Update every 1000 ms
// setInterval(setClock, 1000);

// ===========
// MY SOLUTION
// ===========

function clock() {
  const hour = document.querySelector(".hour");
  const min = document.querySelector(".min");
  const sec = document.querySelector(".sec");
  const deg = 6; //bir saniyenin kecidi 6 dereceye beraberdir (360 / 60 = 6);

  setInterval(() => {
    const day = new Date();
    const hours = day.getHours() * 30; // bir saati almaq ucun 360 / 12 = 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
    min.style.transform = `rotateZ(${minutes}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;
  }, 0);
}
clock();
