import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 494,
  site: "testingdemo",
  domains: ["testingdemo.deco.site"],
});