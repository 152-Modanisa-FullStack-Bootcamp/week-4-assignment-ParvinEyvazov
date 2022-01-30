const { Given, When, Then } = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkUrlContains = require("../support/check/checkUrlContains");

Given("that User is on Video Site Project's HomePage", async function () {
  await openUrl.call(this, "http://localhost:8080/");
});

When("User clicks {string} video", async function (title) {
  // class selector of the 1 video field
  const videos_selector = ".video-container";

  // get ALL video names
  await this.page.$$eval(
    videos_selector,
    async (items, title) => {
      const specific_title = items.find(
        (item) => item.querySelector(".title").textContent == title
      );
      await specific_title.click();
    },
    title
  );

  // can be more query parameters
  // from http://localhost:8080/watch?id=2 --> [`id=2`]
  let query_params_arr = this.page.url().split("?").slice(1);

  // finding the query param that is for video id AND set general
  query_params_arr.find((param) => {
    if (param.split("=")[0] == "id") {
      this.video_id = param.split("=")[1];
      return true;
    }
    return false;
  });
});

Then("User should see watch url correctly", async function () {
  const not = false;

  // if current url contains id=2 string
  await checkUrlContains.call(this, not, `id=${this.video_id}`);
});
