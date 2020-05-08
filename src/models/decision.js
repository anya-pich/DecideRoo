import axios from "axios";

export default class DecisionModel {

  static post(data) {
    return axios.post(`${process.env.REACT_APP_API_URL}/decisions`, data);
  }

  static getOne(id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/decisions/${id}`);
  }

  static update(data, id) {
    return axios.put(`${process.env.REACT_APP_API_URL}/decisions/${id}`, data);
  }

  static delete(id) {
    return axios.delete(`${process.env.REACT_APP_API_URL}/decisions/${id}`);
  }

  static getByAuthor(userId) {
    return axios.get(`${process.env.REACT_APP_API_URL}/decisions?u=${userId}`);
  }

}
