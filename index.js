// imported required modules
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./src/generateHtml");

// added prompts for getting inputs from user
console.log("Welcome to the team generator");
console.log("Use 'npm run reset' to reset the dist/folder\n");

console.log("Please build your team👥");
// creating a class 'team' which will holds the 'team member' details and manages the inputs given by the user
class Team {
  constructor() {
    this.teamMembers = [];
    // this.memberType will hold the employee type selected by the manager and the respective prompts will be triggered based on this
    this.memberType = "Manager";
  }
  //    keeping all the prompt questions inside a function so that I can use it as a util function
  getQuestions() {
    if (this.memberType === "Manager") {
      inquirer
        .prompt([
          {
            // question's for manager
            type: "input",
            message: "What is your Manager's name?",
            name: "managerName",
            validate: (managerName) => {
              if (managerName.length > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Manager's name");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is the team Manager's ID?",
            name: "managerId",
            validate: (managerId) => {
              if (parseInt(managerId) > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Manager's Id as number");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is the team Manager's email?",
            name: "managerEmail",
            validate: (managerEmail) => {
              // Regex is given in if statement to validate the email
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  managerEmail
                )
              ) {
                return true;
              } else {
                console.log("\n Please enter valid Manager's email");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is the team Manager's office number",
            name: "managerOfficeNumber",
            validate: (managerOfficeNumber) => {
              if (parseInt(managerOfficeNumber) > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Manager's office number");
                return false;
              }
            },
          },

          {
            type: "list",
            choices: [
              "Engineer",
              "Intern",
              "I don't want to add any more team members",
            ],
            message: "What type of team member would you like to add?",
            name: "typeOfTeamMember",
          },
        ])

        .then((managerResponse) => {
          this.memberType = managerResponse.typeOfTeamMember;
          const managerDetails = new Manager(
            managerResponse.managerName,
            managerResponse.managerId,
            managerResponse.managerEmail,
            managerResponse.managerOfficeNumber
          );
          this.teamMembers.push(managerDetails);
          this.getQuestions();
        });
    } else if (this.memberType === "Engineer") {
      inquirer
        .prompt([
          // questions for engineer
          {
            type: "input",
            message: "What is your Engineer's name?",
            name: "engineerName",
            validate: (engineerName) => {
              if (engineerName.length > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Engineer's name");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Engineer's ID?",
            name: "engineerId",
            validate: (engineerId) => {
              if (parseInt(engineerId) > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Engineer's Id as number");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Engineer's email?",
            name: "engineerEmail",
            validate: (engineerEmail) => {
              // Regex is given in if statement to validate the email
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  engineerEmail
                )
              ) {
                return true;
              } else {
                console.log("\n Please enter valid Engineer's email");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Engineer's GitHub username?",
            name: "engGitHub",
            validate: (engGitHub) => {
              if (engGitHub.length > 0) {
                return true;
              } else {
                console.log("\n Please enter valid GitHub user name");
                return false;
              }
            },
          },

          {
            type: "list",
            choices: [
              "Engineer",
              "Intern",
              "I don't want to add any more team members",
            ],
            message: "What type of team member would you like to add?",
            name: "typeOfTeamMember",
          },
        ])
        .then((engineerResponse) => {
          this.memberType = engineerResponse.typeOfTeamMember;
          const engineerDetails = new Engineer(
            engineerResponse.engineerName,
            engineerResponse.engineerId,
            engineerResponse.engineerEmail,
            engineerResponse.engGitHub
          );
          this.teamMembers.push(engineerDetails);
          this.getQuestions();
        });
    } else if (this.memberType === "Intern") {
      inquirer
        .prompt([
          // question's for intern
          {
            type: "input",
            message: "What is your Intern's name?",
            name: "internName",
            validate: (internName) => {
              if (internName.length > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Intern's name");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Intern's ID?",
            name: "internId",
            validate: (internId) => {
              if (parseInt(internId) > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Intern's Id as number");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Intern's email?",
            name: "internEmail",
            validate: (internEmail) => {
              // Regex is given in if statement to validate the email
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  internEmail
                )
              ) {
                return true;
              } else {
                console.log("\n Please enter valid Intern's email");
                return false;
              }
            },
          },

          {
            type: "input",
            message: "What is your Intern's school?",
            name: "internSchool",
            validate: (internSchool) => {
              if (internSchool.length > 0) {
                return true;
              } else {
                console.log("\n Please enter valid Intern's school");
                return false;
              }
            },
          },

          {
            type: "list",
            choices: [
              "Engineer",
              "Intern",
              "I don't want to add any more team members",
            ],
            message: "What type of team member would you like to add?",
            name: "typeOfTeamMember",
          },
        ])
        .then((internResponse) => {
          this.memberType = internResponse.typeOfTeamMember;
          const internDetails = new Intern(
            internResponse.internName,
            internResponse.internId,
            internResponse.internEmail,
            internResponse.internSchool
          );
          this.teamMembers.push(internDetails);
          this.getQuestions();
        });
    } else {
      fs.writeFile("dist/index.html", generateHtml(this.teamMembers), (error) =>
        error
          ? console.log(error)
          : console.log("Created index.html inside dist folder")
      );
    }
  }
}
// initializing the class and the function below
const team = new Team();
team.getQuestions();
