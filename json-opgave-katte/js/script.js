"use strict"; 

const btnElement = document.getElementById("btn"); 
const dataElement = document.querySelector(".data"); 

btnElement.addEventListener("click", () => {
    const url = "../json/katte.json"; 

    fetch(url)
        .then(res => res.json())
        .then(json => {
            json.forEach( val => {

                //opretter et nyt div element, gemt i variablen katteContainer
                const katteContainer = document.createElement("div");

                //tilføj en attribut til vores katteContainer - en class
                katteContainer.classList.add("katte-container");

                //tilføjer et nyt div element 
                const katteItem = document.createElement ("div");

                //tilføj en attribut til vores katteItem - en class
                katteItem.classList.add("katte-item");

                // tilføjer img tag 
        
                const katteImage = document.createElement("img");

                //tilføjer en atribut - en class

                katteImage.classList.add("katte-image");

                //sætter værdien src på ens billede

                katteImage.src = `../image/${val.image}`;

                //sætter et alt tag på billedet

                katteImage.alt = `${val.breed} ${val.name}`;

                //tilføjer en ul (unordered list), hvor infoen om katten kommer frem

                const katteInfo = document.createElement("ul");

                //tager fat om ens ul, for at vi kan lave en li inde i den og tilføjer info til list items 

                katteInfo.innerHTML = 
                `
                <li> Navn: ${val.name} </li>
                <li> Vægt: ${val.weight} </li>
                <li> Race: ${val.breed} </li>
                `;


                // sætter elementerne under / indeni hinanden (gør dem til forældre / børn af hinanden )
                //nedenunder kan man se at katteImage ligger inden i katteItem og det samme gør katteInfo
                //katteItem ligger under katteContainer 
                //og det hele kommer under sectionen fra vores html outputElement

                katteItem.appendChild(katteImage);
                katteItem.appendChild(katteInfo);

                katteContainer.appendChild(katteItem);

                dataElement.appendChild(katteContainer);

            });
        })

})
