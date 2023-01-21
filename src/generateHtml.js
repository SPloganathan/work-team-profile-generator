// generatHtml is a utility function whuch will receive the employee details from index.js and generate a dynamic HTML file.
const generateHtml = (employeeDetails) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Work Team Profile</title>
    </head>
    <body>
      <header class="header-wrapper">
        <h1 class="header-text">My Team</h1>
      </header>
      <section class="container mt-5">
        <div class="row">
          ${generateCard(employeeDetails)}
        </div>
      </section>
    </body>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </html>
  `;
};
// generateCard will iterate through each employee details and display the employee information based on their role using if statement
const generateCard = (employeeDetails) => {
  let cardDetails = "";
  employeeDetails.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      cardDetails += `<div class="card border-success shadow p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h2>🕵️ ${employee.getRole()}</h2>
      </div>
      <div class="card-body text-success">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">Office number: ${employee.getOfficeNumber()}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    } else if (employee.getRole() === "Engineer") {
      cardDetails += `<div class="card border-success shadow p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h2>💻 ${employee.getRole()}</h2>
      </div>
      <div class="card-body text-success">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    } else if (employee.getRole() === "Intern") {
      cardDetails += `<div class="card border-success shadow p-3 mb-5 bg-body rounded">
      <div class="card-header">
        <h2>${employee.getName()}</h2>
        <h2>🧑‍🎓 ${employee.getRole()}</h2>
      </div>
      <div class="card-body text-success">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">
              Email: <a href="mailto:">${employee.getEmail()}</a>
            </li>
            <li class="list-group-item">School: ${employee.getSchool()}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
    }
  });
  return cardDetails;
};
module.exports = generateHtml;
