import userSchema from '../models/userSchema.js';

let instance = null;

class UserDao
{
     async create(data)
     {
        const user = await userSchema.create(data);

        return {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          dni: user.dni
        };
     }

     async getOne(id)
     {
        const user = userSchema.find({ _id: id }).lean();

        return {
          id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          dni: user.dni
        };
     }

     async getAll()
     {
        const users = await userSchema.find().lean();

        return users.map(user => ({
          id: user._id.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          dni: user.dni
        }));
     }

     static getInstance()
     {
        if (!instance)
        {
          instance = new UserDao();
        }

        return instance;
     }
}

export default UserDao;
