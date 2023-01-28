import userSchema from '../models/userSchema.js';

let instance = null;

class UserDao
{
     async create(data)
     {
        await userSchema.create(data);
     }

     async getOne(id)
     {
        const user = userSchema.find({ _id: id }).lean();

        return {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName
        };
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
