window.addEventListener("scroll", () => {
    // let grass_layer_0 = document.getElementById();
    let grass_layer_0 = document.getElementById("grass__layer--0");
    let grass_element = document.getElementById(); aqui me quede
    let scrollY = window.scrollY;
    let sizeOfGrass = 1000;
    let amountOfPx = 1.5;

    let percentageToMove = 5;

    let incrementInPercentage = 15;
    let initial = 10;
    

    //grass_layer_0.getBoundingClientRect().top

    //console.log(grass_layer_0.getBoundingClientRect().bottom)

    //grass_layer_0

    if (grass_layer_0.getBoundingClientRect().top <= sizeOfGrass && grass_layer_0.getBoundingClientRect().bottom > 0) {
        //console.log("Estás visualizando el componente, y su efecto parallax")

        let seenPixels = sizeOfGrass - grass_layer_0.getBoundingClientRect().top;
        console.log(seenPixels);

        let differential = seenPixels / (sizeOfGrass * 2); // 0 -> 1
        let percentage = (initial - (differential * incrementInPercentage)) + "%";
        //let percentage = "-" + (differential * percentageToMove) + "%";

        //grass_layer_0.style.top = percentage;
        //console.log(percentage);
    }

    //console.log("Numero: " + scrollY + " Elemento: " + grass_layer_0.getBoundingClientRect().top)
})