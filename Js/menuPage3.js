window.addEventListener("load", function () {
    let p10 = document.querySelector("#charB1")
    let p11 = document.querySelector("#charB2")
    let p12 = document.querySelector("#charB3")
    let p13 = document.querySelector("#charB4")
    let p14 = document.querySelector("#charB5")
    let p15 = document.querySelector("#charB6")
    let p16 = document.querySelector("#charB7")
    let p17 = document.querySelector("#charB8")
    let p18 = document.querySelector("#charB9")

    let Hector = () => { window.location = 'Character/character19.html' }
    let Domingo = () => { window.location = 'Character/character20.html' }
    let Tuco = () => { window.location = 'Character/character21.html' }
    let Marco = () => { window.location = 'Character/character22.html' }
    let Lydia = () => { window.location = 'Character/character23.html' }
    let Todd = () => { window.location = 'Character/character24.html' }
    let Jane = () => { window.location = 'Character/character25.html' }
    let Skinny = () => { window.location = 'Character/character26.html' }
    let Brandon = () => { window.location = 'Character/character27.html' }

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