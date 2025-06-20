const db = require('../db/sqlite');

const getRewardsByAddress = async (req, res) => {
  const { address } = req.params;

  try {
    const reward = await db.get(
      `SELECT * FROM rewards WHERE wallet_address = ?`,
      [address]
    );

    if (!reward) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    const breakdown = await db.all(
      `SELECT * FROM reward_breakdown WHERE reward_id = ?`,
      [reward.id]
    );

    res.json({ ...reward, breakdown });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching rewards.' });
  }
};

module.exports = { getRewardsByAddress };
