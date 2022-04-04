const fs = require("fs");

const load = () => {
  try {
    const dataBuffer = fs.readFileSync("db.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

const save = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("db.json", dataJSON);
};

const add = (title, body) => {
  const notes = load();
  const duplicate = notes.find((note) => note.title === title);

  if (duplicate) {
    console.log("Note with this title already exits!");
  } else {
    notes.push({ title, body });
    save(notes);
    console.log("New note added!");
  }
};

const remove = (title) => {
  const notes = load();
  const modified = notes.filter((note) => note.title != title);

  if (notes.length > modified.length) {
    console.log("Note removed!");
    save(modified);
  } else {
    console.log("No note found with this title!");
  }
};

const read = (title) => {
  const notes = load();
  const target = notes.find((note) => note.title === title);
  if (target) {
    console.log(`${target.title} => ${target.body}`);
  } else {
    console.log("No note found with this title!");
  }
};

const list = () => {
  const notes = load();
  console.log("Your Notes: ");
  console.table(notes);
};

module.exports = { add, remove, list, read };
