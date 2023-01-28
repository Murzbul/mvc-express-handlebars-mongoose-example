import UserDto from '../UserDto.js';
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
             dni: +payload.dni.trim()
         };

        if (userDto.firstName === 'root')
        {
           throw Error('Error, no se permite root como firstName');
        }

        // Mucha mas logica de dominio

        // Se puede utilizar Repositorio como tambien DAO
        const repo = UserRepositoryFactory.create('UserMongoRepository');
        await repo.create(userDto);
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
}

export default UserService;
