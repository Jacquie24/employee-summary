const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];


init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init () {

    inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add a new team member?",
        name: "newEntry",
      },
    ])
    .then(({ newEntry }) => {
      if (newEntry) {
        createTeam();
      } else {
        //   render(employees);
        //   console.log(employees);
  

    //   writeFile(outputPath, response);
          fs.writeFile(outputPath, render(employees), "utf8", (err =>
            err ? console.error(err) : console.log("Your team has been generated!")));

          return;
          
      }
    })
}
    // } catch(err) {
    //   console.log(err); // log error if try does not complete
    // }
    


function createTeam() {
inquirer
.prompt([
    {
        type: "list",
        message: "What is the employee role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
    },
]).then(response => {
    switch(response.role)
{
    case "Manager":
        newManager();
        break;

        case "Engineer":
            newEngineer();
            break;

            case "Intern":
                newIntern();
                break;
}})

function newManager() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Manager name?",
            name: "mgrName",
          },
          {
            type: "input",
            message: "What is the Manager email address?",
            name: "mgrEmail",
          },
          {
            type: "input",
            message: "What is the Manager ID number?",
            name: "mgrId",
          },    
          {
            type: "input",
            message: "What is the Manager's office number?",
            name: "mgrOfficeNumber",
            
          },
    ]).then(response => {
        console.log(response);
        const manager = new Manager(response.mgrName, response.mgrEmail, response.mgrId, response.mgrOfficeNumber);
        employees.push(manager);
        init();
    })
}

function newEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Engineer name?",
            name: "engName",
          },
          {
            type: "input",
            message: "What is the Engineer email address?",
            name: "engEmail",
          },
          {
            type: "input",
            message: "What is the Engineer ID number?",
            name: "engId",
          },    
          {
            type: "input",
            message: "What is the Engineer GitHub user name?",
            name: "engGithub",
          },

    ]).then(response => {
        console.log(response);
        const engineer = new Engineer(response.engName, response.engEmail, response.engId, response.engGithub);
        employees.push(engineer);
        init();
    })
}

function newIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Intern name?",
            name: "intName",
          },
          {
            type: "input",
            message: "What is the Intern email address?",
            name: "intEmail",
          },
          {
            type: "input",
            message: "What is the Intern ID number?",
            name: "intId",
          },    
          {
            type: "input",
            message: "What school does the Intern currently attend?",
            name: "intSchool",
          },
    ]).then(response => {
        console.log(response);
        const intern = new Intern(response.intName, response.intEmail, response.intId, response.intSchool);
        employees.push(intern);
        init();
    })
}

}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// function writeFile(fileName, employees) {
  
//     fs.writeFile(fileName, render(employees), (err) =>
//       err ? console.error(err) : console.log("Success!")
//     );
//   }
  

    //   writeFile(outputPath, response);
    // }).catch((err) => {
    //     throw err;
    // });

  
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
