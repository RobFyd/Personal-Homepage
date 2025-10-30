import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const excludedRepositories = [
  "practice-in-js",
  "practice-in-react",
  "practice-in-ts",
  "BMI-calculator-in-React",
  "Currency-Converter-in-React",
  "Personal-Homepage",
  "react-redux",
  "react-redux-template",
  "RobFyd",
  "to-do-list-in-react-without-redux",
  "JavaScript30",
  "Employee-Management-System",
  "Roblox-Alicja",
  "Money-Exchanger",
  "Hangman",
  "Fix-It-Fast",
  "lang-box",
  "practice-in-react2",
  "react-project",
  "react-styling",
  "react-styling-Styled-Components",
  "react-styling-TailwindCSS",
  "To-Do-List",
  "Interpreter-tool",
  "Recipes",
  "employee-list",
  "modal",
  "zr-react-router",
  "Scad-project",
  "Card-React-Project",
  "hello-next",
  "zr-mini-project-next",
];

const preferredOrder = [
  "movies-browser-panama",
  "Shop-in-React",
  "To-Do-List-in-React",
  "Money-Exchanger-in-React",
  "Calculator-JS",
  "ThreeJS-Sphere",
  "Task-Tracker",
  "Tic-Tac-Toe-in-React",
  "BMI-Calculator",
  "Currency-Converter",
  "Homepage",
  "Exchange-Rate-Calculator",
];

export const getRepositories = (username) =>
  axios.get(`${githubAPIBaseURL}/users/${username}/repos`).then((response) => {
    const allRepositories = response.data;
    const filteredRepositories = allRepositories.filter((repo) => {
      return !excludedRepositories.includes(repo.name);
    });

    const sortedRepositories = filteredRepositories.sort((a, b) => {
      return preferredOrder.indexOf(a.name) - preferredOrder.indexOf(b.name);
    });

    return sortedRepositories;
  });

// import axios from "axios";

// const githubAPIBaseURL = "https://api.github.com";

// export const getRepositories = (username) =>
//   axios
//     .get(`${githubAPIBaseURL}/users/${username}/repos`)
//     .then((response) => response.data);
