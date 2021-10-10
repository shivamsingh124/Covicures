const puppeteer = require("puppeteer");
let usernames = require("./donor");
let usernamesneed = require("./needy");
const id = "@ShivamSinghMah7";
const pw = "trijal123";
let message = "";
let tweet = [];
message =
  "https://60df10a4c5f3c1dcbcb16a8a--covicure-chat-application.netlify.app";
for (let i = 0; i < usernames.length / 20 - 3; i++) {
  tweet.push(usernamesneed[i].user_id);
}
let tab;
(async function () {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  tab = pages[0];
  await tab.goto("https://twitter.com/explore");
  await tab.waitForTimeout(3000);
  try {
    await waitandclick(
      ".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",
      { visible: true }
    ); // Login
    await waitandclick(
      ".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0 .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0",
      { visible: true }
    );
    await tab.type(
      '.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[username_or_email]"]',
      id
    );
    await tab.type(
      '.css-901oao.r-1awozwy.r-1fmj7o5.r-6koalj.r-1qd0xha.r-1inkyih.r-16dba41.r-135wba7.r-bcqeeo.r-13qz1uu.r-qvutc0 input[name="session[password]"]',
      pw
    );
    await tab.click('div[role="button"]', { visible: true });
  } catch {
    console.log("error");
  }

  await waitandclick(
    'a[href="/compose/tweet"] .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0',
    { visible: true }
  );
  await tab.waitForTimeout(2000);
  await tab.type(
    ".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
    "Please Note : These People are Willing to Donate Covid Resources : " +
      tweet
  );
  await tab.waitForTimeout(15000);
  await waitandclick('div[data-testid="tweetButton"]', { visible: true });
  await waitandclick('div[data-testid="tweetButton"]', { visible: true });
  await tab.waitForTimeout(3000);
  for (let i = 0; i < usernamesneed.length; i++) {
    // Backspace
    try {
      await tab.waitForTimeout(2000);
      await search(usernamesneed[i].user_id);
      await console.log("Message Delivered To " + usernamesneed[i].user_id);
    } catch {
      await console.log(
        "Message NOT Delivered To " + usernamesneed[i].user_id
      );
      await tab.keyboard.down("Control");
      await tab.keyboard.press("A");
      await tab.keyboard.up("Control");
      await tab.keyboard.press("Backspace");
    }
  }
  await console.log("ALL MESSAGES DELIVERED.");
})();

async function waitandclick(selector) {
  await new Promise(async function (scb, fcb) {
    try {
      await tab.waitForSelector(selector, { visible: true, timeout: 5000 });
      await tab.click(selector);
      await scb();
    } catch {
      await fcb();
    }
  });
}

async function search(uid) {
  await new Promise(async function (scb, fcb) {
    await tab.waitForTimeout(2000);
    try {
      await tab.type(
        ".r-30o5oe.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-homxoj.r-poiln3.r-7cikom.r-1ny4l3l.r-xyw6el.r-641cr4.r-1dz5y72.r-fdjqy7.r-13qz1uu",
        uid
      ); // Search
      await tab.waitForTimeout(2000);
      await tab.click(
        ".css-18t94o4.css-1dbjc4n.r-1ny4l3l.r-ymttw5.r-1f1sjgu.r-o7ynqc.r-6416eg"
      ); // List Click
      await tab.waitForTimeout(2000);
      await waitandclick('div[aria-label="Message"]', { visible: true });
      await tab.waitForTimeout(2000); // Message
      await waitandclick(
        ".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
        { visible: true }
      ); // Input Box
      await tab.type(
        ".public-DraftStyleDefault-block.public-DraftStyleDefault-ltr",
        "Hi, We are from Team CoviCure. If You are Willing to Donate or are in Need of Covid Resources, then do Join our Covicure App for Covid Help & Assistance " +
          message
      );
      await tab.waitForTimeout(10000); // Messgage
      await tab.click(
        'path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]',
        { visible: true }
      );
      await tab.click(
        'path[d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"]',
        { visible: true }
      ); // Submit
      await waitandclick(
        'a[href="/explore"] .css-1dbjc4n.r-1awozwy.r-sdzlij.r-18u37iz.r-1777fci.r-dnmrzs.r-xyw6el.r-o7ynqc.r-6416eg',
        { visible: true }
      );
      await scb();
    } catch {
      await fcb();
    }
  });
}
