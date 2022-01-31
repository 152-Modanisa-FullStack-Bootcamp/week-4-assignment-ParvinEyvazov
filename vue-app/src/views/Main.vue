<template>
  <div class="main-container">
    <div class="videos">
      <div class="video" v-for="video in videos" :key="video.id">
        <recommended-video :video="video" />
      </div>
    </div>
  </div>
</template>

<script>
import RecommendedVideo from "@/components/RecommendedVideo";
import API from "@/service/api";

export default {
  name: "MainPage",
  components: { RecommendedVideo },
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

<style>
.main-container {
  margin: 0px 10%;
}

.videos {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.video {
  margin: 20px 8px;
}
</style>
