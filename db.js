const fs = require("fs");

const dataFilePath = __dirname + "/data.json";

const db = {notifications:[]}; // stuff in here

fs.readFile(dataFilePath, "utf8", function (err, data) {
  try {
    data = JSON.parse(data);
  } catch (e) {
    // Catch error in case file doesn't exist or isn't valid JSON
  }
  if (data ) db.notifications = data;
});

  // fs.writeFile(dataFilePath, JSON.stringify(db), function (err) {
  //   if (err) throw err;
  // });


module.exports = {db};