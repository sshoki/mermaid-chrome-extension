chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let selection;
  console.log(request.message);

  // 画面で選択されている部分を文字列で取得する
  if(window.getSelection){
    selection = window.getSelection()?.toString();
  }else{
    selection = '';
  }
  sendResponse(selection);
});