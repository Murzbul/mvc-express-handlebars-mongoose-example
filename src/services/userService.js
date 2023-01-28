import UserRepositoryFactory from '../factories/dbUserFactory.js';

class UserService
{
     static async create(payload)
     {
        // UserDto tiene logica plana para guardar esa informacion en tablas o documents.
        // UserEntity tiene logica de objetos
        // El dto hace una traduccion de la entidad para poder persistir correctamente la informacion.
        // let userDto = new UserDto(payload.firstName, payload.lastName, payload.dni);

         // if () payload.products ==< 10
         // {
         //
         // }

         const userDto = {
             firstName: payload.firstName.trim(),
             lastName: payload.lastName.trim(),
             dni: +payload.dni
         };

        if (userDto.firstName === 'root')
        {
           throw Error('Error, no se permite root como firstName');
        }

        // Mucha mas logica de dominio

        // Se puede utilizar Repositorio como también DAO
        const repo = UserRepositoryFactory.create('UserMongoRepository'); // Aca se puede cambiar la class con un string

        const userEntity = await repo.create(userDto);

        console.log(userEntity);

        return {
          firstName: userEntity.firstName,
          lastName: userEntity.lastName,
          dni: userEntity.dni
        };
     }

     static async get(id)
     {
        const repo = UserRepositoryFactory.create('UserMongoRepository');
        const userEntity = await repo.get(id);

        // logica de negocio

        return {
          firstName: userEntity.firstName,
          lastName: userEntity.lastName
        };
     }
     static async getAll()
     {
        const repo = UserRepositoryFactory.create('UserMongoRepository');
        const usersEntity = await repo.getAll();

        // logica de negocio

        return usersEntity.map(userEntity => ({
            id: userEntity.id,
            firstName: userEntity.firstName,
            lastName: userEntity.lastName,
            dni: userEntity.dni
        }));
     }
}

export default UserService;
