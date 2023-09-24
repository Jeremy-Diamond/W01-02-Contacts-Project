const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId; // get primary key

const getAll = async (req, res) => {
    //#swagger.tags=['Contacts]
  try {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then((contacts) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(contacts);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Contacts]
    try {
      const contactId = new ObjectId(req.params.id);
      const result = await mongodb
        .getDb()
        .db()
        .collection("contacts")
        .find({ _id: contactId });
      const contacts = await result.toArray();
  
      if (contacts.length === 0) {
        // Contact not found; send a 404 (Not Found) response
        res.status(404).json({ message: "Sorry the contact you are loooking for can not be found" });
        return;
      }
  
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(contacts[0]);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

const createContact = async (req, res) => {
    //#swagger.tags=['Contacts]
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      birthday: req.body.birthday,
      favoriteColor: req.body.favoriteColor,
    };
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .insertOne(contact);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateContact = async (req, res) => {
    //#swagger.tags=['Contacts]
  try {
      // Log the incoming JSON data for debugging
     // console.log("Incoming JSON Data:", req.body);
      //console.log("test")
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday,
        favoriteColor: req.body.favoriteColor
    };
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .replaceOne({ _id: contactId }, updatedContact);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteContact = async (req, res) => {
    //#swagger.tags=['Contacts]
  const contactId = new ObjectId(req.params.id);
  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection("contacts")
      .deleteOne({ _id: contactId });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
