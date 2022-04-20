import { readFile, writeFile } from "fs";
import { dirname } from "path";
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dataFilePath = dirname(__filename)

export const db = {notifications:[]};

readFile(dataFilePath+"/data.json", "utf8", function (err, data) {
  if(err) throw err
  data = JSON.parse(data);
  if (data) db.notifications = data;
});

export function writeToJSON() {
    writeFile(dataFilePath+"/data.json", JSON.stringify(db.notifications), function (err) {
    if (err) throw err;
  });
}

