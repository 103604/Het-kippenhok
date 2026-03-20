let vragen = [
    {
        vraag: "Wat is 2 + 2?",
        goed: "b"
    },
    {
        vraag: "Wat is de hoofdstad van Nederland?",
        goed: "a"
    },
    {
        vraag: "Wat is 3 x 3?",
        goed: "b"
    }
];

let vraagAantal = 0;
let punten = 0;

window.addEventListener("load", function () {
    document.getElementById("vraag").innerHTML = vragen[0].vraag;
})

function checkAntwoord(antwoord) {
    const huidigeVraag = vragen[vraagAantal];
    if (vragen.length === vraagAantal) {
        alert("de quiz is klaar");
        return;
    }
    if (huidigeVraag.goed === antwoord) {
        punten++;
    }
    else {
        alert("Fout")
    }
    document.getElementById("scoreBox").innerHTML = punten;
    vraagAantal++;
    document.getElementById("vraag").innerHTML = vragen[vraagAantal].vraag;
}