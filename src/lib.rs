use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, english-word-counter!");
}

#[wasm_bindgen]
pub fn parse(sentence:&str)->usize {
    let words = sentence.split(' ');
    words.count()
}