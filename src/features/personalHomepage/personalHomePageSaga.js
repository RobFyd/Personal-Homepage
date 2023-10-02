import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} from "./personalHomePageSlice";
import { getRepositories, excludedRepositories } from "./personalHomePageApi";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    repositories.filter((repo) => {
      return !excludedRepositories.includes(repo.name);
    });
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
