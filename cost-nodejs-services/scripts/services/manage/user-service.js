var User = require('../../models/user');

function login(req, res) {
    var user = new User(
        {email: req.body.email, password: req.body.password});
    user.findByEmail()
        .then(function (result) {
            if (result) {
                res.send({status: true, data: result});
            } else {
                res.send({status: false, data: result});
            }
        });
}

function register(req, res) {
    var userData = {};
    if (!req.body.email) {
        userData.email = req.body.email;
    }
    if (!req.body.username) {
        userData.username = req.body.username;
    }
    var user = new User(userData);
    user.findByEmail()
        .then(function (result) {
            if (result) {
                res.json({status: false, message: "Register Failed!!"});
            } else {
                user = new User(req.body);
                user.save(function (err) {
                    if (!err) {
                        res.json({status: true, message: "Register Success!!"});
                    } else {
                        res.json({status: false, message: "Register Failed!!"});
                    }

                })
            }
        });
}

function listUsers(req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    });
}

function addUser(req, res) {
    var user = new User(req.body);
    user.save(function (errStatus) {
        if (!errStatus) {
            res.json({status: true, message: "Register Success!!"});
        } else {
            res.json({status: false, message: "Register Failed!!"});
        }
    });
}

function deleteUser(req, res) {
    if (!req.body.email) {
        res.json({status: false, message: "Please provide email!"});
    }
    User.remove({
        email: req.body.email
    }, function (errStatus) {
        if (!errStatus) {
            res.json({status: true, message: "Delete Success!!"});
        } else {
            res.json({status: false, message: "Delete Failed!!"});
        }
    });
}

module.exports = {
    login: login,
    register: register,
    listUsers: listUsers,
    addUser: addUser,
    deleteUser: deleteUser
};