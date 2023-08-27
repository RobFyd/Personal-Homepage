import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
} from "./personalHomePageSlice"; //fetchRepositoriesError
import { getRepositories } from "./personalHomePageApi";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
  yield delay(loadingDelay);
  const repositories = yield call(getRepositories, username);
  yield put(fetchRepositoriesSuccess(repositories));
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
