

//TODO : Ajouter un écouteur d'événement sur le formulaire 
document.getElementById('form-examen').addEventListener('submit', function (e) {
    e.preventDefault();

    //TODO : Récupérer les valeurs du formulaire 
    const examen = {
        nom: document.getElementById('nom').value,
        duree: parseInt(document.getElementById('duree').value),
        description: document.getElementById('description').value,
        proprietaire: document.getElementById('proprietaire').value,
        questions: []
    };


    //TODO : Sauvegarder l'examen dans le localStorage sous une clé basée sur le nom du propriétaire
    const examsKey = 'examens_' + examen.proprietaire;
    const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
    exams.push(examen);
    localStorage.setItem(examsKey, JSON.stringify(exams));

    alert('Examen ajouté avec succès !');
    window.location.href = 'ajouter-question.html';
    this.reset();
});





const proprietaire = getElementById('proprietaire'); // ou récupéré via input
const examsKey = 'examens_' + proprietaire.toLowerCase().replace(/\s+/g, '_');
const examens = JSON.parse(localStorage.getItem(examsKey)) || [];

const div = document.getElementById('conteneur');
const liste = document.createElement('ul');

examens.forEach(exam => {
    const item = document.createElement('li');
    item.innerHTML = `${exam.nom} - ${exam.duree} min - ${exam.description}`;
    liste.appendChild(item);
});

div.appendChild(liste);