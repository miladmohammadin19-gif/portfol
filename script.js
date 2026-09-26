const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");


// منوی موبایل
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


// بستن منو بعد از کلیک
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


// حالت تاریک
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }

});


// حفظ حالت انتخاب‌شده
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

// MUSIC PLAYER

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const volume = document.getElementById("volume");

music.volume = 0.5;

musicBtn.addEventListener("click", async () => {

  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "⏸️";
    } catch (error) {
      musicBtn.textContent = "▶️";
    }
  } else {
    music.pause();
    musicBtn.textContent = "▶️";
  }

});

volume.addEventListener("input", () => {
  music.volume = volume.value;
});   