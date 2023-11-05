
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let cart = document.querySelector("#cart");


increment.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
});

decrement.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    if(cartValue > 1){
        cart.value = --cartValue;
    }
});

let password_btn = document.querySelector('.password_box .btn');
let password_input = document.querySelector('.password_box .password');

password_btn.addEventListener('click', ()=>{

    password_input.type === 'password' ? password_input.type = 'text':password_input.type = 'password';

})

let range = document.querySelector('#customRange1');

range.addEventListener('input', ()=>{
    document.querySelector('h3').innerHTML = range.value;
})

setInterval(() => {
    let date = new Date();
    document.querySelector('h2').innerHTML = date;
},1000);

setTimeout(()=>{
    document.write('Time out');
}, 6000)