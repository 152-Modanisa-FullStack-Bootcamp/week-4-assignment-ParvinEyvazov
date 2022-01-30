const { Given, When, Then } = require("cucumber");
const openUrl = require("../support/action/openUrl");

Given("that User is on Video Site Project's HomePage", async function () {
  await openUrl.call(this, "http://localhost:8080/");
});

When("User clicks {string} video", async function (title) {
  // class selector of the 1 video field
  const videos_selector = ".video";

  // get ALL video names
  const video_names = await this.page.$$eval(
    videos_selector,
    (items, title) => {
      const names = items.find(
        (item) => item.querySelector(".title").textContent == title
      );

      return names;
    },
    title
  );

  console.log(`video_names`, video_names);
});

Then("User should see watch url correctly", function () {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});
