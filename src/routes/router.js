import express from "express";

const router = express.Router();

router.get("/shorten/:shortCode"); // retrieve original URL

router.get("/shorten/:shortCode/stats"); // get URL statistics

router.post("/shorten"); // create short URL

router.put("/shorten/:shortCode"); // update short URL

router.delete("/shorten/:shortCode"); // delete short URL

router.get("*", (req, res) => {
  return res.status(400).send("Not found");
});

export default router;
