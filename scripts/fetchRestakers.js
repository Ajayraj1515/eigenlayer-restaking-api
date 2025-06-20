const db = require('../db/sqlite');

// ✅ Pure mock data
const mockRestakers = [
  {
    user_address: '0x123abcDEF123abcDEF123abcDEF123abcDEF1234',
    amount: 150.75,
    operator: '0xvalidatorA1234567890abcdef'
  },
  {
    user_address: '0x456defABC456defABC456defABC456defABC4567',
    amount: 200.25,
    operator: '0xvalidatorB0987654321fedcba'
  }
];

const storeRestakers = async () => {
  try {
    for (const r of mockRestakers) {
      await db.run(
        `INSERT OR REPLACE INTO restakers (user_address, amount_restaked_steth, target_avs_operator_address, last_updated)
         VALUES (?, ?, ?, ?)`,
        [r.user_address, r.amount, r.operator, Date.now()]
      );
    }
    console.log('✅ Mock restakers inserted successfully.');
  } catch (err) {
    console.error('❌ Error inserting restakers:', err.message);
  }
};

storeRestakers();
