//TODO:ajouter un ècouteur d'événement pour a ajouter dynamiquement
document.getElementById('add-proposition').addEventListener('click', () => {
const container = document.createElement('div');
const input = document.createElement('input');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
input.type = 'text';
input.placeholder = 'Proposition';
container.appendChild(checkbox);
container.appendChild(input);
document.getElementById('propositions').appendChild(container);})