const containerEl = document.querySelector(".container");

containerEl.addEventListener("mousemove",(e) => {
    
    const {clientX} = e;
    containerEl.style.setProperty("--offset",clientX + "px")
})