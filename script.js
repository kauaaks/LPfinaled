menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("active");
});

const divs = document.getElementById("divsCarrosel");
const div = document.querySelectorAll("#divsCarrosel div");

let idx = 0;

function carrosel() {
    idx++;
    if (idx > div.length - 1) {
        idx = 0;
    }
    divs.style.transform = `translateX(${-idx * 100}%)`; 
}

setInterval(carrosel, 3000); 

document.getElementById('BotaoContato').addEventListener('click', function() {
    window.location.href = 'https://web.whatsapp.com/';
});
