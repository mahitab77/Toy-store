document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.getElementById('preloader');

  if (preloader) {
    preloader.style.display = 'flex'; // Ensure preloader is visible initially

    window.addEventListener('load', function() {
      preloader.style.display = 'none'; // Hide preloader when the page is fully loaded
    });

    // Check if the page is already loaded (in case 'load' event was missed)
    if (document.readyState === 'complete') {
      preloader.style.display = 'none';
    }
  }
});
