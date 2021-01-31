window.addEventListener("load", function () {
    let p10 = document.querySelector("#Hector-Salamanca")
    let p11 = document.querySelector("#Domingo-Molina")
    let p12 = document.querySelector("#Tuco-Salamanca")
    let p13 = document.querySelector("#Marco-Leonel")
    let p14 = document.querySelector("#Lydia")
    let p15 = document.querySelector("#Todd")
    let p16 = document.querySelector("#Jane")
    let p17 = document.querySelector("#Skinny")
    let p18 = document.querySelector("#Brandon")

    let Hector = () => { window.location = 'Character/character10.html' }
    let Domingo = () => { window.location = 'Character/character11.html' }
    let Tuco = () => { window.location = 'Character/character12.html' }
    let Marco = () => { window.location = 'Character/character13.html' }
    let Lydia = () => { window.location = 'Character/character14.html' }
    let Todd = () => { window.location = 'Character/character15.html' }
    let Jane = () => { window.location = 'Character/character16.html' }
    let Skinny = () => { window.location = 'Character/character17.html' }
    let Brandon = () => { window.location = 'Character/character18.html' }

    p10.addEventListener("click", function () { Hector(); })
    p11.addEventListener("click", function () { Domingo(); })
    p12.addEventListener("click", function () { Tuco(); })
    p13.addEventListener("click", function () { Marco(); })
    p14.addEventListener("click", function () { Lydia(); })
    p15.addEventListener("click", function () { Todd(); })
    p16.addEventListener("click", function () { Jane(); })
    p17.addEventListener("click", function () { Skinny(); })
    p18.addEventListener("click", function () { Brandon(); })

})