## 🌳 Architecture Détaillée du Projet JS Academy

Le projet **JS Academy** est une application web d'apprentissage du JavaScript, structurée autour d'une architecture client-serveur (bien que le côté "serveur" soit ici simulé par **EmailJS** pour le contact et le stockage des données de cours dans un fichier JS local).

Voici une description détaillée de l'organisation et des fonctions des composants :

---

## I. Structure des Fichiers HTML (Vues Utilisateur)

| Fichier | Rôle Principal | Public/Privé | Liens JS Clés | Contenu Fonctionnel |
| :--- | :--- | :--- | :--- | :--- |
| **`index.html`** | **Landing Page / Portefeuille** | Public | `main/test.js` | Présentation de l'académie, statistiques, section **À Propos** et formulaire de **Contact** (géré par EmailJS). Affiche la liste des cours via `loadCourses()`. |
| **`login.html`** | **Connexion** | Public | `main/main.js` | Formulaire de connexion. Fonction **`login(event)`** pour la validation et la redirection. Bouton pour afficher/masquer le mot de passe. |
| **`signup.html`** | **Inscription** | Public | `main/main.js` | Formulaire d'inscription. Fonction pour afficher/masquer les mots de passe. Redirection vers `login.html`. |
| **`home.html`** | **Tableau de Bord / Choix de Cours** | Privé (Après Login) | `main/main.js` | Carrousel d'images dynamique (`startSlideshow()`, `currentSlide()`). Liste des cours interactifs avec fonction **`openCourse(courseID)`**. |
| **`course.html`** | **Interface d'Apprentissage** | Privé | `data/js-course.js`, `main/cours.js` | Interface principale : leçons, contenu texte/vidéo, éditeur de code (`#codeEditor`), bouton d'exécution (`#runButton`) et zone de sortie (`#output`). |

---

## II. Fichiers JavaScript (Logique Applicative)

Le projet utilise trois fichiers JS principaux pour séparer les responsabilités.

### 1. `main/main.js` — Logique Globale et Navigation

| Fonction / Variable | Rôle | Fichiers Ciblés |
| :--- | :--- | :--- |
| **`login(event)`** | Gère la soumission des formulaires d'authentification (login/signup). Vérifie les champs (mot de passe ≥ 6 caractères) et redirige vers `home.html`. | `login.html`, `signup.html` |
| **`openCourse(courseID)`** | Redirige l'utilisateur vers `course.html` avec l'ID du cours passé en paramètre d'URL. | `home.html` |
| **`startSlideshow()`**, **`showSlide(index)`** | Gère le carrousel d'images sur `home.html` (rotation automatique toutes les 4 secondes). | `home.html` |
| **Afficher / Masquer Mot de Passe** | Ajoute des écouteurs d'événements pour basculer le type des champs de mot de passe. | `login.html`, `signup.html` |

---

### 2. `main/test.js` — Landing Page & Contact

| Fonction / Variable | Rôle | API Externe |
| :--- | :--- | :--- |
| **`handleSubmit(event)`** | Envoie les données du formulaire de contact via **EmailJS** et affiche un message de succès ou d'erreur. | EmailJS |
| **`loadCourses()`** | Lit le tableau `courses` (défini dans ce fichier) et génère dynamiquement les cartes de cours sur `index.html`. | — |
| **Smooth Scroll** | Ajoute un défilement fluide pour les liens d'ancrage. | — |

---

### 3. `main/cours.js` — Environnement d'Apprentissage

Ce fichier est le cœur de l'interactivité de l'application.

| Fonction / Variable | Rôle | Logique Clé |
| :--- | :--- | :--- |
| **`loadLesson()`** | Met à jour le contenu de la leçon (titre, texte, vidéo, code) selon `currentLessonIndex`. | Affichage conditionnel du code et de la vidéo. |
| **`renderLessonsList()`** | Met à jour la liste des leçons dans la barre latérale et marque la leçon active. | Génère des éléments cliquables. |
| **`runCode()`** | **Exécute le code utilisateur** dans `#codeEditor`. | 1) Surcharge `console.log` • 2) Utilise `eval()` • 3) Gère les erreurs avec `try...catch` et affiche la sortie dans `#output`. |
| **`prevButton` / `nextButton`** | Navigation séquentielle entre les leçons (mise à jour de `currentLessonIndex`). | — |

---

## III. Dépendances Externes

Chargées via CDN :

- **Bootstrap 5.3** — Mise en page, responsive design, composants UI  
- **EmailJS** — Envoi du formulaire de contact sans backend  
- **Google Fonts (Poppins)** — Typographie

---

Souhaitez-vous un focus sur une section précise, par exemple la **sécurité de l’exécution du code (`runCode()`)** ou la **manipulation du DOM** ?
