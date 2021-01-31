window.addEventListener("load", function () {
    let divTitle = document.querySelector("#div-title");
    let divImg = document.querySelector("#img-div");
    let divId = document.querySelector("#id-char");
    let btnBack = document.querySelector("#bnt-back")

    fetch('https://breakingbadapi.com/api/characters')
        .then(data => data.json())
        .then(character1 => {
            let h2 = document.createElement('h2');
            h2.innerHTML = `Nombre: ${character1[12].name}`
            divTitle.appendChild(h2)
            //Photo
            let img = document.createElement('img');
            img.src = character1[12].img;
            img.width = "300"
            img.height = "300"
            divImg.appendChild(img);
            //Information
            let p = document.createElement('p')
            p.innerHTML = `<b>ID</b>: ${character1[12].char_id} <br/> <b>Nacimiento</b>: ${character1[12].birthday} <br/> <b>Apodo</b>: ${character1[12].nickname}
                <br/> <b>Temporadas</b>: ${character1[12].appearance} <br/> <b>Actor</b>: ${character1[12].portrayed}`
            divId.appendChild(p)
            span();
        })
    let span = () => { document.querySelector(".load").style.display = "none"; }
    let backWindow = () => { window.location = "../page2.html" }
    btnBack.addEventListener("click", function () { backWindow(); })
})