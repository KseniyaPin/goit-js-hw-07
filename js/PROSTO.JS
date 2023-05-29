let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  // Do something…
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e); // Some usefull information
});

// with jQuery nearly the same
let gallery = $('.gallery a').simpleLightbox();
gallery.on('show.simplelightbox', function () {
  // Do something…
});
