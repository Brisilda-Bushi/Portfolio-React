import fs from "fs";
const filePath = "src/translations/en.json";

const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

for (const [key, value] of Object.entries(jsonData)) {
  if (value === "__STRING_NOT_TRANSLATED__") {
    jsonData[key] = key;
  }
}
fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
