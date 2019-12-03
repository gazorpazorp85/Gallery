'use strict'

$(document).ready(function () {
    createProjects();
    renderProjects();
})

// function init (){
//     createProjects();
//     renderProjects();
// }

function renderProjects() {
    var $elPortfolioContainerRow = $('.portfolio-row');
    var projects = getProjectsToRender();
    var str = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderPortfolioModal(${project.id})">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid mx-auto rounded-circle" src="img/portfolio/project${project.id}-thumbnail.png" alt="${project.name}">
                    </a>
                    <div class="portfolio-caption">
                    <h4>${project.title}</h4>
                    <p class="text-muted">${project.desc}</p>
                    </div>
                </div>`
    });
    $elPortfolioContainerRow.html(str);
}

function renderPortfolioModal(projectId) {
    var $elModalPortfolioBody = $('#portfolioModal')
    $elModalPortfolioBody.attr("aria-hidden", "false");
    var $elModalPortfolio = $('.modal-body');
    var project = getProjectById(projectId);
    var str = `<h2>${project.title}</h2>
               <p class="item-intro text-muted"><a href="${project.url}" target="blank">${project.url}</a></p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/project${project.id}.png" alt="${project.title}">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date: ${renderFormattedTime(project)}</li>
      <li>Client: Coding-Academy</li>
      <li>Category: ${project.labels}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>`
    $elModalPortfolio.html(str);
}

function renderFormattedTime(project) {
    var currentDate = new Date(project.publishedAt);
    var year = currentDate.getFullYear();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var strMonth = getMonth(month);
    var formatedDate = date + " " + strMonth + " " + year;
    return formatedDate;
}

function renderContact() {
    openCanvas();
    var $elContact = $('#contact');
    var str = `<form>
                    <div class="form-group">
                        <label for="input-email">Your Email</label>
                        <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="input-subject">Subject</label>
                        <input type="email" class="form-control" id="input-subject" placeholder="Type subject here">
                    </div>
                    <div class="form-group">
                        <label for="input-text-area">Message Body</label>
                        <textarea class="form-control" id="input-text-area" rows="6"></textarea>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="onSubmitContactForm()">Submit</button>
                </form>`;
    $elContact.html(str);
}

function onSubmitContactForm () {
    var $elEmail = $('#input-email').val();
    var $elSubject = $('#input-subject').val();
    var $elTextArea = $('#input-text-area').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$elEmail}&su=${$elSubject}&body=${$elTextArea}`, '_blank');
    $('#input-email').val('');
    $('#input-subject').val('');
    $('#input-text-area').val('');
}