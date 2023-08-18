import mermaid from "mermaid";
import $ from "jquery";

// 初期処理
window.onload = async () => {
    init();
    mermaid.initialize({ startOnLoad: false });

  };


  const init = () => {
    console.log("スタート")
    // クリック時
    $("#copy").on('click', () => {
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id ?? 0, {message: '選択範囲頂戴'}, (item: string) => {
        if(!item){
          alert("選択されていません。")
          return;
        }
        console.log(item);
        $('#target').replaceWith($(`<pre class="mermaid">${item}</pre>`));
        convertToMarmeidSvg();
      })
    })
  })
  }


// テキストを変換する。
const convertToMarmeidSvg = async (): Promise<void> => {
  await mermaid.run({
    querySelector: ".mermaid",
  });
};