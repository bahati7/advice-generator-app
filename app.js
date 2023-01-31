let advice_Id = document.querySelector(".advice_Id");
let advice_Text = document.querySelector(".advice_Text");
let btn = document.querySelector(".img-container>img");

let url = "https://api.adviceslip.com/advice";

let getAdvice = () =>{
    fetch(url)
        .then(data => data.json())
        .then((item) => {
            advice_Id.textContent = `ADVICE #${item.slip.id}`;
            advice_Text.textContent = `"${item.slip.advice}"`;
        }).catch(err => alert("fetching error"+err))
}
window.addEventListener('load',getAdvice);
btn.addEventListener('click',getAdvice);