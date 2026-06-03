import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getProducts = async (
  limit = 12,
  skip = 0
) => {
  const response = await axios.get(
    `${API_URL}?limit=${limit}&skip=${skip}`
  );

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(
    `${API_URL}/${id}`
  );

  return response.data;
};