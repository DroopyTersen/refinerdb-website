const fs = require("fs/promises");
const path = require("path");

let DEMOS_PATH = path.join(__dirname, "..", "app/features/sandpack/demos");

let demoJSON = {};

let bundleDemo = async (slug) => {
  let demoFolder = path.join(DEMOS_PATH, slug);
  console.log(demoFolder);
  let sandpackFiles = {};
  let fileNames = await fs.readdir(demoFolder);
  console.log(fileNames);
  for (let i = 0; i < fileNames.length; i++) {
    let filename = fileNames[i];
    let fileContents = await fs.readFile(
      path.join(demoFolder, filename),
      "utf8"
    );
    let hidden = false;
    let active = false;
    if (filename.includes("active")) {
      active = true;
    }
    if (filename === "index.html" || filename.includes("hidden")) {
      hidden = true;
    }
    if (filename !== "index.html") {
      filename = "/src/" + filename;
    }
    sandpackFiles[filename] = {
      code: fileContents,
      active,
      hidden,
    };
  }
  demoJSON[slug] = sandpackFiles;
};
let bundleCodeDemos = async () => {
  try {
    await fs.rm(path.join(DEMOS_PATH, "demos.json"));
  } catch (err) {}
  let demoFolders = await fs.readdir(DEMOS_PATH);
  for (let i = 0; i < demoFolders.length; i++) {
    await bundleDemo(demoFolders[i]);
  }
  await fs.writeFile(
    path.join(DEMOS_PATH, "demos.json"),
    JSON.stringify(demoJSON, null, 2)
  );
};

bundleCodeDemos();
