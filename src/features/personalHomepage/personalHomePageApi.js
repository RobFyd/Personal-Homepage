import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const excludedRepositories = [
  "practise-in-js",
  "practise-in-react",
  "BMI-calculator-in-React",
  "Currency-Converter-in-React",
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
