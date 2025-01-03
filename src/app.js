import GetData from "./lib/service.js";

(async () => {
  try {
    const result = await GetData(1);
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
