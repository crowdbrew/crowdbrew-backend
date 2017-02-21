var backings = {

  /* 
   * Get all backings 
   * 
   */
  getAll: function (req, res) {

    let backings = {};

    res.json(backings);

  },

  /* 
   * Get single backing 
   * 
   */

  getOne: function (req, res) {

    let backing = {};

    res.json(backing);

  },

  /* 
   * Create backing 
   * 
   */

  create: function (req, res) {
    let backing = {};
    backing.id = "";

    res.status(201).
      location('/api/v1/backings/' + backing.id).
      json(backing);

  },

  /* 
   * Update backing 
   * 
   */

  update: function (req, res) {

    let backing = {};
    // update
    res.status(200).json(backing);

  },

  /* 
   * delete backing 
   * 
   */

  delete: function (req, res) {

    res.status(204);

  }
};

module.exports = backings;