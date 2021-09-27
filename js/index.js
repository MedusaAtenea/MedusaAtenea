let allData = {
    sliderKnowledges: [
        {
            principalColor: "rgb(248, 81, 73)",
            secundaryColor: "rgb(202, 58, 51)",
            title: "Lectura Tarot",
            content: "La lectura del tarot se enmarca en la creencia de que las cartas pueden ser usadas para comprender situaciones actuales y futuras de la persona consultante."
        },
        {
            principalColor: "green",
            secundaryColor: "rgb(5, 104, 5)",
            title: "Carta Astral",
            content: "La carta astral, también llamada carta natal, mapa natal, radix, o natividad es un diagrama usado por los astrólogos que representa, desde una perspectiva geocéntrica, las posiciones planetarias..."
        },
        {
            principalColor: "rgb(233, 182, 16)",
            secundaryColor: "rgb(200, 155, 5)",
            title: "Amarre",
            content: "Un amarre de amor es un tipo de conjuro que según algunas tradiciones mágicas y folclóricas es capaz de generar en la persona un amor hacia la persona que recibió el ritual, sentimientos de amor hacia la persona que lo realiza."
        },
    ],
    counterForSliderOfKnowledges: 0
}

let events = {
    changePositionOfSliderOfKnowledges: (num) => {
        let elements = [...document.querySelectorAll(".container-slider-knowledges .second-container")]

        console.log("index: " + allData.counterForSliderOfKnowledges);

        let indexOfActualElement = allData.counterForSliderOfKnowledges;

        elements[indexOfActualElement].classList.toggle("first");

        allData.counterForSliderOfKnowledges += num;

        let indexOfNewElement = allData.counterForSliderOfKnowledges;

        if (allData.counterForSliderOfKnowledges < 0) {
            //We go to the last element
            indexOfNewElement = elements.length - 1;
            allData.counterForSliderOfKnowledges = elements.length - 1;
        }
        else if (allData.counterForSliderOfKnowledges == elements.length) {
            //We go to the first element
            indexOfNewElement = 0;
            allData.counterForSliderOfKnowledges = 0;
        }

        elements[indexOfNewElement].classList.toggle("first");
    }
}


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

    


    /*
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

    */
})

window.addEventListener("load", () => {
    let previousButtons = [...document.querySelectorAll(".container-slider-knowledges .second-container .menu .buttons .button-slider.previous")]
    let nextButtons = [...document.querySelectorAll(".container-slider-knowledges .second-container .menu .buttons .button-slider.next")]

    previousButtons.forEach(element => {
        element.addEventListener("click", () => {
            events.changePositionOfSliderOfKnowledges(-1)
        })
    })

    nextButtons.forEach(element => {
        element.addEventListener("click", () => {
            events.changePositionOfSliderOfKnowledges(1)
        })
    })
})