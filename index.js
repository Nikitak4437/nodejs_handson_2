const { json } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    `
      <h1>EXPRESS Server sample with nodemon</h1>
      <p>Fast, unopinionated, minimalist web framework for Node.js</p>
      <h1>Click following link to redirect</h1>
      <ul>
      <li><a href='./home'>Home</a></li>
      <li><a href='./about'>About</a></li>
      <li><a href='./api'>API json</a></li>
      <ul>
      <h1> Api create checkLoginDetails using postman call this api </h1>
      <p> API url ./checkLoginDetails<br>
      API parameters is : username,password <br>
      API parameters valid value is : username:admin,password:admin <br>
      </p>
      `
  );
  res.end();
});
app.get("/home", (req, res) => {
  res.send(
    `
        <h1>EXPRESS Server HOME PAGE</h1>
        <p>This is a Home Page called</p>
        `
  );
  res.end();
});
app.get("/about", (req, res) => {
  res.send(
    `
        <h1>EXPRESS Server About PAGE</h1>
        <p>This is a About Page called</p>
        `
  );
  res.end();
});
app.get("/about", (req, res) => {
  res.send(
    `
          <h1>EXPRESS Server About PAGE</h1>
          <p>This is a About Page called</p>
          `
  );
  res.end();
});
app.get("/api", (req, res) => {
  res.json([{ name: "Nikita", Class: "PreepBite" }]);
});
app.post("/checkLoginDetails", (req, res) => {
  //   res.send(JSON.stringify(req.body));
  let username = req.body?.username;

  let password = req.body?.password;
  if (username === "admin" && password === "admin") {
    res.send("Login Successfully");
  } else {
    res.send("Login Failed");
  }
});
app.listen(3000, () => {
  console.log("Application is running on port 3000");
});
