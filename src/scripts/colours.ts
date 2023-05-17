import coloursUntyped from '../scripts/colours.json';
const coloursJSON : Record<string, string> = coloursUntyped;

const techTexts = document.querySelectorAll(".project-techs");

function apply() {
    for (const techText of techTexts) {
        const techNames = techText.innerHTML.split(" ");
        techText.innerHTML = "";
        for (const name of techNames) {
            let colour : string = coloursJSON[name];
            techText.innerHTML += "<span style='color:" + colour + "'>• " + name + " </span>";
        }
    }
}

addEventListener('load', apply);
