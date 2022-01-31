import { pactWith } from "jest-pact";
import { Matchers } from "@pact-foundation/pact";
const { eachLike, like, integer } = Matchers;
import { getVideos } from "@/service/api";

pactWith({ consumer: "Frontend", provider: "Json Server" }, (provider) => {
  describe("videos", () => {
    test("get videos", async () => {
      await provider.addInteraction({
        state: "Get video list successfully",
        uponReceiving: "a request for video list",
        withRequest: {
          method: "GET",
          // path: provider.mockService.baseUrl + "/videos", // be carefull
          path:
            "https://my-json-server.typicode.com/modanisa/bootcamp-video-db" +
            "/videos",
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: {
            data: eachLike({
              id: like(1),
              videoAddress: like("https://www.youtube.com/watch?v=FXpIoQ_rT_c"),
              coverImage: like(
                "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp"
              ),
              hoverImage: like(
                "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp"
              ),
              title: like("Vue.js Course for Beginners [2021 Tutorial]"),
              viewCount: integer(254),
              publishDateInMonth: integer(4),
              ownerImage: like(
                "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj"
              ),
              ownerName: like("freeCodeCamp.org"),
              description: like("Learn Vue 3 by in this full course."),
            }),
          },
        },
      });

      let res = await getVideos();
    });
  });
});
/*
{
    "id": 1,
    "videoAddress": "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
    "coverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-cover.webp",
    "hoverImage": "https://raw.githubusercontent.com/modanisa/bootcamp-video-db/main/video-images/1-hover.webp",
    "title": "Vue.js Course for Beginners [2021 Tutorial]",
    "viewCount": 254,
    "publishDateInMonth": 4,
    "ownerImage": "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj",
    "ownerName": "freeCodeCamp.org",
    "description": "Learn Vue 3 by in this full course. Vue.js is an open-source model–view–view model front end JavaScript framework for building user interfaces and single-page applications."
  }

*/
