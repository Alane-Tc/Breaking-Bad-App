window.addEventListener("load", function () {
    let p1 = document.querySelector("#Walter-White");
    let p2 = document.querySelector("#Jesse-Pinkman");
    let p3 = document.querySelector("#Skyler-White")
    let p4 = document.querySelector("#Walter-White-Jr")
    let p5 = document.querySelector("#Henry-Schrader");

    let walterWhite = () => { window.location = 'Character/characters1.html' }
    let jessePinkman = () => { window.location = 'Character/character2.html' }
    let skyler = () => { window.location = 'Character/character3.html' }
    let walterJr = () => { window.location = 'Character/character4.html' }
    let Henry = () => { window.location = 'Character/character5.html' }

    p1.addEventListener("click", function () { walterWhite(); })
    p2.addEventListener("click", function () { jessePinkman(); })
    p3.addEventListener("click", function () { skyler(); })
    p4.addEventListener("click", function () { walterJr(); })
    p5.addEventListener("click", function () { Henry(); })

})