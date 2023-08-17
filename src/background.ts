import mermaid from "mermaid";

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  
  //受け取った値にテキストを追加する。
  var responseMessage = message.text + "：backgroundで受け取ったよ：";
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("バックグラウンド");
    //content_script.jsに値を返す
    chrome.tabs.sendMessage(1, { message: responseMessage });
  });
});
