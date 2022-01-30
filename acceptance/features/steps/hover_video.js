const { When, Then } = require("cucumber");
const assert = require("assert");

// Given is same with click_video.js

When("User hovers {string} video", async function (title) {
  // class selector of the 1 video field
  const videos_selector = ".video-container";

  // get all containers
  const video_containers = await this.page.$$(videos_selector);

  let selected_video;

  // find the specific video container by comparing title
  for (const video_container of video_containers) {
    let video_name = await video_container.$(".title");

    const textContent = await this.page.evaluate(
      (video_name) => video_name.textContent,
      video_name
    );

    if (textContent == title) {
      selected_video = video_container;
      break;
    }
  }

  // get the url of the image before HOVER
  let video_img = await selected_video.$("img");
  let src = await video_img.getProperty("src");
  this.previous_url = await src.jsonValue();

  await selected_video.hover();

  // get the url of the image after HOVER
  video_img = await selected_video.$("img");
  src = await video_img.getProperty("src");
  this.current_url = await src.jsonValue();
});

Then("User should see hovered image", function () {
  // expecting that the previous URL and current URL to be different
  assert(
    this.previous_url != this.current_url,
    `The source of the image must be updated on hover.`
  );
});
