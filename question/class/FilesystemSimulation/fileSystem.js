const FileSystem = function () {
  this.directory = { root: {} };
  this.currentDir = this.directory["root"];
  this.currentDirPath = "root";

  this.createDirectory = function (name) {
    if (!this.currentDir[name]) {
      this.currentDir[name] = {};
    } else {
      console.log(`Directory '${name}' already exists.`);
    }
  };

  this.changeDirectory = function (path) {
    const newDir = this._changeDirectoryHelper(path);
    console.log("debug " , newDir)
    if (newDir) {
      this.currentDir = newDir;
      this.currentDirPath = path;
    } else {
      console.log(`Invalid path: '${path}'`);
    }
  };

  this._changeDirectoryHelper = function (path) {
    const paths = path.split("-");
    let current = this.directory;
    for (let key of paths) {
      if (!current[key]) return null;
      current = current[key];
    }
    return current;
  };

  this.getCurDirectoryPath = function () {
    return this.currentDirPath;
  };

  this.getCurDirectory = function () {
    return this.currentDir;
  };

  this.addFile = function (fileName) {
    if (!this.currentDir.files) {
      this.currentDir.files = [];
    }
    if (!this.currentDir.files.includes(fileName)) {
      this.currentDir.files.push(fileName);
    } else {
      console.log(`File '${fileName}' already exists.`);
    }
    return true;
  };

  this.deleteFile = function (fileName) {
    if (this.currentDir.files) {
      this.currentDir.files = this.currentDir.files.filter(
        (e) => e !== fileName
      );
    }
    return true;
  };

  this.deleteDirectory = function (name) {
    if (this.currentDir[name]) {
      delete this.currentDir[name];
    } else {
      console.log(`Directory '${name}' does not exist.`);
    }
  };

  this.getRootDirectory = function () {
    return this.directory;
  };
};

// Test Cases
const dir = new FileSystem();
dir.createDirectory("gourav");
dir.changeDirectory("root-gourav");


dir.createDirectory("app");
dir.createDirectory("src");
dir.createDirectory("constants");


dir.addFile("index.html");
dir.addFile("app.js");
dir.changeDirectory("root-gourav-app");

dir.addFile("newindex.html");
dir.addFile("nexapp.js");
dir.createDirectory("components");

dir.changeDirectory("root-gourav-constants");
dir.addFile("a.png");
dir.addFile("b.jpg");
dir.deleteFile("a.png");

console.log(dir.getRootDirectory());
