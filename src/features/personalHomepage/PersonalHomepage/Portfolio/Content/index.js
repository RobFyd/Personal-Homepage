import { Repositories } from "./Repositories";
// import {Loading} from "./Loading";
// import {Error} from "./Error";

const Content = ({ status, repositories }) => {
  switch (status) {
    case "initial":
      return null;

    case "success":
      return <Repositories repositories={repositories} />;
      
  }
};

export default Content;