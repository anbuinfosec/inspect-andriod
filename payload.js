javascript:(function() {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/eruda/2.4.1/eruda.min.js';
    document.body.appendChild(script);
    script.onload = function () { eruda.init(); }
  })();