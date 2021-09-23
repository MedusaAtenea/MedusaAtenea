window.addEventListener("scroll", () => {
    // let grass_layer_0 = document.getElementById();
    let grass_layer_0 = document.getElementById("grass__layer--0");
    let grass_element = document.getElementById("grass");
    let scrollY = window.scrollY;
    let sizeOfGrass = 1000;
    let amountOfPx = 1.5;

    let percentageToMove = 5;

    let incrementInPercentage = 20;
    let initial = 10;

    


    
    if (grass_element.getBoundingClientRect().top <= sizeOfGrass && grass_element.getBoundingClientRect().bottom > 0) {
        let seenPixels = sizeOfGrass - grass_element.getBoundingClientRect().top;
        
        //A partir de 480px se va a parallax
        if (seenPixels >= 480) {
            let differential = (seenPixels - 480) / ((sizeOfGrass * 2) - 480); // 0 -> 1
            let percentage = (initial - (differential * incrementInPercentage)) + "%";

            grass_layer_0.style.top = percentage;
            console.log(percentage);
        }

        
        
        //let percentage = "-" + (differential * percentageToMove) + "%";

        //
        //console.log(percentage);
    }

    
})