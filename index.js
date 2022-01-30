(function () {
    /* Lorsque que l'on scroll :
        Si le menu sort de l'ecran alors il deviendra fixe
    */

    var onScroll = function () {
        var element = document.querySelector(".menu");

        // Detecter la position du menu par rapport à l'écran : element.getBoundingClientRect()
        console.log(element.getBoundingClientRect().top);

        if (element.getBoundingClientRect().top < 0) {
            
            /* 
                element.style.position = "fixed";
                element.style.top = "0px";
            */

            // --- Meilleur solution
            // Ajouter une class fixed
            element.classList.add("fixed");
            
        } else {

            // Supprimer la class fixed
            element.classList.remove("fixed");

        }
    };
    window.addEventListener("scroll", onScroll);
})();