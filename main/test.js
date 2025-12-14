//send email with emailjs
emailjs.init("SQ0KvnSgeBVU9o-Ct");

function handleSubmit(event){
    event.preventDefault();
    const form = event.target;
    emailjs.sendForm('service_ntegelj','template_hmdcg3k',form)
    .then(res=>{alert(" Message envoyé avec succès !"); form.reset();})
    .catch(err=>{alert(" Une erreur est survenue : "+err.text);});
}

// Courses
const courses = [
{id:'basics', icon:'🎯', level:'Débutant', title:'Les Fondamentaux', desc:'Variables, types de données, opérateurs et structures de contrôle.'},
{id:'functions', icon:'⚡', level:'Intermédiaire', title:'Fonctions & Scope', desc:'Fonctions, closures, scope et hoisting en JavaScript.'},
{id:'dom', icon:'🎨', level:'Intermédiaire', title:'Manipulation du DOM', desc:'Créez des interfaces dynamiques et interactives.'},
{id:'async', icon:'🔄', level:'Avancé', title:'Programmation Asynchrone', desc:'Callbacks, promises et async/await.'},
{id:'oop', icon:'🏗️', level:'Avancé', title:'POO en JavaScript', desc:'Classes, héritage et prototypes.'},
{id:'modern', icon:'🚀', level:'Avancé', title:'JavaScript Moderne', desc:'ES6+, modules, destructuring et plus.'}
];

function loadCourses(){
    const grid = document.getElementById('coursesGrid'); grid.innerHTML='';
    courses.forEach(course=>{
        const card=document.createElement('div');
        card.className='course-card';
        card.innerHTML=`<div class="course-icon">${course.icon}</div><span class="course-level">${course.level}</span><h3 class="course-title">${course.title}</h3><p class="course-desc">${course.desc}</p>`;
        grid.appendChild(card);
    });
}
loadCourses();

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click', e=>{
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
    });
});