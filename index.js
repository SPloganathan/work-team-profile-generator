// imported required modules
const inquirer = require("inquirer");
const fs = require("fs");

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
          },

          {
            type: "input",
            message: "What is the team Manager's ID?",
            name: "managerId",
          },

          {
            type: "input",
            message: "What is the team Manager's email?",
            name: "managerEmail",
          },

          {
            type: "input",
            message: "What is the team Manager's office number",
            name: "managerOfficeNumber",
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
          },

          {
            type: "input",
            message: "What is your Engineer's ID?",
            name: "engineerId",
          },

          {
            type: "input",
            message: "What is your Engineer's email?",
            name: "engineerEmail",
          },

          {
            type: "input",
            message: "What is your Engineer's GitHub username?",
            name: "engGitHub",
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
          },

          {
            type: "input",
            message: "What is your Intern's ID?",
            name: "internId",
          },

          {
            type: "input",
            message: "What is your Intern's email?",
            name: "internEmail",
          },

          {
            type: "input",
            message: "What is your Intern's school?",
            name: "internSchool",
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
          this.getQuestions();
        });
    } else {
      fs.writeFile("dist/index.html", "hello", (error) =>
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
