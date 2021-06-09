let divTitle = document.querySelector("#div-title");
let divImg = document.querySelector("#img-div");
let divId = document.querySelector("#id-char");
let btnBack = document.querySelector("#bnt-back")

const showCharacter = (NumberCharacter) => {
    fetch('https://breakingbadapi.com/api/characters')
        .then(data => data.json())
        .then(character => {
            let h2 = document.createElement('h2');
            h2.innerHTML = `Nombre: ${character[NumberCharacter].name}`
            divTitle.appendChild(h2)
            //Photo
            let img = document.createElement('img');
            img.src = character[NumberCharacter].img;
            img.width = "300"
            img.height = "300"
            divImg.appendChild(img);
            //Information
            let p = document.createElement('p')
            p.innerHTML = `<b>ID</b>: ${character[NumberCharacter].char_id} <br/> <b>Nacimiento</b>: ${character[NumberCharacter].birthday} <br/> <b>Apodo</b>: ${character[NumberCharacter].nickname}
                <br/> <b>Temporadas</b>: ${character[NumberCharacter].appearance} <br/> <b>Actor</b>: ${character[NumberCharacter].portrayed}`
            divId.appendChild(p)
            span();
        })
}

let span = () => { document.querySelector(".load").style.display = "none"; }
let backWindow = (href) => { window.location = href }