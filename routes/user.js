/*
 * GET users listing.
 */

function User(name, email) {
    this.name = name;
    this.email = email;
}

var users = [
    new User('foo', 'foo@mail.com'), new User('bar', 'bar@mail.com')
];


exports.list = function (req, res) {
    res.send(users);
};