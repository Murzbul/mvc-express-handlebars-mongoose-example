import UserDao from '../dao/userDao.js';
import UserEntity from '../entities/UserEntity.js';

class UserMongoRepository
{
    constructor()
    {
        this.userDao = UserDao.getInstance();
    }

     async create(data)
     {
        await this.userDao.create(data);
     }

     async get(id)
     {
        const userDto = await this.userDao.getOne(id);
        return new UserEntity(userDto);
     }
}

export default UserMongoRepository;
