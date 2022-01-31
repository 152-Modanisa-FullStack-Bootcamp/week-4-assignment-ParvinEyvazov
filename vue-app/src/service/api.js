import axios from "axios";

export class API {
  constructor(url) {
    if (url === undefined || url === "") {
      url = process.env.VUE_APP_BASE_API_URL;
    }
    if (url.endsWith("/")) {
      url = url.substr(0, url.length - 1);
    }
    this.url = url;
  }

  withPath(path) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    return `${this.url}${path}`;
  }

  async getVideos() {
    const videos = await axios.get(
      "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
    );

    return videos;
  }
}

export default new API(process.env.VUE_APP_BASE_API_URL);
