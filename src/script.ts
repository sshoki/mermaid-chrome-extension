import mermaid from "mermaid";
import $ from "jquery";

window.onload = async () => {
  mermaid.initialize({ startOnLoad: false });
  console.log("動いたよ");
  await convertToMermaidText();
  await convertToMarmeidSvg();
};

const targetClassName = ".lang-mermaid";

// Github用のテスト
const targetTagFprGoithub = "pre[lang='mermaid']";

// マーメイドテキストに変換
const convertToMermaidText = async (): Promise<void> => {
  // 該当のデータを取得できるクラスを指定。
  var targetText = "";
  $(targetClassName).each((index, elem) => {
    var text = $(elem).text();
    console.log(text);
    // targetText = text;
    $(elem).replaceWith($(`<pre class="mermaid">${text}</pre>`));
  });
  // const { svg } = await mermaid.render(targetClassName, targetText);

  // var element = document.querySelector(".mermaid");
  // if (element) element.innerHTML = svg;
};

// マーメイドテキストをsvgに変換
const convertToMarmeidSvg = async (): Promise<void> => {
  // mermaid.initialize({ startOnLoad: true });
  await mermaid.run({
    querySelector: ".mermaid",
  });
};
