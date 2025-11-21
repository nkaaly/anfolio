let elements = document.querySelectorAll(".navText");

elements.forEach((element) => {
    let innerText = element.innerText; 
    element.innerHTML = "";

    let navTextContainer = document.createElement("div");
    navTextContainer.classList.add("block");

    for (let letter of innerText) {
        let span=document.createElement("span");
        span.innerText= letter.trim() === "" ? "\xa0":
        letter;
        span.classList.add("letter");
        navTextContainer.appendChild(span);
    }

    element.appendChild(navTextContainer);
    element.appendChild(navTextContainer.cloneNode(true));
});

elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    });
});