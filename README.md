📸 Visual Testing with Cypress and Percy

- This project demonstrates how to implement visual regression testing using Cypress and Percy. Visual regression testing helps ensure that your application's UI remains consistent and free from unintended changes during development.

🧐 What is Visual Testing?

- Visual testing (or visual regression testing) captures screenshots of your application's UI and compares them over time to detect unintended changes. It is especially useful for identifying visual issues such as:

1. Layout shifts
2. CSS/styling bugs
3. Responsive design problems

By integrating visual testing into your workflow, you can:

✅ Catch visual bugs early
✅ Ensure UI consistency across browsers/devices
✅ Maintain confidence when refactoring or updating UI

📁 Project Structure

| File/Folder         | Description                      |
| ------------------- | -------------------------------- |
| `cypress/`          | End-to-end test specifications   |
| `cypress.config.js` | Cypress configuration            |
| `package.json`      | Project dependencies and scripts |
| `percy.yml`         | Percy configuration              |
| `README.md`         | Project documentation            |

⚙️ Prerequisites
Before setting up the project, make sure you have the following installed:

1. Node.js (v14 or higher)
2. npm (comes with Node.js)
3. Git

🔐 Also, sign up at https://percy.io, create a new project, and obtain your Percy Token.

🚀 Setup Instructions
1. Clone the Repository
git clone https://github.com/alineslopes/Visual-Testing.git
cd Visual-Testing

2. Install Dependencies
npm install

3. Install Cypress
npx cypress install

4. Install Percy CLI
npm install -g @percy/cli

5. Set the Percy Token
Use your Percy token from https://percy.io

On Windows (PowerShell): $env:PERCY_TOKEN = "your_token_here"

🧪 Run the Visual Tests
To run your tests with visual snapshotting enabled:
npx percy exec -- npx cypress run
After the test run, visit your Percy dashboard to review and approve the visual changes:
👉 https://percy.io
![image](https://github.com/user-attachments/assets/286056ce-b51f-4fa2-a652-dc19901ca38e)


📚 Resources
Percy Docs, 
Cypress Docs, 
GitHub Project.


