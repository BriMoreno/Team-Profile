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
        <style>
        html{
            display:flex;
            overflow:hidden;
            flex-wrap: wrap;
            scroll-behavior: smooth;
        }
       p, h1, h2, h4, li {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-align: center;
        }
        .column{
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            height: 100%;
        }
        .card-header-title{
            height:100px;
            width: 150px;
        }
        .list-item{
            display: flexbox;
            padding-top: 10px;
            width: 200px;
        }
       </style>
    </head>
    <body>
        <div class="columns">
            <div class="column">
                <div class="hero is-primary">
                    <h1 class="hero-body text-center">The Team Roster</h1>
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

// displaying the roster
const displayInfo = roster => {

    // display the manager
    const displayManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${manager.returnId()}</h2>
                <h4 class="card-header-title">${manager.role()}</h4>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${manager.returnName()}</li>
                    <li class="list-item">Email: <a href="mailto:${manager.returnEmail()}">${manager.returnEmail()}</a></li>
                    <li class="list-item">Office number: ${manager.returnOffice()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // displaying the engineer
    const displayEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-header-title">${engineer.returnId()}</h2>
                <h4 class="card-header-title">${engineer.role()}</h4>
            </div>
            <div class="card-body">
                <ul class="list">
                    <li class="list-item">ID: ${engineer.returnName()}</li>
                    <li class="list-item">Email: <a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</a></li>
                    <li class="list-item">GitHub: <a href="https://github.com/${engineer.returnHub()}" target="_blank" rel="noopener noreferrer">${engineer.returnHub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // displaying the intern
    const displayIntern = intern => {
        return `
        <div class="card">
            <div class="card-header card2">
                <h2 class="card-header-title">${intern.returnId()}</h2>
                <h4 class="card-header-title"></i>${intern.role()}</h4>
            </div>
            <div class="card-body card3">
                <ul class="list-group">
                    <li class="list-item">ID: ${intern.returnName()}</li>
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