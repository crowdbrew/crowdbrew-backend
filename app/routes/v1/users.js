var users = {

    /* 
     * Get all users 
     * 
     */
    getAll: function (req, res) {

        let users = {};

        res.json(users);

    },

    /* 
     * Get single user 
     * 
     */

    getOne: function (req, res) {

        let user = {};

        res.json(user);

    },

    /* 
     * Create user 
     * 
     */

    create: function (req, res) {
        let user = {};
        user.id = "";

        res.status(201).
            location('/api/v1/users/' + user.id).
            json(user);

    },

    /* 
     * Update user 
     * 
     */

    update: function (req, res) {

        let user = {};
        // update
        res.status(200).json(user);

    },

    /* 
     * delete user 
     * 
     */

    delete: function (req, res) {

        res.status(204);

    }
};

module.exports = users;