$(document).ready(function() {
    $('.card-container').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    const cards = document.querySelectorAll('.card');
    const namep = document.getElementById('pname');
    const titlep = document.getElementById('ptitle');
    const emailp = document.getElementById('pemail');
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const name = this.getAttribute('dname');
            const title = this.getAttribute('dtitle');
            const email = this.getAttribute('demail');
            namep.textContent = name;
            titlep.textContent = title;
            emailp.textContent = email;
        });
    });
});