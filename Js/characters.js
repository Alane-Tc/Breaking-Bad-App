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
            console.log(character1(), character2(), character3(), character4(),
                character5(), character6(), character7(), character8(), character9())
        });


    let span = () => { document.querySelector(".load").style.display = "none"; }

    let character1 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-1")
                imgC.src = character[0].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter1.appendChild(imgC);
                let h1 = document.querySelector('#h1');
                h1.innerHTML = `${character[0].name}`
                divCard1.appendChild(h1)
                span()
            })
    }

    let character2 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-2")
                imgC.src = character[1].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter2.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[1].name}`
                divCard2.appendChild(h1)
            })
    }

    let character3 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-3")
                imgC.src = character[2].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter3.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[2].name}`
                divCard3.appendChild(h1)
            })
    }

    let character4 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-4")
                imgC.src = character[3].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter4.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[3].name}`
                divCard4.appendChild(h1)
            })
    }

    let character5 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-5")
                imgC.src = character[4].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter5.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[4].name}`
                divCard5.appendChild(h1)
            })
    }

    let character6 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-6")
                imgC.src = character[5].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter6.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[5].name}`
                divCard6.appendChild(h1)
            })
    }

    let character7 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-7")
                imgC.src = character[6].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter7.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[6].name}`
                divCard7.appendChild(h1)
            })
    }

    let character8 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-8")
                imgC.src = character[7].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter8.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[7].name}`
                divCard8.appendChild(h1)
            })
    }

    let character9 = () => {
        linkCharacter()
            .then(data => data.json())
            .then(character => {
                let imgC = document.querySelector("#img-characters-9")
                imgC.src = character[8].img;
                imgC.width = "200"
                imgC.height = "200"
                divCharacter9.appendChild(imgC);
                let h1 = document.createElement('h2');
                h1.innerHTML = `${character[8].name}`
                divCard9.appendChild(h1)
            })
    }

});