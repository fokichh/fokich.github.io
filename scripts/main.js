(function () {
  var square = document.querySelector('.square-wrapper');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.square');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('square-animation');
        return;
      }

      entrySquare.classList.remove('square-animation');
    });
  });

  observer.observe(square);
})();