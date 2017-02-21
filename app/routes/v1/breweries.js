var breweries = {

    /* 
     * Get all breweries 
     * 
     */
    getAll: function (req, res) {

        let breweries = {};

        res.json(breweries);

    },

    /* 
     * Get single brewery 
     * 
     */

    getOne: function (req, res) {

        let brewery = {};

        res.json(brewery);

    },

    /* 
     * Create brewery 
     * 
     */

    create: function (req, res) {
        let brewery = {};
        brewery.id = "";

        res.status(201).
            location('/api/v1/breweries/' + brewery.id).
            json(brewery);

    },

    /* 
     * Update brewery 
     * 
     */

    update: function (req, res) {

        let brewery = {};
        // update
        res.status(200).json(brewery);

    },

    /* 
     * delete brewery 
     * 
     */

    delete: function (req, res) {

        res.status(204);

    }
};

module.exports = breweries;