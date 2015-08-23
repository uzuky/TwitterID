javascript:(function () {
  var D = document,
    L = D.location.href,
    H = D.documentElement.innerHTML,
    I = D.createElement('div');
  var V = 'v20140901',
    UA, PF, SR, ID, YO;
  if (L.match(/^https:\/\/twitter\.com\/[0-9a-zA-Z_]+$/)) {
    UA = D.getElementsByClassName("ProfileNav"),
    SR = UA[0].innerHTML,
    ID = SR.replace(/(?:.|\n|\r|\u2028|\u2029)+data-user-id="([0-9]+)"(?:.|\n|\r|\u2028|\u2029)+/g, '$1');
  } else if (L.match(/^https:\/\/mobile\.twitter\.com\/[0-9a-zA-Z_]+$/)) {
    PF = D.getElementsByClassName("profile"),
    SR = PF[0].outerHTML,
    ID = SR.replace(/(?:.|\n|\r|\u2028|\u2029)+data-id="([0-9]+)"(?:.|\n|\r|\u2028|\u2029)+/g, '$1');
  } else {
    alert('ユーザーのトップページで実行してね\n' + V);
    YO = NO;
  }
  if (YO != 'NO') {
    I.innerHTML = '<div><b><span title="閉じる" onClick="var c = &quot;numeric-id&quot;,close = document.getElementById(c);close.parentNode.removeChild(close);" style="float:right; cursor:pointer; font-size:large; position:relative; bottom:10px; left:5px; color:#FFF;">×</span>UserID</b></div><input type="text" value="https://twitter.com/intent/user?user_id=' + ID + '" readonly="true" onclick="this.select();"><br><input type="text" value="' + ID + '" readonly="true" onclick="this.select();"><br><input type="button" value="開く" onClick="window.open(\'https://twitter.com/intent/user?user_id=' + ID + '\',\'_blank\',\'width=650,height=450\');"><br><small>' + V + '</small>';
    I.style.color = 'rgb(0,0,0)';
    I.style.textAlign = 'center';
    I.style.padding = '10px';
    I.style.position = 'fixed';
    I.style.zIndex = '9999';
    I.style.fontSize = '12px';
    I.style.border = '2px solid black';
    I.style.right = '20px';
    I.style.top = '50px';
    I.style.background = 'rgba(128,128,128,0.5)';
    I.setAttribute("id", "numeric-id");
    document.body.appendChild(I);
  }
 })();
