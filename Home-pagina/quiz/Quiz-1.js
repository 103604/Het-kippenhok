let vragen = [
    {
        vraag: "Hoe heet een gebied met extreem weinig regen?",
        opties: ["Jungle", "Toendra", "Woestijn", "Savanne"],
        goed: "2"
    },
    {
        vraag: "Welke grote woestijn ligt in Afrika?",
        opties: ["Sahara", "Gobi", "Atacama", "Kalahari"],
        goed: "0"
    },
    {
        vraag: "In welk werelddeel ligt de Sahara?",
        opties: ["Azië", "Afrika", "Esuropa", "Australië"],
        goed: "1"
    },
    {
        vraag: "Hoe heet het klimaat van een woestijn?",
        opties: ["Poolklimaat", "Woestijnklimaat", "Zeeklimaat", "Landklimaat"],
        goed: "2"
    },
    {
        vraag: "Welke plant kan goed overleven in een woestijn?",
        opties: ["Cactus", "Eik", "Spar", "Bamboe"],
        goed: "0"
    },
    {
        vraag: "Hoe heet een waterbron midden in de woestijn?",
        opties: ["Fjord", "Oase", "Lagune", "Delta"],
        goed: "1"
    },
    {
        vraag: "Welk dier leeft vaak in de Sahara?",
        opties: ["Kameel", "Panda", "Zeehond", "Rendier"],
        goed: "0"
    },
    {
        vraag: "Wat is het grootste probleem voor mensen in de woestijn?",
        opties: ["Te veel sneeuw", "Te weinig water", "Te veel bomen", "Te veel rivieren"],
        goed: "1"
    },
    {
        vraag: "Hoe is het vaak ’s nachts in de woestijn?",
        opties: ["Warm", "Koud", "Regenachtig", "Winderig"],
        goed: "2"
    },
    {
        vraag: "Welke kleur kleding helpt tegen hitte in de woestijn?",
        opties: ["Zwart", "Donkerblauw", "Wit", "Paars"],
        goed: "2 "
    }
];

    let Openvragen = [    {
        vraag: "Hoeveel graden kan het overdag worden in een hete woestijn?",
        goed: "50 °C"
    },
    {
        vraag: "Hoeveel graden kan de temperatuur ’s nachts dalen in de woestijn?",
        goed: "0 °C"
    },
    {
        vraag: "Hoeveel procent van het aardoppervlak bestaat uit woestijn?",
        goed: "33%"
    },
    {
        vraag: "Hoeveel dagen kan een kameel zonder water overleven?",
        goed: "10 dagen"
    },
    {
        vraag: "Hoeveel millimeter regen valt er gemiddeld per jaar in een woestijn?",
        goed: "250 mm"
    },
];

let openvraag = document.createElement("");
    
let vraagAantal = 0;
let punten = 0;

window.addEventListener("load", function () {
    document.getElementById("vraag").innerHTML = vragen[0].vraag;
    document.getElementById("a").innerHTML = vragen[vraagAantal].opties[0];
    document.getElementById("b").innerHTML = vragen[vraagAantal].opties[1];
    document.getElementById("c").innerHTML = vragen[vraagAantal].opties[2];
    document.getElementById("d").innerHTML = vragen[vraagAantal].opties[3];
    console.log(vragen[vraagAantal].opties[0]);   
})

function checkAntwoord(antwoord) {
    if (vraagAantal >= vragen.length) {
        alert("De quiz is klaar! Score: " + punten);
        return;
    }

    console.log(vragen[vraagAantal])
    const huidigeVraag = vragen[vraagAantal];
    
    console.log(huidigeVraag)
    
    if (huidigeVraag.goed === antwoord) {
        punten++;
    } else {
        alert("Fout");
    }

    document.getElementById("scoreBox").innerHTML = "score " + punten;

    vraagAantal++;

    if (vraagAantal >= vragen.length) {
        alert("De quiz is klaar! Score: " + punten);
        return;
    }

    const volgendeVraag = vragen[vraagAantal];

    document.getElementById("vraag").innerHTML = volgendeVraag.vraag;
    document.getElementById("a").innerHTML = volgendeVraag.opties[0];
    document.getElementById("b").innerHTML = volgendeVraag.opties[1];
    document.getElementById("c").innerHTML = volgendeVraag.opties[2];
    document.getElementById("d").innerHTML = volgendeVraag.opties[3];
    console.log(antwoord);
}