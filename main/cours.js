const currentCourse = coursesData['basics']; 
const lessons = currentCourse.lessons;
let currentLessonIndex = 0;

const courseIcon = document.getElementById("courseIcon");
const courseTitle = document.getElementById("courseTitle");
const lessonsList = document.getElementById("lessonsList");
const lessonTitle = document.getElementById("lessonTitle");
const lessonText = document.getElementById("lessonText");
const codeSection = document.getElementById("codeSection");
const codeEditor = document.getElementById("codeEditor");
const runButton = document.getElementById("runButton");
const output = document.getElementById("output");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const videoSection = document.getElementById("videoSection");
const lessonVideo = document.getElementById("lessonVideo");


courseIcon.textContent = currentCourse.icon;
courseTitle.textContent = currentCourse.title;

function renderLessonsList() {
  lessonsList.innerHTML = '';
  lessons.forEach((lec, index) => {
    const lessonItem = document.createElement('div');
    lessonItem.className = `lesson-item ${index === currentLessonIndex ? 'active' : ''}`;
    lessonItem.textContent = lec.title;
    lessonItem.onclick = () => {
      currentLessonIndex = index;
      loadLesson();
    };
    lessonsList.appendChild(lessonItem);
  });
}

function loadLesson() {
  const currentLesson = lessons[currentLessonIndex];
  lessonTitle.textContent = currentLesson.title;
  lessonText.innerHTML = currentLesson.html || '';
  codeEditor.value = currentLesson.code || '';
  output.textContent = "Sortie du code...";

  codeSection.style.display = currentLesson.code ? 'block' : 'none';
  
  if(currentLesson.iframeUrl){
    videoSection.style.display = 'block';
    lessonVideo.src = currentLesson.iframeUrl;
  } else {
    videoSection.style.display = 'none';
    lessonVideo.src = '';
  }

  prevButton.style.visibility = currentLessonIndex > 0 ? 'visible' : 'hidden';
  nextButton.style.visibility = currentLessonIndex < lessons.length - 1 ? 'visible' : 'hidden';

  renderLessonsList();
}

function runCode() {
  
  output.textContent = '';
  
 
  const logs = [];
  const originalLog = console.log;
  console.log = function(...args) {
   
    logs.push(args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' '));
    originalLog.apply(console, args);
  };
  
  try {
  
    const result = eval(codeEditor.value);
    
    
    console.log = originalLog;
    
    if (logs.length > 0) {
      output.textContent = logs.join('\n'); 
    } else if (result !== undefined) {
      output.textContent = String(result);
    } else {
      output.textContent = "Exécution terminée.";
    }
  } catch(e) {

    console.log = originalLog;
    output.textContent = "Erreur : " + e.message;
    output.style.color = '#ff6b6b';
    setTimeout(() => {
      output.style.color = '';
    }, 3000);
  }
}

prevButton.onclick = () => { 
  if(currentLessonIndex > 0) {
    currentLessonIndex--; 
    loadLesson();
  }
};

nextButton.onclick = () => { 
  if(currentLessonIndex < lessons.length - 1) {
    currentLessonIndex++; 
    loadLesson();
  }
};

runButton.onclick = runCode;

codeEditor.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    runCode();
  }
});

loadLesson();