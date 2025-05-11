const btnPage1 = document.getElementById('btnPage1');
const btnPage2 = document.getElementById('btnPage2');

if (btnPage1 && btnPage2) {
  btnPage1.addEventListener('click', function () {
    showPage('page1');
  });

  btnPage2.addEventListener('click', function () {
    showPage('page2');
  });
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });
  const pageToShow = document.getElementById(pageId);
  if (pageToShow) {
    pageToShow.classList.add('active');
  }
}

// const images = ["./img/carusel1.jpg", "./img/carusel2.png", "./img/carusel3.png"];
// let index = 0;
// const imgElement = document.getElementById("carouselImg");

// setInterval(() => {
// 	index = (index + 1) % images.length;
// 	imgElement.style.opacity = 0;
// 	setTimeout(() => {
// 		imgElement.src = images[index];
// 		imgElement.style.opacity = 1;
// 	}, 300);
// }, 4000);
