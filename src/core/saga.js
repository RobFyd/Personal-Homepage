import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomePageSaga";

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}
