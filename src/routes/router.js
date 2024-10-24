import express from "express";
import shortenUrl from "../controllers/shorteningController.js";
import redirectUrl from "../controllers/redirectURL.js";
import shortUrlUsage from "../controllers/getAnalytics.js";

const router = express.Router();

router.get("/:shortUrl", redirectUrl); // retrieve original URL

router.get("/stats/:shortUrl", shortUrlUsage); // get URL statistics

router.post("/", shortenUrl); // create short URL

router.put("/:shortCode"); // update short URL

router.delete("/:shortCode"); // delete short URL

router.get("*", (req, res) => {
  return res.status(400).send("Not found");
});

export default router;
