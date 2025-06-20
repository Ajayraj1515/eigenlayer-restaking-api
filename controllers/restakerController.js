const db = require('../db/sqlite');

const getRestakers = async (req, res) => {
  try {
    const restakers = await db.all(`SELECT * FROM restakers`);
    res.json(restakers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching restakers.' });
  }
};

module.exports = { getRestakers };
