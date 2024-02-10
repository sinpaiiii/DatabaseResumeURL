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
  SpreadsheetApp.getActiveSheet()
    .getRange(1, 1, result.length, result[0].length)
    .setValues(result);
}
