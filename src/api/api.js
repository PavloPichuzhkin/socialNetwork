import * as axios from "axios";
// import { follow, toggleFollowingProgressAC, unFollow } from "../redux/users-reduser";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instance = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    "API-KEY": "7d1e2dd8-98a9-46ba-8371-ecdbd906d57f",
  },
});
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 1) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unFollow(userId) {
    return instance.delete(
      // `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      `follow/${userId}`
    );
  },
  getProfile(userId) {
    console.warn("Old mathod!!! Please use mathod profileAPI.getProfile");

    return profileAPI.getProfile(userId);
  },
  setUserData() {
    console.warn("Old mathod!!! Please use mathod authAPI.me()");

    return authAPI.me();
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      // console.log(response.data);
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => {
      // console.log(response);
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        console.log(response);
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      console.log(response);
      return response.data;
    });
  },
};
