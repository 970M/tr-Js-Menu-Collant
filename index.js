(function () {
    // Quantité de scroll en pixel
    // https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

        return supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
    };

    /* Lorsque que l'on scroll :
        Si le menu sort de l'ecran alors il deviendra fixe
    */

    // Calculs initials
    var element = document.querySelector(".menu");
    var rect = element.getBoundingClientRect();
    var top = rect.top + scrollY();

    // Creer un élément fake
    var fake = document.createElement("div");
    fake.style.with = rect.width + "px";
    fake.style.height = rect.heigth + "px";

    var onScroll = function () {
        var hasScrollClass = element.classList.contains("fixed");
        // if (element.getBoundingClientRect().top <= 0) {
        if (scrollY() > top && !hasScrollClass) {
            console.log("Add");

            // Ajouter une class fixed
            element.classList.add("fixed");
            element.style.width = rect.width + "px";
            // Recuperer l'élément parent et lui ajout fake avant element
            element.parentNode.insertBefore(fake, element);
        } else if (scrollY() <= top && hasScrollClass) {
            console.log("Remove");
            // Supprimer la class fixed
            element.classList.remove("fixed");
            element.parentNode.removeChild(fake);
        }
    };
    window.addEventListener("scroll", onScroll);
})();
