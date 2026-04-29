/* ============ Preloader ============ */
(function () {
  var preloader = document.getElementById("preloader");
  var flap = document.getElementById("flap");
  var seal = document.getElementById("seal");
  var letter = document.getElementById("letter");



  setTimeout(function () {
    flap.classList.add("opened");
    seal.classList.add("opened");
    letter.classList.add("opened");
  }, 900);
  setTimeout(function () { preloader.classList.add("hide"); }, 3000);
  setTimeout(function () { if (preloader.parentNode) preloader.parentNode.removeChild(preloader); }, 3600);
})();


/* ============ Calendar (June 2026) ============ */
(function () {
  var cal = document.getElementById("calendar");
  var html = '<div class="cal-title">June 2026</div><div class="cal-grid">';
  var weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  for (var i = 0; i < 7; i++) html += '<div class="cal-weekday">' + weekdays[i] + '</div>';
  var startOffset = 1; // Jun 1, 2026 = Monday (Sun=0)
  for (var s = 0; s < startOffset; s++) html += '<div class="cal-cell"></div>';
  for (var d = 1; d <= 30; d++) {
    if (d === 4) html += '<div class="cal-cell highlight"><span>4</span></div>';
    else html += '<div class="cal-cell"><span>' + d + '</span></div>';
  }
  html += '</div>';
  cal.innerHTML = html;
})();

/* ============ Countdown ============ */
(function () {
  var target = new Date("2026-06-04T17:00:00").getTime();
  var node = document.getElementById("countdown");

  function tick() {
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff / 3600000) % 24);
    var m = Math.floor((diff / 60000) % 60);
    var s = Math.floor((diff / 1000) % 60);
    var items = [
      { v: d, l: "days" },
      { v: h, l: "hours" },
      { v: m, l: "minutes" },
      { v: s, l: "seconds" }
    ];
    var html = "";
    for (var i = 0; i < items.length; i++) {
      var v = String(items[i].v).padStart(2, "0");
      html += '<div class="cd-cell"><div class="cd-num">' + v + '</div><div class="cd-lbl">' + items[i].l + '</div></div>';
    }
    node.innerHTML = html;
  }
  tick();
  setInterval(tick, 1000);
})();

/* ============ Toast ============ */
function showToast(message) {
  var t = document.getElementById("toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(function () { t.classList.remove("show"); }, 3500);
}

/* ============ RSVP ============ */
document.getElementById("rsvp-btn").addEventListener("click", function () {
  showToast("Yay! We can't wait to see you 💖");
});
