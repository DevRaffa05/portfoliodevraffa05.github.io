let menu = document.getElementById('burger');
let nav = document.getElementById('nav');
let btnExperience = document.getElementById('experiencia');
let btnPersonal = document.getElementById('personal');
let skills = document.getElementById('skills');
let personalInfo = document.getElementById('personalInfo');
let personalInfoImg = document.getElementById('personalInfoImg');
let ExperienceInfo = document.getElementById('experienceInfo');
let aboutMeSkills = document.getElementById('aboutMeSkills');

btnPersonal.addEventListener('click', showPersonalInfo);
btnExperience.addEventListener('click', showExperience);
skills.addEventListener('click', showSkills);
menu.addEventListener('click', showMenu);

function showMenu () {
    nav.classList.toggle('mostrar');
}

function showPersonalInfo () {
    personalInfo.style.display = 'block';
    personalInfoImg.style.display = 'block';   
    btnPersonal.style.backgroundColor = 'var(--blanco)';
    btnExperience.style.backgroundColor = 'var(--morado)';
    skills.style.backgroundColor = 'var(--morado)';
    ExperienceInfo.style.display = 'none';
    aboutMeSkills.style.display = 'none';
}

function showExperience () {
    ExperienceInfo.style.display = 'block';
    btnExperience.style.backgroundColor = 'var(--blanco)';
    btnPersonal.style.backgroundColor = 'var(--morado)';
    skills.style.backgroundColor = 'var(--morado)';
    personalInfo.style.display = 'none';
    personalInfoImg.style.display = 'none';
    aboutMeSkills.style.display = 'none';
}

function showSkills () {
    aboutMeSkills.style.display = 'flex';
    skills.style.backgroundColor = 'var(--blanco)';
    btnPersonal.style.backgroundColor = 'var(--morado)';
    btnExperience.style.backgroundColor = 'var(--morado)';
    personalInfo.style.display = 'none';
    personalInfoImg.style.display = 'none';
    ExperienceInfo.style.display = 'none';
}







