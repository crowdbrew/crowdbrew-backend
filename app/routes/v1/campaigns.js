var campaigns = {

    /* 
     * Get all campaigns 
     * 
     */
    getAll: function (req, res) {

        let campaigns = {};

        res.json(campaigns);

    },

    /* 
     * Get single campaign 
     * 
     */

    getOne: function (req, res) {

        let campaign = {};

        res.json(campaign);

    },

    /* 
     * Create campaign 
     * 
     */

    create: function (req, res) {
        let campaign = {};
        campaign.id = "";

        res.status(201).
            location('/api/v1/campaigns/' + campaign.id).
            json(campaign);

    },

    /* 
     * Update campaign 
     * 
     */

    update: function (req, res) {

        let campaign = {};
        // update
        res.status(200).json(campaign);

    },

    /* 
     * delete campaign 
     * 
     */

    delete: function (req, res) {

        res.status(204);

    }
};

module.exports = campaigns;