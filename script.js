// Sélection des éléments HTML 
const colorButton = document.getElementById('btn');
const colorCodeText = document.getElementById('color-code');

// Écouteur d'événement sur le clic du bouton
colorButton.addEventListener('click', () => {
    // Génération de valeurs aléatoires entre 0 et 255 pour le format RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Création de la chaîne de caractères RGB
    const randomRgbColor = `rgb(${r}, ${g}, ${b})`;

    // Application de la couleur au fond de la page
    document.body.style.backgroundColor = randomRgbColor;

    // Mise à jour de l'affichage textuel du code couleur
    if (colorCodeText) {
        colorCodeText.textContent = randomRgbColor;
    }
});