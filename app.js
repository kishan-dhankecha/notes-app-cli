const yargs = require("yargs");

const notes = require("./notes");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.add(argv.title, argv.body);
  },
});

// Create delete command
yargs.command({
  command: "remove",
  describe: "Remove an existing note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.remove(argv.title);
  },
});

// Create add command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.list();
  },
});

// Create delete command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.read(argv.title);
  },
});

yargs.parse();
