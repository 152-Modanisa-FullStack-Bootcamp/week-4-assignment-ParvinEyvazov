<template>
  <div class="favorites-container">
    <div class="favorite-video" v-for="video in videos" :key="video.id">
      <favorite-video :video="video"> </favorite-video>
    </div>
  </div>
</template>

<script>
import FavoriteVideo from "@/components/FavoriteVideo";
import API from "@/service/api";

export default {
  name: "FavoritePage",
  components: { FavoriteVideo },
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    // fetch video data
    const { data } = await API.getVideos();
    this.videos = data;
  },
};
</script>

<style scoped>
.favorites-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.favorite-video {
  width: 70%;
  margin: 20px 0px;
}
</style>