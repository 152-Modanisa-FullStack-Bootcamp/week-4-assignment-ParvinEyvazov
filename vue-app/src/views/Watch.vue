<template>
  <div class="watch-container">
    <h1>Watch</h1>

    <span>Video id > {{ id }}</span>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  data() {
    return {
      id: ``,
    };
  },
  mounted() {
    this.id = this.$route.query.id;
  },
};
</script>

<style>
.watch-container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>