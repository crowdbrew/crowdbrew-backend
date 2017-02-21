var campaignPosts = {

    // TODO request votes as sub resource: campaigns/:id/posts/:id


    /* 
     * Get all campaignPosts
     * 
     */
    getAll: function (req, res) {

        let campaignPosts = {};

        res.json(campaignPosts);

    },

    /* 
     * Get single campaignPost
     * 
     */

    getOne: function (req, res) {

        let campaignPost = {};

        res.json(campaignPost);

    },

    /* 
     * Create campaignPosts 
     * 
     */

    create: function (req, res) {
        let campaignPosts = {};
        campaignPosts.id = "";

        res.status(201).
            location('/api/v1/campaignPosts/' + campaignPosts.id).
            json(campaignPosts);

    },

    /* 
     * Update campaignPost 
     * 
     */

    update: function (req, res) {

        let campaignPost = {};
        // update
        res.status(200).json(campaignPost);

    },

    /* 
     * delete campaignPost 
     * 
     */

    delete: function (req, res) {

        res.status(204);

    }
};

module.exports = campaignPosts;