import apiClient from "./client";

const endPoint = "/listings";
const getListings = (a, b, c) => apiClient.get(endPoint);

export default {
  getListings,
};
