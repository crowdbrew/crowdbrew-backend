var requestVotes = {

  // TODO request votes as sub resource: requests/:id/votes/:id

  /* 
   * Get all requestVotes 
   * 
   */
  getAll: function (req, res) {

    let requestVotes = {};

    res.json(requestVotes);

  },

  /* 
   * Get single requestVote 
   * 
   */

  getOne: function (req, res) {

    let requestVote = {};

    res.json(requestVote);

  },

  /* 
   * Create requestVote 
   * 
   */

  create: function (req, res) {
    let requestVote = {};
    requestVote.id = "";

    res.status(201).
      location('/api/v1/requestVotes/' + requestVote.id).
      json(requestVote);

  },

  /* 
   * Update requestVote 
   * 
   */

  update: function (req, res) {

    let requestVote = {};
    // update
    res.status(200).json(requestVote);

  },

  /* 
   * delete requestVote 
   * 
   */

  delete: function (req, res) {

    res.status(204);

  }
};

module.exports = requestVotes;