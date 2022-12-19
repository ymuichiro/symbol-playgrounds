import content from "./content.json" assert { type: "json" };

const note = RunKit.createNotebook({
  element: document.getElementById("my-element"),
  minHeight: "300px",
  nodeVersion: "16.18.0",
  gutterStyle: "outside",
  source: content.data.session1,
});

document.getElementById("session1").addEventListener("click", () => {
  note.setSource(content.data.session1);
});

document.getElementById("session2").addEventListener("click", () => {
  note.setSource(content.data.session2);
});

document.getElementById("session3").addEventListener("click", () => {
  note.setSource(content.data.session3);
});

document.getElementById("save").addEventListener("click", () => {
  navigator.permissions.query({ name: "clipboard-write" }).then(() => {
    note.getShareableURL().then((e) => {
      navigator.clipboard.writeText(e).then(() => alert("copied"));
    });
  });
});
