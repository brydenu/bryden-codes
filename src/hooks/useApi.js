import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
}

export async function sendEmail(route, reqBody) {
  const url = BASE_URL + route;
  return axios.post(url, reqBody, config);
}

export async function getAllPosts() {
  const url = BASE_URL + "/blog";
  return axios.get(url, {}, config);
}

export async function getPost(id) {
  const url = BASE_URL + "/blog/post?id=" + id;
  return axios.get(url, {}, config);
}

export function useApi() {
  return { sendEmail, getAllPosts, getPost };
}