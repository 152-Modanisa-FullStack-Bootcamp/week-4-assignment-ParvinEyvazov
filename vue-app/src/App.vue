<template>
  <div id="app">
    <!-- header (favorite button & logo) -->
    <div class="favorite-container">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/youtube_logo1.png" height="80" alt="" /></div
      ></router-link>

      <span @click="goFavorite" class="favorite">Favorite</span>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // go to favorite screen with using "router in js" approach
    goFavorite() {
      let user_id = "bootcamp";
      this.$router.push({ path: `/favorite/${user_id}` });
    },
  },
  beforeCreate() {
    // change background of the body
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#181818;");
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 10px 0 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

#app {
  margin: 0;
  color: #f5f5f5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.favorite-container {
  height: 50px;
  margin: 0% 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 10px;
}

.logo {
  cursor: pointer;
}

.favorite {
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.3rem;
  border-radius: 10px;
  background-color: aliceblue;

  color: #181818;
}
</style>
