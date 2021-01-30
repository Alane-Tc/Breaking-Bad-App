window.addEventListener("load", function () {
    let p1 = document.querySelector("#Walter-White");
    let p2 = document.querySelector("#Jesse-Pinkman");
    let p3 = document.querySelector("#Skyler-White")
    let p4 = document.querySelector("#Walter-White-Jr")
    let p5 = document.querySelector("#Henry-Schrader");
    let p6 = document.querySelector("#Marie-Schrader");
    let p7 = document.querySelector("#Mike-Ehrmantraut")
    let p8 = document.querySelector("#Saul-Goodman")
    let p9 = document.querySelector("#Gustavo-Fring")

    let walterWhite = () => { window.location = 'Character/character1.html' }
    let jessePinkman = () => { window.location = 'Character/character2.html' }
    let skyler = () => { window.location = 'Character/character3.html' }
    let walterJr = () => { window.location = 'Character/character4.html' }
    let Henry = () => { window.location = 'Character/character5.html' }
    let Marie = () => { window.location = 'Character/character6.html' }
    let Mike = () => { window.location = 'Character/character7.html' }
    let Saul = () => { window.location = 'Character/character8.html' }
    let Gustavo = () => { window.location = 'Character/character9.html' }

    p1.addEventListener("click", function () { walterWhite(); })
    p2.addEventListener("click", function () { jessePinkman(); })
    p3.addEventListener("click", function () { skyler(); })
    p4.addEventListener("click", function () { walterJr(); })
    p5.addEventListener("click", function () { Henry(); })
    p6.addEventListener("click", function () { Marie(); })
    p7.addEventListener("click", function () { Mike(); })
    p8.addEventListener("click", function () { Saul(); })
    p9.addEventListener("click", function () { Gustavo(); })

})