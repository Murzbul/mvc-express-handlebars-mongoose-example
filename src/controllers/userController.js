import userSchema from '../models/userSchema.js';
import UserDto from '../UserDto.js';
import UserService from '../services/userService.js';

const getHtmlUsers = async(req, res, next) =>
{
    const users = await userSchema.find().lean();

    res.render('users/form-html', { users });
};

const addHtmlUser = async(req, res, next) =>
{
    await UserService.create(req.body);

    res.redirect('/html-onwire');
}

;const addProductsToCarrito = async(req, res, next) =>
{
    await CarritoService.create(req.body, req.params.id);

    res.redirect('/html-onwire');
};

const getUser = async(req, res, next) =>
{
    const userDto = await UserService.get(req.params.id);

    res.status(200).json({ data: userDto });
    /*
    * {
    *    data: {
    *         firstName: "Marcelo",
    *         lastName:  "Rodriguez"
    *     }
    * */
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
