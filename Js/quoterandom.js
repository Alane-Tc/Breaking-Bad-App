window.addEventListener("load", function () {
    let divquoter = document.querySelector("#quote-random");
    let bntNext = document.querySelector("#btn-change")
    let p = document.querySelector("#quote")

    let link = () => { return fetch('https://breakingbadapi.com/api/quote/random') }
    link()
        .then(data => data.json())
        .then(quote => {
            p.innerHTML = `<b>Frase</b>: ${quote[0].quote} <br/> <b>Autor</b>: ${quote[0].author}`
            divquoter.appendChild(p);
            span();
        })

    let random = () => {
        link()
            .then(data => data.json())
            .then(quote => {
                p.innerHTML = `<b>Frase</b>: ${quote[0].quote} <br/> <b>Autor</b>: ${quote[0].author}`
                divquoter.appendChild(p);
                span();
            })
    }

    let span = () => { document.querySelector(".load").style.display = "none"; }

    bntNext.addEventListener("click", function () { random(); })

})