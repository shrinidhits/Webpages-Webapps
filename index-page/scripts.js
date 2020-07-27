const selectElement=(s)=> document.querySelector(s);
selectElement('.open').addEventListener('click',()=>{
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click',()=>{
    selectElement('.nav-list').classList.remove('active');
});



$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 200) {
        $(window).off("scroll", startCounter);
        $('.num').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2750,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}

