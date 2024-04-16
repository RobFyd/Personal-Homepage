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
];

export const getRepositories = (username) =>
  axios.get(`${githubAPIBaseURL}/users/${username}/repos`).then((response) => {
    const allRepositories = response.data;

    const filteredRepositories = allRepositories.filter((repo) => {
      return !excludedRepositories.includes(repo.name);
    });

    return filteredRepositories;
  });







// import axios from "axios";

// const githubAPIBaseURL = "https://api.github.com";

// export const getRepositories = (username) =>
//   axios
//     .get(`${githubAPIBaseURL}/users/${username}/repos`)
//     .then((response) => response.data);
