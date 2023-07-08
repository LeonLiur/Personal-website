document.addEventListener("DOMContentLoaded", function () {
    var tooltips = document.getElementsByClassName('progress_bar_tooltip');
    print(tooltips);
    window.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        for(let i = 0; i < tooltips.length; i++){
            tooltips[i].style.left = (x - 20) + 'px';
        }
    });
});