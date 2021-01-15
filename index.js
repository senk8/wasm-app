import init from "./pkg/wasm_app.js";

const btnId = "b1";
const sentId = "s1";
let btn = document.getElementById(btnId);

btn.addEventListener("click",async function(){
    let wasm = await init();
    let sentence = document.getElementById(sentId);
    let num = wasm.parse(sentence.value);
    alert(num);
})
