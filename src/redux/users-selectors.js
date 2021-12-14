import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
  // return state.usersPage.users.filter((user) => true);
};

export const getUsersSelector = (state) => {
  // return     state.usersPage.users
  return getUsers(state).filter((user) => true);
};

export const getUsersSuperSelector = createSelector(getUsers, (users) => {
  return users.filter((user) => true);
});

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCarrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFatching;
};

export const getFollowingInProgres = (state) => {
  return state.usersPage.followingInProgres;
};
