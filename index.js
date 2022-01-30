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
    var element = document.querySelector(".menu");
    var top = element.getBoundingClientRect().top + scrollY();
    console.log("top=", top);
    // Detecter la position du menu par rapport à l'écran : element.getBoundingClientRect()
    console.log("pos menu=", element.getBoundingClientRect().top);

    var onScroll = function () {
        var hasScrollClass = element.classList.contains("fixed");
        // if (element.getBoundingClientRect().top <= 0) {
        if (scrollY() > top && !hasScrollClass) {
            console.log("Add");
            // Ajouter une class fixed
            element.classList.add("fixed");
        } else if (scrollY() <= top && hasScrollClass) {
            console.log("Remove");
            // Supprimer la class fixed
            element.classList.remove("fixed");
        }
    };
    window.addEventListener("scroll", onScroll);
})();
