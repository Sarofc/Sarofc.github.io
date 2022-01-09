// 气泡上升
// 蝴蝶主题3.1以上调用气泡方法，由于开启了pjax， 放在主题配置文件中请求页面时只会加载一次，需要放到 \layout\includes\additional-js.pug//.js-pjax下一行。
function qipao() {
  $("#page-header").circleMagic({
    radius: 10,
    density: 0.2,
    color: "rgba(255,255,255,.4)",
    clearOffset: 0.99,
  });
}
!(function (p) {
  p.fn.circleMagic = function (t) {
    var o,
      a,
      n,
      r,
      e = !0,
      i = [],
      d = p.extend(
        {
          color: "rgba(255,0,0,.5)",
          radius: 10,
          density: 0.3,
          clearOffset: 0.2,
        },
        t
      ),
      l = this[0];

    function c() {
      e = !(document.body.scrollTop > a);
    }

    function s() {
      (o = l.clientWidth),
        (a = l.clientHeight),
        (l.height = a + "px"),
        (n.width = o),
        (n.height = a);
    }

    function h() {
      if (e) for (var t in (r.clearRect(0, 0, o, a), i)) i[t].draw();
      requestAnimationFrame(h);
    }

    function f() {
      var t = this;

      function e() {
        (t.pos.x = Math.random() * o),
          (t.pos.y = a + 100 * Math.random()),
          (t.alpha = 0.1 + Math.random() * d.clearOffset),
          (t.scale = 0.1 + 0.3 * Math.random()),
          (t.speed = Math.random()),
          "random" === d.color
            ? (t.color =
                "rgba(" +
                Math.floor(255 * Math.random()) +
                ", " +
                Math.floor(0 * Math.random()) +
                ", " +
                Math.floor(0 * Math.random()) +
                ", " +
                Math.random().toPrecision(2) +
                ")")
            : (t.color = d.color);
      }
      (t.pos = {}),
        e(),
        (this.draw = function () {
          t.alpha 