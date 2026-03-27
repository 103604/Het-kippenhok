let openvraag = document.createElement("input");
openvraag.type = "number";
openvraag.id = "openvraag";
openvraag.name = "openvraag";

let button = document.createElement("button");
button.onclick = function() {openvraagCheck();};
button.textContent = "beantwoord";
button.type = "button";


let vragen = [
    {
        vraag: "Wat is een moesson?",
        opties: ["Sterke seizoenswind", "Berg", "Rivier", "Woestijn"],
        goed: "0"
    },
    {
        vraag: "Waar komt moesson veel voor?",
        opties: ["Azië", "Europa", "Antarctica", "Groenland"],
        goed: "0"
    },
    {
        vraag: "Heeft een moessonklimaat een nat seizoen?",
        opties: ["Ja", "Nee", "Alleen sneeuw", "Alleen wind"],
        goed: "0"
    },
    {
        vraag: "Wat brengt de moesson vaak mee?",
        opties: ["Veel regen", "Veel sneeuw", "Veel zand", "Geen wolken"],
        goed: "0"
    },
    {
        vraag: "In welk land komt moesson vaak voor?",
        opties: ["India", "Noorwegen", "Canada", "IJsland"],
        goed: "0"
    },
    {
        vraag: "Wat kan veel regen veroorzaken?",
        opties: ["Overstromingen", "Aardbevingen", "Vulkaanuitbarstingen", "Sneeuwstormen"],
        goed: "0"
    },
    {
        vraag: "Welke plant groeit veel in moessongebieden?",
        opties: ["Rijst", "Cactus", "Dennenboom", "Mos"],
        goed: "0"
    },
    {
        vraag: "Wanneer begint het regenseizoen vaak?",
        opties: ["Zomer", "Winter", "Lente", "Herfst"],
        goed: "0"
    },
    {
        vraag: "Wat gebeurt met rivieren bij zware regen?",
        opties: ["Ze drogen op", "Ze overstromen", "Ze verdwijnen", "Ze bevriezen"],
        goed: "1"
    },
    {
        vraag: "Waarom is moessonregen belangrijk?",
        opties: ["Voor landbouw", "Voor sneeuw", "Voor zand", "Voor vulkanen"],
        goed: "0"
    },
    {
        vraag: "Hoeveel maanden duurt het regenseizoen gemiddeld in India?",
        goed: "4"
    },
    {
        vraag: "Hoeveel liter regen valt er gemiddeld per jaar in een moessongebied?",
        goed: "2000"
    },
    {
        vraag: "Hoeveel procent van Azië wordt beïnvloed door de moesson?",
        goed: "50"
    },
    {
        vraag: "Hoeveel millimeter regen valt gemiddeld tijdens de natste maand?",
        goed: "400"
    },
    {
        vraag: "Hoeveel tijd heeft een boer gemiddeld om het regenseizoen te benutten voor het planten van rijst?",
        goed: "3"
    }
];

let vraagAantal = 0;
let punten = 0;


window.addEventListener("load", function () {
    document.getElementById("vraag").innerHTML = vragen[0].vraag;
    document.getElementById("a").innerHTML = vragen[vraagAantal].opties[0];
    document.getElementById("b").innerHTML = vragen[vraagAantal].opties[1];
    document.getElementById("c").innerHTML = vragen[vraagAantal].opties[2];
    document.getElementById("d").innerHTML = vragen[vraagAantal].opties[3];

    let vraagnummer = vraagAantal+1;
    document.getElementById("top-balk").innerHTML = "je bent bij vraag " + vraagnummer + "/15" ;
})

function checkAntwoord(antwoord) {

    if (vraagAantal === 9) {
        let vraagA = document.getElementById("a");
        let vraagB = document.getElementById("b");
        let vraagC = document.getElementById("c");
        let vraagD = document.getElementById("d");

        vraagA.remove();
        vraagB.remove();
        vraagC.remove();
        vraagD.remove();

        document.getElementById("vraag").innerHTML = vragen[vraagAantal +1].vraag;

        document.getElementById("form").append(openvraag);
        document.getElementById("form").append(button);

        vraagAantal ++;
        return;
    }

    else {
        if (vraagAantal >= vragen.length) {
            alert("De quiz is klaar! Score: " + punten);
            return;
        }

        const huidigeVraag = vragen[vraagAantal];


        if (huidigeVraag.goed === antwoord) {
            punten++;
        } else {
            alert("Fout");
        }

        document.getElementById("scoreBox").innerHTML = "score " + punten + "/15";

        vraagAantal++;

        const volgendeVraag = vragen[vraagAantal];

        document.getElementById("vraag").innerHTML = volgendeVraag.vraag;
        document.getElementById("a").innerHTML = volgendeVraag.opties[0];
        document.getElementById("b").innerHTML = volgendeVraag.opties[1];
        document.getElementById("c").innerHTML = volgendeVraag.opties[2];
        document.getElementById("d").innerHTML = volgendeVraag.opties[3];

        let vraagnummer = vraagAantal+1;
        document.getElementById("top-balk").innerHTML = "je bent bij vraag " + vraagnummer + "/15" ;
    }}


function openvraagCheck() {
    let openantwoord = document.getElementById("openvraag").value;

    if (openantwoord === vragen[vraagAantal].goed) {
        punten++;
        alert("Goed!");
    } else {
        alert("Fout")
    }

    document.getElementById("scoreBox").innerHTML = "score " + punten + "/15";

    vraagAantal++

    if (vraagAantal >= vragen.length) {
        alert("De quiz is klaar! Score: " + punten);
        return;
    }

    const volgendeVraag = vragen[vraagAantal];
    document.getElementById("vraag").innerHTML = volgendeVraag.vraag;

    let vraagnummer = vraagAantal+1;
    document.getElementById("top-balk").innerHTML = "je bent bij vraag " + vraagnummer + "/15" ;
}