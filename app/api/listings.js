import apiClient from "./client";

const endPoint = "/listings";
const getListings = () => apiClient.get(endPoint);

export default {
  getListings,
};
