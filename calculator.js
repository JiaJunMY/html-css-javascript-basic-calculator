const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
        return;
    }
    
    const value = e.target.dataset.value;

    if(value === "=") {
        calculate();
        return;
    }

    if (result.innerHTML === "0") {
        result.innerHTML = value;
    } else {
        result.innerHTML += value;
    }

});

function calculate() {
     try {
        result.innerHTML = eval(result.innerHTML);
    } catch (error) {
        result.innerHTML = "Error.";
    }
}

function cleanResult() {
    result.innerHTML = "0";
}

