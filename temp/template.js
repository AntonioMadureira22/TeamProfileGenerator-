const pageTemplate = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
      <title>That Is My Team</title>
  </head>
  <body>
  <header>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
              <h1 class="display-4 text-center">My Team</h1>
          </div>
      </div>
  </header>
  <main>
      <div class="container">
          <div class="row justify-content-center" id="cards">
              ${employeeCards}
          </div>
      </div>
  </main>
  </body>
  </html>
  `;
  };
  module.exports = pageTemplate;