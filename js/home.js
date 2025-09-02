const quote = document.getElementById("quote");

fetch('https://dummyjson.com/quotes/random')
    .then(res => {
        if (!res.ok) {
            throw new Error('Network Response: ' + res.status);
        }
        return res.json();
    })
    .then(data => {
        quote.innerHTML = `<p class="centered reduced-padding">"${data.quote}" - ${data.author}</p>`;
    })
    .catch(err => {
        console.log(err);
        quote.innerHTML = `<p class="centered reduced-padding">"Creativity is just suppressed imitation" - Nathaniel Cruz</p>`;
    });


var slideIndex = 1;
let maxSlide = 2;
setInterval(carousel, 4000)

function carousel() {
    var i;
    var x = document.getElementById("slideshow");

    slideIndex++;
    if (slideIndex > maxSlide) {
        slideIndex = 1;
    }

    x.innerHTML = `<img class="slideshow-content" src="assets/homeslideshow/${slideIndex}.png" style="width:100%" alt="Slideshow of HIP Information">`;}

carousel();