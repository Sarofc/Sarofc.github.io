!(function () {
    function update() {
        var now = new Date();
        var grt = new Date("2021-02-19");  /** 此处是计时的起始时间 **/
        now.setTime(now.getTime() + 250);
        days = (now - grt) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length === 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length === 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length === 1) {
            snum = "0" + snum;
        }

        var grt_year = grt.getFullYear();
        var now_year = now.getFullYear();
        document.getElementById("copyright").innerHTML = "©" + ((now_year - grt_year < 1) ? now_year : (grt_year + "-" + now_year))
            + "&nbspSarofc"
            + "&nbsp|&nbspPowerd by&nbsp"
            + "<a href="\"https://hexo.io\"" target="\"_blank\"" rel="\"nofollow" noopener\"><span><u>Hexo</u></span></a>"
            + "&nbsp\&&nbsp"
            + "<a href="\"https://github.com/fluid-dev/hexo-theme-fluid\"" target="\"_blank\"" rel="\"nofollow" noopener\"><span><u>Fluid</u></span></a>";
        document.getElementById("timeDate").innerHTML = "在逝去的&nbsp" + dnum + "&nbsp天里";
        // document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
    setInterval(update, 1000);
})();