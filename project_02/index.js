import { readFile, writeFile,appendFile, unlink } from "fs/promises";

// console.log(__dirname); // this will not work because we are using the "ES6" module system
// console.log(import.meta.url); // this will return the file path "file:///Users/chandan/Desktop/Chandan/Dev/backend/lamda3/project_02/index.js"

const filePath = new URL("./index.html", import.meta.url);
console.log({ filePath });

//read the file
const content = await readFile(filePath, "utf-8"); // this will return the content of the file and UTF-8 is the encoding means that the file will be read as a string
console.log({ content });

const data = {
  name: "babli",
  age: 26,
  job: "Software Engineer",
};

let newContent = content;

for (const [key, value] of Object.entries(data)) {
  newContent = newContent.replace(`{{${key}}}`, value);
}

console.log({ newContent });

// write the new content to the file
// await writeFile(new URL("./index.html", import.meta.url), newContent);

// create and write the file
const jsContent = `console.log("hello1");`;
await writeFile(new URL(".file1.js", import.meta.url), jsContent); // this will create a new file and write the content to it

// append the content to the file
await appendFile(new URL("./index.html", import.meta.url), newContent);

// delete the file
await unlink(new URL("./index.html", import.meta.url));
