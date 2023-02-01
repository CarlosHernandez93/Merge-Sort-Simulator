const animationZone = document.getElementById('animation-zone');
const fragmetn = document.createDocumentFragment();
for(let i = 0; i< 20; i++){
    const div = document.createElement('div');
    const randomNumber = Math.floor(Math.random() * 200);
    div.innerHTML = `<p>${randomNumber}</p>`
    fragmetn.appendChild(div);
}
animationZone.appendChild(fragmetn);