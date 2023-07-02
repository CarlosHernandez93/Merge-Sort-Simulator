const animationZone = document.getElementById('animation-zone');
const fragmetn = document.createDocumentFragment();

const numMin = Math.ceil(2);
const numMax = Math.floor(20);
const max = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

for(let i = 0; i< max; i++){
    const div = document.createElement('div');
    div.className = 'array-container'
    const randomNumber = Math.floor(Math.random() * 200);
    div.innerHTML = `${randomNumber}`
    //div.innerHTML = `<p>${randomNumber}</p>`
    fragmetn.appendChild(div);
}
animationZone.appendChild(fragmetn);