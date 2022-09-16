import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      const respons = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return respons.data;
    } catch (error) {
      console.log(error);
    }
  }
}
