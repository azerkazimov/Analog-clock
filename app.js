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
