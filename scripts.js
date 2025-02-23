window.addEventListener('load', function() {
    console.log("Trang đã tải xong!");
    addTabindex();
});

function addTabindex() {
    const figures = document.querySelectorAll('figure');
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute('tabindex', '0');

        figures[i].addEventListener('focus', function() {
            this.style.border = '2px solid blue';
        });

        figures[i].addEventListener('blur', function() {
            this.style.border = '2px solid #ccc';
        });

        figures[i].addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        figures[i].addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}
