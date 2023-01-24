import userSchema from '../models/userSchema.js';

const getHtmlUsers = async(req, res, next) =>
{
    const users = await userSchema.find().lean();

    res.render('users/form-html', { users });
};

const addHtmlUser = async(req, res, next) =>
{
    await userSchema.create(req.body);

    res.redirect('/html-onwire');
};

const getDataUsersView = async(req, res, next) =>
{
    res.render('users/form-data');
};

const getDataUsersJson = async(req, res, next) =>
{
    const users = await userSchema.find().lean();

    res.status(200).json({ users });
};

const addDataUser = async(req, res, next) =>
{
    await userSchema.create(req.body);

    res.redirect('/data-onwire');
};

export default {
    getHtmlUsers,
    addHtmlUser,
    getDataUsersView,
    getDataUsersJson,
    addDataUser
};
