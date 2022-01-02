import * as React from "react";
import * as Server from "react-dom/server";
import express from "express";
import fs from "node:fs";
import App from "./src/App";

const content = fs.readFileSync("./index.html");
const app = express();

app.get("/", (_, res) => {
  const ssr = content
    .toString()
    .replace("<!-- content -->", Server.renderToString(<App />));
  res.send(ssr);
});

app.use(
  express.static("./build", {
    index: false,
  })
);

app.listen("8080", function () {
  console.log("App started");
});
