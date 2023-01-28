

class UserEntity
{
  constructor(userDto)
  {
      this.id =  userDto.id;
      this.firstName =  userDto.firstName;
      this.lastName = userDto.lastName;
      this.dni = userDto.dni;
  }

  getFullName()
  {
      return `${this.firstName}, ${this.lastName}`;
  }

  // Metodos relacionados a la logica de dominio.
  // No es un POJO
}

export default UserEntity;
