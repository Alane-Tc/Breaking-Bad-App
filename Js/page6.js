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
            console.log(character46(), character47(), character48(), character49(), character50(),
                character51(), character52(), character53(), character54()) 
        });

    let span = () => { document.querySelector(".load").style.display = "none"; }

    let character46 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-1")
                imgC.src = character[45].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter1.appendChild(imgC);
                let h1 = document.querySelector('#h1');
                h1.innerHTML = `${character[45].name}`
                divCard1.appendChild(h1)
                span()
            })
    }

    let character47 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-2")
                imgC.src = character[46].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter2.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[46].name}`
                divCard2.appendChild(h1)
            })
    }

    let character48 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-3")
                imgC.src = character[47].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter3.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[47].name}`
                divCard3.appendChild(h1)
            })
    }

    let character49 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-4")
                imgC.src = character[48].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter4.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[48].name}`
                divCard4.appendChild(h1)
            })
    }

    let character50 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-5")
                imgC.src = character[49].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter5.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[49].name}`
                divCard5.appendChild(h1)
            })
    }

    let character51 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-6")
                imgC.src = character[50].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter6.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[50].name}`
                divCard6.appendChild(h1)
            })
    }

    let character52 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-7")
                imgC.src = character[51].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter7.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[51].name}`
                divCard7.appendChild(h1)
            })
    }

    let character53 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-8")
                imgC.src = character[52].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter8.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[52].name}`
                divCard8.appendChild(h1)
            })
    }

    let character54 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-9")
                imgC.src = character[53].img;
                imgC.width = "300"
                imgC.height = "300"
                divCharacter9.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[53].name}`
                divCard9.appendChild(h1)
            })
    }

});