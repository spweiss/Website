/*window.onscroll = advance() {
    var winheight = $(window).height();
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("s").className = "test";
    } else {
        document.getElementById("s").className = "";
    }
};*/


function amountscrolled(){
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100)
    console.log(pctScrolled + '% scrolled')
}

$(window).on("scroll", function(){
    amountscrolled()
})
