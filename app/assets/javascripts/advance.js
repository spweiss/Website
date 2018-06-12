window.onscroll = advance() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("s").className = "test";
    } else {
        document.getElementById("s").className = "";
    }
};
