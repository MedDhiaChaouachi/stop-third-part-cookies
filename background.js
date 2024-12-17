chrome.runtime.onInstalled.addListener(() => {
  chrome.privacy.websites.thirdPartyCookiesAllowed.set({ value: false }, () => {
    console.log("Third-party cookies have been disabled.");
  });
});
d;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "disableThirdPartyCookies") {
    chrome.privacy.websites.thirdPartyCookiesAllowed.set(
      { value: false },
      () => {
        sendResponse({ result: "Third-party cookies disabled" });
      }
    );
    return true; // Will respond asynchronously
  }
});
