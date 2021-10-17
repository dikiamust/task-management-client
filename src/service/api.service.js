import http from "../http-common";

class ApiService {
  login(data) {
    return http.post("/auth/login", data);
  }

  addEmployee(data, access_token) {
    return http.post(
      "/employees/create",
      {
        headers: {access_token: `${access_token}`},
      },
      data
    );
  }

  allEmployee(data, access_token) {
    return http.get(
      "/employees/all",
      {
        headers: {access_token: `${access_token}`},
      },
      data
    );
  }

  createProduct(data, access_token) {
    return http.post(
      "/inventory/products",
      {
        headers: {access_token: `${access_token}`},
      },
      data
    );
  }

  getAllProduct(access_token) {
    return http.get("/inventory/products", {
      headers: {access_token: `${access_token}`},
    });
  }

  getDetailProduct(id, access_token) {
    return http.get(`/inventory/products${id}`, {
      headers: {access_token: `${access_token}`},
    });
  }

  updateProduct(id, data, access_token) {
    return http.put(
      `/inventory/products/update/${id}`,
      {
        headers: {access_token: `${access_token}`},
      },
      data
    );
  }

  deleteProduct(id, access_token) {
    return http.delete(`/inventory/products/${id}`, {
      headers: {access_token: `${access_token}`},
    });
  }
}

export default new ApiService();
