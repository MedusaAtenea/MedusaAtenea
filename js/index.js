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
    counterForSliderOfKnowledges: 0,
    prices: [
        {
            colors: {
                title: "linear-gradient(90deg, rgb(21, 23, 122) 0%, rgb(38, 41, 224) 100%)",
                price: "linear-gradient(90deg, rgb(29, 32, 167) 0%, rgb(43, 46, 255) 100%)",
                buttonChoose: {
                    border: "rgb(43, 46, 255)",
                    color: "rgb(43, 46, 255)"
                }
            },
            title: "Lectura Tarot",
            price: "$300",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #802637 0%, #FF002F 100%)",
                price: "linear-gradient(90deg, #7D001D 0%, rgb(241 13 66) 100%)",
                buttonChoose: {
                    border: "rgb(241 13 66)",
                    color: "rgb(241 13 66)"
                }
            },
            title: "Carta Astral",
            price: "$250",
            specs: {
                title: "Especificaciones:",
                content: "",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, rgb(18, 108, 23) 0%, rgb(29, 187, 37) 100%)",
                price: "linear-gradient(90deg, rgb(35, 143, 41) 0%, rgb(32, 225, 42) 100%)",
                buttonChoose: {
                    border: "rgb(18, 108, 23)",
                    color: "rgb(18, 108, 23)"
                }
            },
            title: "Lectura Tarot (Pregunta si y no. Solo 5 preg.)",
            price: "$50",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #4F0C8A 0%, #8815ED 100%)",
                price: "linear-gradient(90deg, #7813D1 0%, #9117FC 100%)",
                buttonChoose: {
                    border: "#4F0C8A",
                    color: "#4F0C8A"
                }
            },
            title: "Amarre",
            price: "$2000",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, rgb(159 88 23) 0%, rgb(255 123 0) 100%)",
                price: "linear-gradient(90deg, #C76612 0%, #FA8117 100%)",
                buttonChoose: {
                    border: "#FA8117",
                    color: "#FA8117"
                }
            },
            title: "Abre camino",
            price: "$1500",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #990c86 0%, #ff00db 100%)",
                price: "linear-gradient(90deg, rgb(181 0 155) 0%, rgb(255 54 227) 100%)",
                buttonChoose: {
                    border: "rgb(181 0 155)",
                    color: "rgb(181 0 155)"
                }
            },
            title: "Limpia",
            price: "$1500",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #154f89 0%, #3499ff 100%)",
                price: "linear-gradient(90deg, rgb(16 88 163) 0%, rgb(54 154 255) 100%)",
                buttonChoose: {
                    border: "#3499ff",
                    color: "#3499ff"
                }
            },
            title: "Retorno",
            price: "$2500",
            specs: {
                title: "Especificaciones:",
                content: "...",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #00663d 0%, #1acd85 100%)",
                price: "linear-gradient(90deg, #115439 0%, #27d58f 100%)",
                buttonChoose: {
                    border: "#27d58f",
                    color: "#27d58f"
                }
            },
            title: "Destrucciones",
            price: "$...",
            specs: {
                title: "Especificaciones:",
                content: "El costo varía según el caso.",
                choose: "Comprar"
            }
        },
        {
            colors: {
                title: "linear-gradient(90deg, #7a750b 0%, #e5dc29 100%)",
                price: "linear-gradient(90deg, rgb(143 137 25) 0%, rgb(247 238 66) 100%)",
                buttonChoose: {
                    border: "rgb(143 137 25)",
                    color: "rgb(143 137 25)"
                }
            },
            title: "Cursos",
            price: "$...",
            specs: {
                title: "Especificaciones:",
                content: "El costo puede varíar según el curso. Este plan está únicamente para informar que estoy en la capacidad de educar. Cursos disponibles: tarot, magia de velas, sigilos, magia sexual, etc.",
                choose: "Comprar"
            }
        }
    ],
    comments: [
        {
            profilePhotoUrl: "./images/profile.jpg",
            starsOfFive: 5,
            comment: "Increíble haber conocido a Medusa Atenea. Me resolvió muchas dudas que tenía.",
            infoOfUser: "Alonso Ramírez Páez. Desde facebook."
        },
        {
            profilePhotoUrl: "",
            starsOfFive: 2,
            comment: "No me agrado completamente sus servicios, pero aún así, cumple.",
            infoOfUser: "Angel Gabriel Hernández Hernández. Desde Whatsapp."
        },
        {
            profilePhotoUrl: "",
            starsOfFive: 0,
            comment: "Pesimo servicio",
            infoOfUser: "Abraham Ramírez Páez. Desde Instagram."
        }
    ]
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
    },
    printPrices: () => {
        let contenidoHijo = ``;

        for (let i = 0; i < allData.prices.length; i++) {
            contenidoHijo += `
                <div class="swiper-slide">
                    <div class="price-item">
                        <div class="title">
                            <span>${allData.prices[i].title}</span>
                            <div class="divisor">
                            </div>
                        </div>
                        <div class="price">
                            <span>${allData.prices[i].price}</span>
                        </div>
                        <div class="specs">
                            <span class="title">${allData.prices[i].specs.title}</span>
                            <span class="content">${allData.prices[i].specs.content}</span>
                            <div class="container-choose">
                                <button>${allData.prices[i].specs.choose}</button>
                            </div>
                        </div>
                        <div class="divisor-bottom">
                        </div>
                    </div>
                </div>
            `
        }

        let contenidoPadre = `
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${contenidoHijo}
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev">
                    <picture>
                        <img src="./svgs/icons/left-arrow-black.svg" alt="">
                    </picture>
                </div>
                <div class="swiper-button-next">
                    <picture>
                        <img src="./svgs/icons/right-arrow-black.svg" alt="">
                    </picture>
                </div>
            </div>
        `

        let elemento = document.querySelector(".container-prices .main-container");
        elemento.innerHTML = contenidoPadre;

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            effect: "cards",
            grabCursor: true,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        let actualElement;
        allData.prices.forEach((element, index) => {
            //element.colors
            actualElement = document.querySelector(`.container-prices .main-container .swiper-slide:nth-child(${index + 1}) .price-item .title`);

            actualElement.style.background = element.colors.title;

            actualElement = document.querySelector(`.container-prices .main-container .swiper-slide:nth-child(${index + 1}) .price-item .price`);

            actualElement.style.background = element.colors.price;

            actualElement = document.querySelector(`.container-prices .main-container .swiper-slide:nth-child(${index + 1}) .price-item .divisor-bottom`);

            actualElement.style.background = element.colors.price;

            actualElement = document.querySelector(`.container-prices .main-container .swiper-slide:nth-child(${index + 1}) .price-item .specs .container-choose button`);

            actualElement.style.borderColor = element.colors.buttonChoose.border;
            actualElement.style.color = element.colors.buttonChoose.color;

            // actualElement = document.querySelector(`.container-prices .main-container .swiper-slide:nth-child(${index + 1}) .price-item`);

            // actualElement.style.backgroundColor = element.colors.buttonChoose.color;
        })
    },
    printComments: () => {
        let contenidoHijo = ``;
        let contenidoDeEstrellas = ``;

        for (let i = 0; i < allData.comments.length; i++) {
            contenidoDeEstrellas = ``;

            for (let j = 1; j <= allData.comments[i].starsOfFive; j++) {
                contenidoDeEstrellas += `
                    <picture>
                        <img src="./svgs/icons/star.svg" alt="">
                    </picture>
                `
            }

            for (let j = 1; j <= (5 - allData.comments[i].starsOfFive); j++) {
                contenidoDeEstrellas += `
                    <picture>
                        <img src="./svgs/icons/star-void.svg" alt="">
                    </picture>
                `
            }

            contenidoHijo += `
                <div class="swiper-slide">
                    <div class="comment-item">
                        <div class="container">
                            <div class="header">
                                <div class="profile-photo">
                                    <picture>
                                        <img src="${allData.comments[i].profilePhotoUrl}" alt="">
                                    </picture>
                                </div>
                                <div class="score">
                                    ${contenidoDeEstrellas}
                                </div>
                            </div>
                            <div class="main">
                                <span>"${allData.comments[i].comment}"</span>
                            </div>
                            <div class="footer">
                                <span>${allData.comments[i].infoOfUser}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }

        let contenidoPadre = `
            <div class="swiper swiper-for-container-comments">
                <div class="swiper-wrapper">
                    ${contenidoHijo}
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev">
                    <picture>
                        <img src="./svgs/icons/left-arrow-black.svg" alt="">
                    </picture>
                </div>
                <div class="swiper-button-next">
                    <picture>
                        <img src="./svgs/icons/right-arrow-black.svg" alt="">
                    </picture>
                </div>
            </div>
        `

        let elemento = document.querySelector(".container-comments .main-container");
        elemento.innerHTML = contenidoPadre;

        const secondSwiper = new Swiper('.swiper-for-container-comments', {
            // Optional parameters
            effect: "coverflow",
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

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
    events.printPrices();
    events.printComments();

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