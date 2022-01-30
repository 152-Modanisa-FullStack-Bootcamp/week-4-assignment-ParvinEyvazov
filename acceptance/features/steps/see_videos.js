const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector");

Given("that User goes to Video Site Project's HomePage", async function () {
  await openUrl.call(this, "http://localhost:8080/");
});

When("page is loaded", async function () {
  await waitForSelector.call(this, ".favorite");
});

Then("User can see some of videos' title like", async function (dataTable) {
  // class selector of the 1 video field
  const videos_selector = ".video";

  // get ALL video names
  const video_names = await this.page.$$eval(videos_selector, (items) => {
    const names = items.map((item) => item.querySelector(".title").textContent);

    return names;
  });

  let contains_all = true;
  let found = [];

  // compare ALL video names contains video names comes from acceptance
  dataTable.rawTable.forEach((data) => {
    video_names.forEach((video_name) => {
      if (video_name.includes(data[0])) {
        found.push(data[0]);
      }
    });
  });

  // if some of them contains (not all), throw error
  if (found.length < dataTable.rawTable.length) {
    contains_all = false;
  }

  // assert video names contains all expected names
  assert.equal(true, contains_all);
});
