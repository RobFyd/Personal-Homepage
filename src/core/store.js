import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import personalHomepageReducer from "../features/personalHomepage/personalHomePageSlice";
import themeReducer from "../common/themeSlice";
// import saga from "./saga";

const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
  });
  
  export default store;

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     personalHomepage: personalHomepageReducer,
//     theme: themeReducer,
//   },
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(saga);

// export default store;

