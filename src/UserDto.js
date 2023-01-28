
class UserDto
{
  constructor(firstName, lastName, dni)
  {
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.dni = dni.trim();
  }
}

export default UserDto;
