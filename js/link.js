window.onload = function () {
  var href = document.location.href;
  document.querySelectorAll('.side-nav a').forEach(function(a) {
    if (href.includes(a.href)) {
      a.className += ' selected';
    }
  });
}
