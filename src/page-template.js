const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateManager = Manager => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${Manager.getName()}</h2>
            <h3 class="card-title">${Manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${Manager.getId()}</p>
            <p class="card-text">${Manager.getEmail()}</p>
            <p class="card-text">${Manager.getOfficeNum()}</p>
        </div>
    </div>
    `;
};

const generateEngineer = engineer => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${engineer.getId()}</p>
            <p class="card-text">${engineer.getEmail()}</p>
            <p class="card-text">${engineer.getGithub()}</p>
        </div>
    </div>
    `;
};

const generateIntern = intern => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="card-text">${intern.getId()}</p>
            <p class="card-text">${intern.getEmail()}</p>
            <p class="card-text">${intern.getSchool()}</p>
        </div>
    </div>
    `;
}

module.exports = associates => {
    const [ manager, engineer, intern ] = associates;
    console.log(manager);
    console.log(engineer);
    console.log(intern);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap-grid.min.css" integrity="sha512-Xj2sd25G+JgJYwo0cvlGWXoUekbLg5WvW+VbItCMdXrDoZRWcS/d40ieFHu77vP0dF5PK+cX6TIp+DsPfZomhw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

    <body>
        <header>
            <div class='container flex-row justify-space-between align-center py-3'>
                <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class='container my-5'>
            ${generateManager(manager)}
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
            
        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
        </footer>
    </body>
    </html>
    `;
};