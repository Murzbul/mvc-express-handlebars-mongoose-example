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
          const userDto = await this.userDao.create(data);
          return new UserEntity(userDto);
     }

     async get(id)
     {
          const userDto = await this.userDao.getOne(id);
          return new UserEntity(userDto);
     }

     async getAll(id)
     {
          const usersDto = await this.userDao.getAll();

          return usersDto.map(userDto => new UserEntity(userDto));
     }
}

export default UserMongoRepository;
