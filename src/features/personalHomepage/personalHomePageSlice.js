import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
  },
});

export const { fetchRepositories, fetchRepositoriesSuccess } = personalHomepageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) =>
  selectPersonalHomepageState(state).repositories;

export const selectRepositoriesStatus = (state) =>
  selectPersonalHomepageState(state).status;

export default personalHomepageSlice.reducer;
