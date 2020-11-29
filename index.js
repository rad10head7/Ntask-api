const express = require('express');
const consign = require('consign');

const app = express();


//app.get("/", (req, res) => res.json({status: "NTask API" }));
consign()
	.include("libs/config.js")
	.then("db.js")
	.then("auth.js")
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);
