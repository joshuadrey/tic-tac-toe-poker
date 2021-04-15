const idImput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
function setCard() {
    const card = document.getElementById(idInput.value);
    console.log(card)
    card.style.color = colorInput.value;
}

function resetCards() {
    const card = document.querySelectorAll('section')
    for (let i = 0; i < card.length; i++) {
        card[i].style.color = 'gray';
    }
}