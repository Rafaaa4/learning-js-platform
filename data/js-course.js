
const coursesData = {
  basics: {
    title: "Les Fondamentaux",
    icon: "🎯",
    lessons: [
      {
        title: "Introduction à JavaScript",
        html: "<p>JavaScript est un langage de programmation qui permet de rendre les pages web interactives.</p><p>Dans ce cours, vous allez apprendre les bases essentielles de JavaScript.</p>",
        code: "",
        iframeUrl: "https://www.youtube.com/embed/GM6dQBmc-Xg",
      },
      {
        title: "Variables et Types de données",
        html: "<p>En JavaScript, on utilise <code>let</code>, <code>const</code> et <code>var</code> pour déclarer des variables.</p><h5>Types de données :</h5><ul><li>String (texte)</li><li>Number (nombres)</li><li>Boolean (vrai/faux)</li><li>Object, Array...</li></ul>",
        code: `let nom = "Ahmed";
const age = 25;
let ville = "Tunis";

console.log("Je m'appelle " + nom);
console.log("J'ai " + age + " ans");
console.log("J'habite à " + ville);

// Types de données
console.log(typeof nom);    // string
console.log(typeof age);    // number`,
        iframeUrl: "https://www.youtube.com/embed/sEJRt4mpjq0",
      },
      {
        title: "Opérateurs arithmétiques",
        html: "<p>JavaScript supporte tous les opérateurs arithmétiques standards.</p><p>Addition (+), Soustraction (-), Multiplication (*), Division (/), Modulo (%)</p>",
        code: `let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Soustraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulo:", a % b);
console.log("Puissance:", a ** 2);`,
        iframeUrl: "https://www.youtube.com/embed/FGr0SJYM0pQ",
      },
      {
        title: "Conditions (if/else)",
        html: "<p>Les conditions permettent d'exécuter du code selon certaines circonstances.</p><p>Utilisez <code>if</code>, <code>else if</code>, et <code>else</code> pour contrôler le flux d'exécution.</p>",
        code: `let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur ✅");
} else {
    console.log("Vous êtes mineur ❌");
}

let note = 15;
if (note >= 16) {
    console.log("Excellent!");
} else if (note >= 12) {
    console.log("Bien!");
} else if (note >= 10) {
    console.log("Passable");
} else {
    console.log("Peut mieux faire");
}`,
        iframeUrl: "https://www.youtube.com/embed/Lp-Du2fKoug",
      },
      {
        title: "Boucles (for et while)",
        html: "<p>Les boucles permettent de répéter des instructions plusieurs fois.</p><p><strong>for</strong> : quand vous connaissez le nombre d'itérations</p><p><strong>while</strong> : quand la condition détermine la fin</p>",
        code: `// Boucle for
console.log("=== Boucle FOR ===");
for (let i = 1; i <= 5; i++) {
    console.log("Itération " + i);
}

// Boucle while
console.log("\\n=== Boucle WHILE ===");
let compteur = 1;
while (compteur <= 3) {
    console.log("Compteur: " + compteur);
    compteur++;
}

// Parcourir un tableau
console.log("\\n=== Parcourir tableau ===");
let fruits = ["Pomme", "Banane", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}`,
        iframeUrl: "https://www.youtube.com/embed/s9wW2PpJsmQ",
      },
      {
        title: "Les Tableaux (Arrays)",
        html: "<p>Les tableaux permettent de stocker plusieurs valeurs dans une seule variable.</p>",
        code: `let fruits = ["Pomme", "Banane", "Orange"];

console.log(fruits[0]); // Premier élément
console.log(fruits.length); // Taille du tableau

// Ajouter des éléments
fruits.push("Fraise");
console.log(fruits);

// Supprimer le dernier
fruits.pop();
console.log(fruits);

// Parcourir avec forEach
fruits.forEach(fruit => {
    console.log("J'aime les " + fruit);
});`,
        iframeUrl: "https://www.youtube.com/embed/A0VF1TlEHAw",
      },
    ]
  },

  functions: {
    title: "Fonctions & Scope",
    icon: "⚡",
    lessons: [
      {
        title: "Créer des fonctions",
        html: "<p>Les fonctions permettent de regrouper du code réutilisable.</p><p>Une fonction peut accepter des paramètres et retourner une valeur.</p>",
        code: `function direBonjour(nom) {
    return "Bonjour " + nom + "!";
}

console.log(direBonjour("Ahmed"));
console.log(direBonjour("Sara"));

// Fonction avec calcul
function additionner(a, b) {
    return a + b;
}

console.log("5 + 3 =", additionner(5, 3));

// Fonction sans return
function afficherMessage() {
    console.log("Ceci est un message");
}

afficherMessage();`,
        iframeUrl: "https://www.youtube.com/embed/N8ap4k_1QEQ",
      },
      {
        title: "Fonctions fléchées (Arrow Functions)",
        html: "<p>ES6 introduit une syntaxe plus courte pour écrire des fonctions.</p><p>Les arrow functions sont particulièrement utiles pour les callbacks.</p>",
        code: `// Fonction classique
const carre1 = function(x) {
    return x * x;
}

// Fonction fléchée
const carre2 = (x) => x * x;

console.log("Carré de 5:", carre2(5));

const multiplier = (a, b) => a * b;
console.log("3 × 4 =", multiplier(3, 4));

// Avec plusieurs lignes
const calculer = (a, b) => {
    let somme = a + b;
    let produit = a * b;
    return { somme, produit };
}

console.log(calculer(5, 3));`,
        iframeUrl: "https://www.youtube.com/embed/h33Srr5J9nY",
      },
      {
        title: "Scope et Closures",
        html: "<p>Le scope détermine où les variables sont accessibles.</p><p>Les closures permettent aux fonctions d'accéder aux variables de leur scope parent.</p>",
        code: `// Scope global
let global = "Je suis global";

function exemple() {
    let local = "Je suis local";
    console.log(global); // ✅ Accessible
    console.log(local);  // ✅ Accessible
}

exemple();
// console.log(local); // ❌ Erreur

// Closure
function compteur() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let monCompteur = compteur();
console.log(monCompteur()); // 1
console.log(monCompteur()); // 2
console.log(monCompteur()); // 3`,
        iframeUrl: "https://www.youtube.com/embed/71AtaJpJHw0",
      },
    ]
  },

  dom: {
    title: "Manipulation du DOM",
    icon: "🎨",
    lessons: [
      {
        title: "Sélectionner des éléments",
        html: "<p>Le DOM (Document Object Model) permet d'interagir avec les éléments HTML.</p><p><strong>Note:</strong> Ces exemples fonctionnent dans une vraie page web.</p>",
        code: `// Sélection par ID
// let element = document.getElementById('monId');

// Sélection par classe
// let elements = document.querySelectorAll('.maClasse');

// Sélection par balise
// let divs = document.querySelectorAll('div');

// Exemple pratique
console.log("=== Méthodes de sélection ===");
console.log("getElementById('id')");
console.log("querySelector('.classe')");
console.log("querySelectorAll('tag')");

let message = "Le DOM permet de manipuler HTML!";
console.log(message);`,
        iframeUrl: "https://www.youtube.com/embed/eaLKqoB9Fu0",
      },
      {
        title: "Modifier le contenu et le style",
        html: "<p>Modifiez le contenu HTML et les styles CSS avec JavaScript.</p>",
        code: `// Modifier le texte
// element.textContent = "Nouveau texte";
// element.innerHTML = "<strong>Texte en gras</strong>";

// Modifier le style
// element.style.color = "red";
// element.style.backgroundColor = "yellow";

// Ajouter/supprimer des classes
// element.classList.add('active');
// element.classList.remove('hidden');
// element.classList.toggle('dark-mode');

console.log("Exemples de manipulation:");
console.log("element.textContent = 'Texte'");
console.log("element.style.color = 'red'");
console.log("element.classList.add('class')");`,
        iframeUrl: "https://www.youtube.com/embed/rklR27SC7DA",
      },
      {
        title: "Événements (Events)",
        html: "<p>Les événements permettent de réagir aux actions de l'utilisateur.</p>",
        code: `// Exemple d'événements
console.log("=== Types d'événements ===");
console.log("click - Clic de souris");
console.log("submit - Soumission de formulaire");
console.log("keypress - Touche pressée");
console.log("mouseover - Survol de souris");

// Syntaxe:
// element.addEventListener('click', function() {
//     console.log('Élément cliqué!');
// });

// Avec arrow function
// button.addEventListener('click', () => {
//     console.log('Bouton cliqué!');
// });`,
        iframeUrl: "https://www.youtube.com/embed/VlkdZNY7W0w",
      },
    ]
  },

  async: {
    title: "Programmation Asynchrone",
    icon: "🔄",
    lessons: [
      {
        title: "Introduction à l'asynchrone",
        html: "<p>JavaScript peut exécuter du code de manière asynchrone, sans bloquer le reste du programme.</p>",
        code: `console.log("1. Début");

// setTimeout - exécute après un délai
setTimeout(() => {
    console.log("2. Après 2 secondes");
}, 2000);

console.log("3. Fin");

// L'ordre sera: 1 → 3 → 2

// Exemple pratique
console.log("\\n=== Simulation chargement ===");
console.log("Chargement...");
setTimeout(() => {
    console.log("✅ Données chargées!");
}, 1500);`,
        iframeUrl: "https://www.youtube.com/embed/ZYb_ZU8LNxs",
      },
      {
        title: "Les Promises",
        html: "<p>Les Promises permettent de gérer des opérations asynchrones de manière plus élégante.</p>",
        code: `// Créer une Promise
const chargerDonnees = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("✅ Données chargées!");
        } else {
            reject("❌ Erreur de chargement");
        }
    }, 1000);
});

console.log("⏳ Chargement en cours...");

chargerDonnees
    .then(resultat => {
        console.log(resultat);
    })
    .catch(erreur => {
        console.log(erreur);
    });`,
        iframeUrl: "https://www.youtube.com/embed/DHvZLI7Db8E",
      },
      {
        title: "Async/Await",
        html: "<p>Async/Await rend le code asynchrone plus lisible et facile à comprendre.</p>",
        code: `// Fonction asynchrone
async function chargerUtilisateur() {
    console.log("⏳ Chargement utilisateur...");
    
    // Simuler un appel API
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ nom: "Ahmed", age: 25 });
        }, 1000);
    });
}

// Utiliser async/await
async function afficherUtilisateur() {
    try {
        let user = await chargerUtilisateur();
        console.log("✅ Utilisateur:", user);
    } catch (error) {
        console.log("❌ Erreur:", error);
    }
}

afficherUtilisateur();`,
        iframeUrl: "https://www.youtube.com/embed/V_Kr9OSfDeU",
      },
    ]
  },

  oop: {
    title: "POO en JavaScript",
    icon: "🏗️",
    lessons: [
      {
        title: "Classes et Objets",
        html: "<p>La POO (Programmation Orientée Objet) permet d'organiser le code avec des classes et des objets.</p>",
        code: `class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        return \`Je suis \${this.nom}, j'ai \${this.age} ans\`;
    }
    
    anniversaire() {
        this.age++;
        console.log(\`Joyeux anniversaire! Vous avez \${this.age} ans\`);
    }
}

const ahmed = new Personne("Ahmed", 25);
console.log(ahmed.sePresenter());
ahmed.anniversaire();

const sara = new Personne("Sara", 30);
console.log(sara.sePresenter());`,
        iframeUrl: "https://www.youtube.com/embed/rlLuL3jYGTA",
      },
      {
        title: "Héritage (Inheritance)",
        html: "<p>L'héritage permet à une classe d'hériter des propriétés et méthodes d'une autre classe.</p>",
        code: `class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    
    parler() {
        console.log(\`\${this.nom} fait du bruit\`);
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom); // Appelle le constructeur parent
        this.race = race;
    }
    
    parler() {
        console.log(\`\${this.nom} aboie: Woof!\`);
    }
}

let chien = new Chien("Rex", "Berger");
chien.parler();
console.log("Race:", chien.race);`,
        iframeUrl: "https://www.youtube.com/embed/Tllw4EPhLiQ",
      },
    ]
  },

  modern: {
    title: "JavaScript Moderne",
    icon: "🚀",
    lessons: [
      {
        title: "Destructuring",
        html: "<p>Le destructuring permet d'extraire des valeurs d'objets et de tableaux facilement.</p>",
        code: `// Destructuring d'objets
const personne = { 
    nom: "Ahmed", 
    age: 25, 
    ville: "Tunis" 
};

const { nom, age, ville } = personne;
console.log(nom, age, ville);

// Destructuring de tableaux
const couleurs = ["rouge", "vert", "bleu"];
const [premiere, deuxieme] = couleurs;
console.log(premiere, deuxieme);

// Avec fonctions
function afficher({ nom, age }) {
    console.log(\`\${nom} a \${age} ans\`);
}

afficher(personne);`,
        iframeUrl: "https://www.youtube.com/embed/UgEaJBz3bjY",
      },
      {
        title: "Spread et Rest Operators",
        html: "<p>Les opérateurs spread (...) et rest permettent de manipuler des tableaux et objets facilement.</p>",
        code: `// Spread operator avec tableaux
const nombres = [1, 2, 3];
const nouveaux = [...nombres, 4, 5];
console.log(nouveaux);

// Copier un tableau
const copie = [...nombres];
console.log(copie);

// Spread avec objets
const user = { nom: "Ahmed", age: 25 };
const userComplet = { ...user, ville: "Tunis" };
console.log(userComplet);

// Rest operator
function somme(...nombres) {
    return nombres.reduce((a, b) => a + b, 0);
}

console.log(somme(1, 2, 3, 4, 5));`,
        iframeUrl: "https://www.youtube.com/embed/1INe_jCWq1Q",
      },
      {
        title: "Template Literals",
        html: "<p>Les template literals permettent d'écrire des chaînes de caractères de manière plus lisible.</p>",
        code: `const nom = "Ahmed";
const age = 25;

// Ancienne méthode
console.log("Je m'appelle " + nom + " et j'ai " + age + " ans");

// Template literals
console.log(\`Je m'appelle \${nom} et j'ai \${age} ans\`);

// Multi-lignes
const message = \`
Bonjour \${nom},
Vous avez \${age} ans.
Bienvenue!
\`;

console.log(message);

// Calculs dans les templates
console.log(\`L'année prochaine j'aurai \${age + 1} ans\`);`,
        iframeUrl: "https://www.youtube.com/embed/NgF9-pdTDGs",
      },
      {
        title: "Modules ES6",
        html: "<p>Les modules permettent d'organiser le code en fichiers séparés.</p>",
        code: `// Dans un fichier math.js:
// export function additionner(a, b) {
//     return a + b;
// }
// export const PI = 3.14159;

// Dans votre fichier principal:
// import { additionner, PI } from './math.js';
// console.log(additionner(5, 3));
// console.log(PI);

// Export par défaut:
// export default function multiplier(a, b) {
//     return a * b;
// }

// Import:
// import multiplier from './math.js';

console.log("Les modules permettent:");
console.log("✅ Organiser le code");
console.log("✅ Réutiliser le code");
console.log("✅ Éviter les conflits");`,
        iframeUrl: "https://www.youtube.com/embed/cRHQNNcYf6s",
      },
    ]
  }
};



