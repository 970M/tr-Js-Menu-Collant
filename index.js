(function () {
    // Quantité de scroll en pixel
    // https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY
    // var scrollY = function () {
    //     var supportPageOffset = window.pageXOffset !== undefined;
    //     var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

    //     return supportPageOffset
    //         ? window.pageYOffset
    //         : isCSS1Compat
    //         ? document.documentElement.scrollTop
    //         : document.body.scrollTop;
    // };

    var scrollY = function () {
        return window.scrollY;
    };

    // --- Variables
    // Calculs initials
    var element = document.querySelector(".menu");
    var rect = element.getBoundingClientRect();
    var top = rect.top + scrollY();

    // Creer un élément fake
    var fake = document.createElement("div");
    fake.style.with = rect.width + "px";
    fake.style.height = rect.height + "px";

    // --- Fonctions
    var onScroll = function () {
        var hasScrollClass = element.classList.contains("fixed");

        if (scrollY() > top && !hasScrollClass) {
            // Ajouter une class fixed
            console.log("Add");
            element.classList.add("fixed");
            element.style.width = rect.width + "px";

            // Recuperer l'élément parent et lui ajout fake avant element
            element.parentNode.insertBefore(fake, element);
        } else if (scrollY() <= top && hasScrollClass) {
            // Supprimer la class fixed
            console.log("Remove");
            element.classList.remove("fixed");
            element.parentNode.removeChild(fake);
        }
    };

    var onResize = function () {
        // Défaire le style
        element.style.width = "auto";
        element.classList.remove("fixed");
        fake.style.display = "none";
        // Recalculer les positions
        rect = element.getBoundingClientRect();
        top = rect.top + scrollY();
        // Remettre le style
        fake.style.with = rect.width + "px";
        fake.style.height = rect.height + "px";
        onScroll();
    };
    // --- Listener
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
})();
