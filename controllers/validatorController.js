const db = require('../db/sqlite');

const getValidators = async (req, res) => {
  try {
    const query = `
      SELECT v.*, s.timestamp, s.amount_steth, s.reason 
      FROM validators v 
      LEFT JOIN slash_history s ON v.id = s.validator_id
    `;
    const validators = await db.all(query);
    res.json(validators);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching validators.' });
  }
};

module.exports = { getValidators };
