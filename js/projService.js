'use strict'

var gProjects;
var gProjectId = 1;

function createProject(name, title, desc, url, labels) {
    var project = {
        name,
        title,
        desc,
        url,
        labels,
        id: gProjectId++,
        publishedAt: Date.now()
    }
    saveToStorage('gProjectId', gProjectId);
    return project;
}

function createProjects() {
    gProjects = [];
    gProjects.push(createProject('Minesweeper',
        'Minesweeper',
        'My first sprint, my version of the classic windows game',
        'https://gazorpazorp85.github.io/minesweeper/',
        ['Sprint', ' Classic Game', ' Minesweeper']));
    gProjects.push(createProject('guessMe',
        'Guess Me',
        'My version of the famous akinator',
        'https://gazorpazorp85.github.io/GuessMe/',
        ['Guess Me', ' Akinator', ' Binary Tree']));
    gProjects.push(createProject('safeContent',
        'Safe Content',
        'A nice exercise of accessing a specific page for admins and other for regular users',
        'https://gazorpazorp85.github.io/Safe-Content/',
        ['Admin', ' Login', ' Redirect']));
    gProjects.push(createProject('pacman',
        'Pacman',
        'My first game! Pacman!',
        'https://gazorpazorp85.github.io/pacman/',
        ['Pacman', ' Retro', ' Games']));
    saveProjects();
    gProjects.push(createProject('bookshop',
        'Paolo\'s Bookshop',
        'A nice exercise to manage a bookshop',
        'https://gazorpazorp85.github.io/Bookshop/',
        ['Bookshop', ' Items management', ' Functionality']));
    saveProjects();
}

function saveProjects() {
    saveToStorage('projects', gProjects);
}

function loadProjects() {
    gProjects = loadFromStorage('projects', []);
    gProjectId = loadFromStorage('gProjectId', 1);
}

function getProjectsToRender() {
    return gProjects;
}

function getProjectById(projectId) {
    return gProjects.find(function (gProject) {
        return gProject.id === projectId;
    });
}

function getMonth(month) {
    var strMonth = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return strMonth[month];
}

