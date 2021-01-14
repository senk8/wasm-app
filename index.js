import init,{greet,parse} from "./pkg/wasm_app.js";

const btnId = "b1";
const sentId = "s1";
let btn = document.getElementById(btnId);


async function run(){
    await init();
    let sentence = document.getElementById(sentId);
    let num = parse(sentence.value);
    alert(num);
}

btn.addEventListener("click",run);
