let modeBtn = document.getElementById("mode");
let icon = document.querySelector("icon");
let body = document.querySelector("body");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        // body.classList.add("dark");
        // body.classList.remove("light");
        // modeBtn.classList.add("i-light");
        // modeBtn.classList.remove("i-dark");
    }
    else
    {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // body.classList.add("light");
        // body.classList.remove("dark");
        // modeBtn.classList.add("i-dark");
        // modeBtn.classList.remove("i-light");
    }
    console.log(currMode);
})