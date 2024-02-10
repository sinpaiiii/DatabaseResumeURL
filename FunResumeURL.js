function LISTING() {
  let folderId = SpreadsheetApp.getUi().prompt("Enter folder ID:");
  let Folders = DriveApp.getFolderById(folderId.getResponseText());
  let result = [];
  result.push(["Resume", "Name"]);
  let Files = Folders.getFiles();
  while (Files.hasNext()) {
    let File = Files.next();
    result.push([File.getName().slice(0, -4), File.getUrl()]);
  }
  //SpreadsheetApp.getActiveSheet().getRange(1,1,result.length,result[0].length).setValues(result)  //This is to create a new sheet with just the name and resume url
  let curCell = SpreadsheetApp.getCurrentCell();
  let curRow = curCell.getRow();
  let curCol = curCell.getColumn();
  //Logger.log(SpreadsheetApp.getActiveSheet().getRange(5, 1).getValue())
  while (SpreadsheetApp.getActiveSheet().getRange(curRow, 2).getValue()) {
    for (var i = 0; i < result.length; i++) {
      if (
        result[i][0] ==
        SpreadsheetApp.getActiveSheet().getRange(curRow, 2).getValue()
      ) {
        SpreadsheetApp.getActiveSheet()
          .getRange(curRow, curCol)
          .setValue(result[i][1]);
        break;
      }
    }
    curRow += 1;
  }
}
