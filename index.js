let heading = 'The Life of Joseph';
let paragraph = 'Joseph is a self-taught software engineer';
const skills = ['Problem Solving', 'Good Communicator', 'Team Player', 'Self Taught', 'Fast Learner'];
const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'];

const aboutMeSection = document.getElementById("aboutme");
const skillsSection = document.getElementById("skillsprojects");

// About me section
let headingElement = document.createElement('h1');
headingElement.innerHTML = heading;
let paragraphElement = document.createElement('p');
paragraphElement.innerHTML = paragraph;

// End of about me section

// Skills Section
const skillsContainer = document.createElement('div');
const projectContainer = document.createElement('div');

skillsContainer.innerHTML = `
    <h2>Skills (${skills.length})</h2>
`;

let skillsList = document.createElement('ul');

for (let skill = 0; skill < skills.length; skill++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = skills[skill];

    // Add button to each skill
    let skillButton = document.createElement('button');
    skillButton.innerHTML = 'More Info';
    skillButton.addEventListener('click', () => {
        alert(`More information about ${skills[skill]}`);
    });
    listItem.appendChild(skillButton);

    skillsList.appendChild(listItem);
}

skillsContainer.appendChild(skillsList);

projectContainer.innerHTML = `
    <h2>Projects</h2>
`;

let projectList = document.createElement('ol');

projects.forEach((project) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = project;

    // project button
    let projectButton = document.createElement('button');
    projectButton.innerHTML = 'View Project';
    projectButton.addEventListener('click', () => {
        alert(`Viewing details for ${project}`);
    });
    listItem.appendChild(projectButton);

    projectList.appendChild(listItem);
});

projectContainer.appendChild(projectList);


aboutMeSection.appendChild(headingElement);
aboutMeSection.appendChild(paragraphElement);
skillsSection.appendChild(skillsContainer);
skillsSection.appendChild(projectContainer);

let projectbutton = document.getElementById('projectbutton');
projectbutton.addEventListener('click', () => {
    alert('Project button clicked');
});
