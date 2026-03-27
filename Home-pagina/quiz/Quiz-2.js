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
        vraag: "Waar komt een poolklimaat voor?",
        opties: ["Noordpool en Zuidpool", "Europa en Azië", "Afrika en Amerika", "Australië en Azië"],
        goed: "0"
    },
    {
        vraag: "Op welk continent ligt Antarctica?",
        opties: ["Antarctica", "Europa", "Afrika", "Azië"],
        goed: "0"
    },
    {
        vraag: "Waar leven ijsberen?",
        opties: ["Zuidpool", "Noordpool", "Afrika", "Australië"],
        goed: "1"
    },
    {
        vraag: "Welk dier leeft op Antarctica?",
        opties: ["Pinguïn", "IJsbeer", "Tijger", "Giraf"],
        goed: "0"
    },
    {
        vraag: "Hoe is de temperatuur meestal in een poolklimaat?",
        opties: ["Heel warm", "Mild", "Heel koud", "Tropisch"],
        goed: "2"
    },
    {
        vraag: "Hoe heet dik ijs op land?",
        opties: ["Gletsjer", "Moeras", "Duin", "Plateau"],
        goed: "0"
    },
    {
        vraag: "Hoe heet het lichtverschijnsel bij de polen?",
        opties: ["Poollicht", "Zonnestorm", "Zandstorm", "Regenboog"],
        goed: "0"
    },
    {
        vraag: "Welke kleur heeft sneeuw meestal?",
        opties: ["Groen", "Wit", "Rood", "Blauw"],
        goed: "1"
    },
    {
        vraag: "Welk voertuig wordt vaak gebruikt op sneeuw?",
        opties: ["Fiets", "Slee", "Boot", "Skateboard"],
        goed: "1"
    },
    {
        vraag: "Welk dier leeft in poolgebieden?",
        opties: ["Rendier", "Kangoeroe", "Leeuw", "Aap"],
        goed: "0"
    },
    {
        vraag: "Hoeveel graden Celsius kan het overdag gemiddeld worden op de Noordpool?",
        goed: "0"
    },
    {
        vraag: "Hoeveel procent van Antarctica is bedekt met ijs?",
        goed: "98"
    },
    {
        vraag: "Hoeveel maanden per jaar is het op de Zuidpool gemiddeld donker (poolnacht)?",
        goed: "6"
    },
    {
        vraag: "Hoeveel kilo kan een volwassen ijsbeer gemiddeld wegen?",
        goed: "450"
    },
    {
        vraag: "Hoeveel meter diep kan het ijs op Groenland gemiddeld zijn?",
        goed: "2000"
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