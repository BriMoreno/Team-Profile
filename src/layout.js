//export to make the HTML page
module.exports = roster => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title> Team Roster</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
       
    </head>
    <body>
        <div class="columns">
            <div class="column">
                <div class="hero is-info col-12 mb-3">
                    <h1 class="text-center">The Team Roster</h1>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="col-12 is-flex is-justify-content-center">
                    ${displayInfo(roster)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

// Create roster Profile
const displayInfo = roster => {

    // Create Manager Profile
    const displayManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${manager.returnName()}</h2>
                <h4 class="card-header-title">${manager.role()}</h4>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${manager.returnID()}</li>
                    <li class="list-item">Email: <a href="mailto:${manager.returnEmail()}">${manager.returnEmail()}</a></li>
                    <li class="list-item">Office number: <a href="tel:${manager.returnOffice()}">${manager.returnOffice()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // Create Engineer Profile
    const displayEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.returnName()}</h2>
                <h4 class="card-title">${engineer.role()}</h4>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${engineer.returnID()}</li>
                    <li class="list-item">Email: <a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</a></li>
                    <li class="list-item">GitHub: <a href="https://github.com/${engineer.returnHub()}" target="_blank" rel="noopener noreferrer">${engineer.returnHub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // Create Intern Profile
    const displayIntern = intern => {
        return `
        <div class="card">
            <div class="card-header card2">
                <h2 class="card-title">${intern.returnName()}</h2>
                <h4 class="card-title"></i>${intern.role()}</h4>
            </div>
            <div class="card-body card3">
                <ul class="list-group">
                    <li class="list-item">ID: ${intern.returnID()}</li>
                    <li class="list-item">Email: <a href="mailto:${intern.returnEmail()}">${intern.returnEmail()}</a></li>
                    <li class="list-item">School: ${intern.returnSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(roster
        .filter(team => team.role() === 'Manager')
        .map(manager => displayManager(manager))
    );
    html.push(roster
        .filter(team => team.role() === 'Engineer')
        .map(engineer => displayEngineer(engineer))
        .join("")
    );
    html.push(roster
        .filter(team => team.role() === 'Intern')
        .map(intern => displayIntern(intern))
        .join("")
    );

    return html.join("");
}