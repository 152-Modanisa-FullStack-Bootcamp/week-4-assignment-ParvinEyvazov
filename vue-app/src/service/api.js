import axios from "axios";

// Getting videos with usign axios
export async function getVideos() {
  const videos = await axios.get(
    "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos"
  );

  return videos;
}
