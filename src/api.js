const API_BASE_ADDRESS = "https://fakestoreapi.com";

export default class Api {
  static getUsers() {
    const uri = API_BASE_ADDRESS + "/products";

    return fetch(uri, {
      method: "GET",
    });
  }
}
