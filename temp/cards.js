const Manager = require("../lib/Manager");

function generateManager(Manager) {
  return `
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${Manager.name}
        <br>
        <i class="fas fa-chalkboard-teacher"></i>Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id: ${Manager.id}</li>
        <li class="list-group-item">Office Number: ${Manager.office}</li>
        <a href="mailto:${Manager.email}" class="card-link">${Manager.email}</a>
      </ul>
  </div>    
`;
}

function generateEngineer(engineer) {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${engineer.name}
        <br>
        <i class="fas fa-laptop-code"></i>Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id: ${engineer.id}</li>
        <li class="list-group-item">Github Account:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a>
      </ul>
  </div>
      `;
}

function generateIntern(intern) {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${intern.name}
        <br>
        <i class="fas fa-graduation-cap"></i>Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id: ${intern.id}</li>
        <li class="list-group-item">School Attended: ${intern.school}</li>
        <a href="mailto:${intern.email}" class="card-link">${intern.email}</a>
      </ul>
  </div>
    `;
}

module.exports = {
  generateManager,
  generateEngineer,
  generateIntern,
};