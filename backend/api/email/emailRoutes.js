const express = require("express");
const emailModel = require("../../models/email/emailModel");

const router = express.Router();

//send an email and save a sent email (click send in ComposeMail)
router.post("/emails/save", async (req, res) => {
  try {
    await emailModel.create(req.body);
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//save a draft email (click close in ComposeMail)
router.post("/emails/savedraft", async (req, res) => {
  try {
    await emailModel.create(req.body);
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//save a trash email (click trash in ComposeMail)
router.post("/emails/savedtrash", async (req, res) => {
  try {
    await emailModel.create(req.body);
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//get emails by type
router.get("/emails/:type", async (req, res) => {
  try {
    let emails;
    if (req.params.type === "trash") {
      emails = await emailModel.find({ trash: true });
    } else if (req.params.type === "starred") {
      emails = await emailModel.find({ starred: true });
    } else if (req.params.type === "spam") {
      emails = await emailModel.find({ spam: true });
    } else {
      emails = await emailModel.find({ type: req.params.type });
    }

    res.status(200).send(emails.sort((a, b) => b.createdAt - a.createdAt));
  } catch (e) {
    res.status(500).send(e);
  }
});

//get emails by lable type--only show emails in inbox
router.get("/emails/label/:labeltype", async (req, res) => {
  try {
    let emails;
    emails = await emailModel.find({
      labels: { $in: [req.params.labeltype] },
      type: "inbox",
    });
    res.status(200).send(emails.sort((a, b) => b.createdAt - a.createdAt));
  } catch (e) {
    res.status(500).send(e);
  }
});

//move selected email(s) to trash
router.post("/emails/trash", async (req, res) => {
  try {
    await emailModel.updateMany(
      { _id: { $in: req.body } },
      { $set: { trash: true, type: "", spam: false } }
    );
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//move selected email(s) to spam
router.post("/emails/spam", async (req, res) => {
  try {
    await emailModel.updateMany(
      { _id: { $in: req.body } },
      { $set: { spam: true, type: "", trash: false } }
    );
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//change label of email(s)
//for an email, if label exists in email's labels array remove it, otherwise add it
//check details in
//https://stackoverflow.com/questions/50169062/mongodb-how-to-remove-value-from-array-if-exist-otherwise-add
router.post("/emails/changeLabel", async (req, res) => {
  try {
    const label = req.body.label;
    const emails = req.body.emails;

    emails.map(async (email) => {
      await emailModel.updateOne({ _id: email }, [
        {
          $set: {
            labels: {
              $cond: [
                { $in: [label, "$labels"] },
                { $setDifference: ["$labels", [label]] },
                { $concatArrays: ["$labels", [label]] },
              ],
            },
          },
        },
      ]);
    });

    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//toggle star
router.post("/emails/starred", async (req, res) => {
  try {
    const id = req.body.id;
    const starred = req.body.starred;
    await emailModel.updateOne({ _id: id }, { $set: { starred: starred } });
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//mark emails as read
router.post("/emails/read", async (req, res) => {
  try {
    await emailModel.updateMany(
      { _id: { $in: req.body } },
      { $set: { read: true } }
    );
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//mark one email as read
router.post("/emails/readOne", async (req, res) => {
  try {
    const id = req.body.id;
    const read = req.body.read;
    await emailModel.updateOne({ _id: id }, { $set: { read: read } });
    res.status(200).send("success");
  } catch (e) {
    res.status(500).send(e);
  }
});

//get an email by id
router.get("/emails/get", async (req, res) => {
  try {
    const id = req.body.id;

    const email = await emailModel.findOne({ _id: id });

    res.status(200).send(email);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
