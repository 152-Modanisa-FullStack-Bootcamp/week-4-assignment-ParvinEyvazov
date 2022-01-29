const assert = require("assert");
const { Given, When, Then } = require("cucumber");

Given("that User goes to Video Site Project's HomePage", function () {
  // Write code here that turns the phrase above into concrete actions
  return true;
});

When("page is loaded", function () {
  // Write code here that turns the phrase above into concrete actions
  return true;
});

Then("User can see some of videos' title like", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log(dataTable.rawTable);
  return true;
});
