// Générer un chiffre aléatoire entre 1 et 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
// Initialiser le nombre d'essais restants à 3
let remainingAttempts = 4;

// Fonction pour comparer le chiffre deviné avec le chiffre aléatoire
function guessNumber() {
    // Récupérer la valeur saisie par l'utilisateur
    let guess = parseInt(document.getElementById("guessInput").value);
    // Obtenir l'élément pour afficher le nombre d'essais restants
    let attemptsElement = document.getElementById("attempts");

    // Comparer le chiffre deviné avec le chiffre aléatoire
    if (guess === randomNumber) {
        document.getElementById("result").innerHTML = "Félicitations ! Vous avez deviné le chiffre !";
    } else if (guess < randomNumber) {
        document.getElementById("result").innerHTML = "Le chiffre est plus grand que " + guess + ".";
    } else {
        document.getElementById("result").innerHTML = "Le chiffre est plus petit que " + guess + ".";
    }

    // Décrémenter le nombre d'essais restants et afficher le nombre d'essais restants
    remainingAttempts--;
    attemptsElement.innerHTML = "Nombre d'essais restants : " + remainingAttempts;

    // Vérifier si l'utilisateur n'a plus d'essais restants
    if (remainingAttempts === 0) {
        document.getElementById("result").innerHTML = "Désolé, vous avez épuisé tous vos essais. Le chiffre était " + randomNumber + ".";
        // Désactiver la zone de texte et le bouton pour empêcher d'autres devinettes
        document.getElementById("guessInput").disabled = true;
        document.getElementsByTagName("button")[0].disabled = true;
    }
}

// Fonction pour redémarrer le jeu
function restartGame() {
    // Réinitialiser le chiffre aléatoire et le nombre d'essais restants
    randomNumber = Math.floor(Math.random() * 10) + 1;
    remainingAttempts = 3;

    // Réinitialiser les éléments d'affichage
    document.getElementById("result").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Nombre d'essais restants : " + remainingAttempts;

    // Réactiver la zone de texte et le bouton
    document.getElementById("guessInput").disabled = false;
    document.getElementsByTagName("button")[0].disabled = false;

    // Effacer la zone de texte
}