window.addEventListener("load", function () {
    let divCharacter1 = document.querySelector("#div-Img-characters-1")
    let divCard1 = document.querySelector("#character1")
    let divCharacter2 = document.querySelector("#div-Img-characters-2")
    let divCard2 = document.querySelector("#character2")
    let divCharacter3 = document.querySelector("#div-Img-characters-3")
    let divCard3 = document.querySelector("#character3")
    let divCharacter4 = document.querySelector("#div-Img-characters-4")
    let divCard4 = document.querySelector("#character4")
    let divCharacter5 = document.querySelector("#div-Img-characters-5")
    let divCard5 = document.querySelector("#character5")
    let divCharacter6 = document.querySelector("#div-Img-characters-6")
    let divCard6 = document.querySelector("#character6")
    let divCharacter7 = document.querySelector("#div-Img-characters-7")
    let divCard7 = document.querySelector("#character7")
    let divCharacter8 = document.querySelector("#div-Img-characters-8")
    let divCard8 = document.querySelector("#character8")
    let divCharacter9 = document.querySelector("#div-Img-characters-9")
    let divCard9 = document.querySelector("#character9")
    let linkCharacter = () => { return fetch('https://breakingbadapi.com/api/characters') }

    linkCharacter()
        .then(data => data.json())
        .then(json => {
            console.log(character28(), character29(), character30(), character31(), character32(),
                character33(), character34(), character35(), character36())
        });

    let span = () => { document.querySelector(".load").style.display = "none"; }

    let character28 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-1")
                imgC.src = character[27].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter1.appendChild(imgC);
                let h1 = document.querySelector('#h1');
                h1.innerHTML = `${character[27].name}`
                divCard1.appendChild(h1)
                span()
            })
    }

    let character29 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-2")
                imgC.src = character[28].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter2.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[28].name}`
                divCard2.appendChild(h1)
            })
    }

    let character30 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-3")
                imgC.src = character[29].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter3.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[29].name}`
                divCard3.appendChild(h1)
            })
    }

    let character31 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-4")
                imgC.src = character[30].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter4.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[30].name}`
                divCard4.appendChild(h1)
            })
    }

    let character32 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-5")
                imgC.src = character[31].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter5.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[31].name}`
                divCard5.appendChild(h1)
            })
    }

    let character33 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-6")
                imgC.src = character[32].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter6.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[32].name}`
                divCard6.appendChild(h1)
            })
    }

    let character34 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-7")
                imgC.src = character[33].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter7.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[33].name}`
                divCard7.appendChild(h1)
            })
    }

    let character35 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-8")
                imgC.src = character[34].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter8.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[34].name}`
                divCard8.appendChild(h1)
            })
    }

    let character36 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-9")
                imgC.src = character[35].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter9.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[35].name}`
                divCard9.appendChild(h1)
            })
    }

});