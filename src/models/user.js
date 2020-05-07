import axios from "axios";

export default class UserModel {
  static update(data) {
    let request = axios.put(
      `${process.env.REACT_APP_API_URL}/users/${data.user}`,
      data
    );
    return request;
  }

  static getOne(id) {
    let request = axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`);
    return request;
  }

  static auth(data, path) {
    let request = axios.post(
      `${process.env.REACT_APP_API_URL}/auth${path}`,
      data,
      { withCredentials: true }
    );
    return request;
  }

  static logout() {
    let request = axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      withCredentials: true,
    });
    return request;
  }
}
