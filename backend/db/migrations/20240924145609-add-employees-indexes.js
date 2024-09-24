module.exports = {
  async up(db, client) {
    await db
      .collection('employees')
      .createIndex({ email: 1 }, { unique: true });
    console.log('Index on email created');
  },

  async down(db, client) {},
};
