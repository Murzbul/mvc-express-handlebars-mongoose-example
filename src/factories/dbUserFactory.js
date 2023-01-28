import UserMongoRepository from '../repository/userMongoRepository.js';
import UserFileRepository from '../repository/userFileRepository.js';
import UserFirestoreRepository from '../repository/userFirestoreRepository.js';

class UserRepositoryFactory
{
    static create(dbName)
    {
        const factories = {
          UserMongoRepository,
          UserFirestoreRepository,
          UserFileRepository
        };

        return new factories[dbName]();
    }
}

export default UserRepositoryFactory;
