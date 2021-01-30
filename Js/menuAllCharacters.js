window.addEventListener("load", function () {
    let p1 = document.querySelector("#Walter-White");

    let walterWhite = () => { window.location = 'Character/characters1.html' }

    p1.addEventListener("click", function () { walterWhite(); })

})