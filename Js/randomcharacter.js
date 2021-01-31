window.addEventListener("load", function () {
    let divImgCharacter = document.querySelector("#img-character");
    let name = document.querySelector("#h3-character")
    let bntNext = document.querySelector("#btn-change")
    let img = document.querySelector('#imgRandom')
    let h3 = document.querySelector('#name-Character')
    let link = () =>{return fetch('https://breakingbadapi.com/api/character/random') }

    link()
        .then(data => data.json())
        .then(randomCharacter => {
            //img
            img.src = randomCharacter[0].img
            divImgCharacter.appendChild(img)
            //name
            h3.innerHTML = `<b>Nombre</b>: ${randomCharacter[0].name}`
            name.appendChild(h3)
            span();
        })

    let random = () => {
        link()
        .then(data => data.json())
        .then(randomCharacter => {
            //img
            img.src = randomCharacter[0].img
            divImgCharacter.appendChild(img)
            //name
            h3.innerHTML = `<b>Nombre</b>: ${randomCharacter[0].name}`
            name.appendChild(h3)
            span();
        })
    }

    let span = () => { document.querySelector(".load").style.display = "none"; }

    bntNext.addEventListener("click", function () {
        random();
    })
})