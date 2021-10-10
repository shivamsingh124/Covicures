const puppeteer = require("puppeteer");
let usernames = require("./donor");
let usernamesneed = require("./needy");
let tab;

(async function () {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  tab = pages[0];
  let j = 0;
  await tab.goto(
    "file:///D:/Resume/CoviCure/CoviCure_Automation/diplay.html"
  );
  await tab.waitForTimeout(2000);
  let allTweetsContent = await tab.$$("#donor tr th");

  for (let i = 0; i <= usernames.length; i++) {
    try {
      await allTweetsContent[i].click();
      await tab.type("th", usernames[i].user_id);
    } catch {
      console.log("Finished");
      break;
    }
  }
  let allTweetsContent1 = await tab.$$("#need tr th");

  for (let i = 0; i <= usernames.length; i++) {
    try {
      await allTweetsContent1[i].click();
      await tab.type(
        "th",
        usernames[Math.floor(Math.random() * 49 + 1)].user_id
      );
    } catch {
      console.log("Finished");
      break;
    }
  }
  let allTweetsContent2 = await tab.$$("#need1 tr th");
  for (let i = 0; i <= usernames.length; i++) {
    try {
      await allTweetsContent2[i].click();
      await tab.type("th", usernamesneed[i].user_id);
    } catch {
      console.log("Finished");
      break;
    }
  }
})();
