var requests = {

  /* 
   * Get all requests 
   * 
   */
  getAll: function (req, res) {

    let requests = {};

    res.json(requests);

  },

  /* 
   * Get single request 
   * 
   */

  getOne: function (req, res) {

    let request = {};

    res.json(request);

  },

  /* 
   * Create request 
   * 
   */

  create: function (req, res) {
    let request = {};
    request.id = "";

    res.status(201).
      location('/api/v1/requests/' + request.id).
      json(request);

  },

  /* 
   * Update request 
   * 
   */

  update: function (req, res) {

    let request = {};
    // update
    res.status(200).json(request);

  },

  /* 
   * delete request 
   * 
   */

  delete: function (req, res) {

    res.status(204);

  }
};

module.exports = requests;