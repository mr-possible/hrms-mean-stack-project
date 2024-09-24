module.exports = {
  async up(db, client) {
    await db.createCollection('employees');
    console.log('employees collection created');
  },

  async down(db, client) {
    
  }
};
