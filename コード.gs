function ToArticleList() {
  var TeamSeat = SpreadsheetApp.openById('').getSheetByName('');
  var TSrow = TeamSeat.getLastRow();
  var TSrange = TeamSeat.getRange(3,1,TSrow-2, 22).getValues();//シート全体
  var NewZone = TeamSeat.getRange(3,1,TSrow-2, 1).getValues();//新規部分一列(データ数カウントの参考)
  var ReZone = TeamSeat.getRange(3,13,TSrow-2, 1).getValues();//リライト部分一列(データ数カウントの参考)
  var NewRow = NewZone.filter(String).length;//新規部分データ行数
  var ReRow = ReZone.filter(String).length;//リライト部分データ行数
  //チームシートの新規記事のデータを入れる箱
  var DataNew =[];
  //チームシートのリライト記事のデータを入れる箱
  var DataRe =[];
  //新規
  for(var i = NewRow; i >= 0; i--){
    if(TSrange[i][7] === ""){
      continue;
      }else{
       var data =[];
       data.push(TSrange[i][8]);
       data.push(TSrange[i][3]);
       data.push(TSrange[i][1]);
       data.push(TSrange[i][5]);
       data.push(TSrange[i][7]);
       data.push(TSrange[i][4]);
       DataNew.push(data);
    }
  }
  //リライト
  for(var i = ReRow; i >= 0; i--){
    if(TSrange[i][20] === ""){
      continue;
      }else{
       var dataR = [];
       dataR.push(TSrange[i][21])
       dataR.push(TSrange[i][14])
       dataR.push(TSrange[i][12])
       dataR.push(TSrange[i][18])
       dataR.push(TSrange[i][20])
       dataR.push(TSrange[i][17])
       DataRe.push(dataR)
  }
}
  /*
  【⬆︎for文の翻訳⬆】
  
  for(i = [NewかReのデータ行数]；　[iが0になるまで]; [1づつマイナスしながら、下に書いてある処理を実行します]){
    if(NewかReの執筆完了日が空白なら繰り返しをスキップ。iから1マイナスして、次の処理に進みます){
    
      }執筆完了日が埋まっていれば{
      [data]という配列に、
      (チームシート集計NewかReの)識別子
      (チームシート集計NewかReの)URL
      (チームシート集計NewかReの)KW
      (チームシート集計NewかReの)ロジック
      (チームシート集計NewかReの)執筆完了日
      (チームシート集計NewかReの)執筆者
      の情報を挿入して、
      そのパッケージごと[Data(NewかRe)]に挿入します
      }
    }
    
  ＊処理のイメージ＊
  data[] ⬅︎チームシート集計masterタブにある "識別子,URL,KW,ロジック,執筆完了日,執筆者" の情報
  ⬇︎
  DataNew[]　⬅︎ data[識別子,URL,KW,ロジック,執筆完了日,執筆者]
  ⬇︎
  DataNew[０[識別子,URL,KW,ロジック,執筆完了日,執筆者],1[識別子,URL,KW,ロジック,執筆完了日,執筆者],2[識別子,URL,KW,ロジック,執筆完了日,執筆者]......]
  */
  var KiziTora = SpreadsheetApp.getActiveSpreadsheet().getSheetByName();
  var NewDataPaste = KiziTora.getRange(3,1,DataNew.length,6).setValues(DataNew);
  var ReDataPaste = KiziTora.getRange(DataNew.length+3,1,DataRe.length,6).setValues(DataRe);

}