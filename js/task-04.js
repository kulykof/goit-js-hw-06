const button = {
    more: document.querySelector('[data-action="increment"]'),
    less: document.querySelector('[data-action="decrement"]'),
    span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    button.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    button.span.textContent = counterValue;
};

button.more.addEventListener("click", increment);
button.less.addEventListener("click", decrement);

console.log(button);