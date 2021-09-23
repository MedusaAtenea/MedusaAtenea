window.addEventListener("scroll", () => {
    // let grass_layer_0 = document.getElementById();
    let grass_layer_0 = document.getElementById("grass__layer--0");
    let scrollY = window.scrollY;
    console.log("Numero: " + scrollY + " Elemento: " + grass_layer_0.getBoundingClientRect().top)
})