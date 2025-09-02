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
