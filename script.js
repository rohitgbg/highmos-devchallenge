document.getElementById('check-in').valueAsDate = new Date();

document.getElementById('check-out').valueAsDate = new Date();

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document.getElementById('top-header').classList.add('top-header-white-bg');
  } else {
    document
      .getElementById('top-header')
      .classList.remove('top-header-white-bg');
  }
};
