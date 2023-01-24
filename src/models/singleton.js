
let instance = null;

class SingletonClass
{
     constructor()
     {
        this.value = new Date();
     }

     getValue()
     {
        return this.value;
     }

     static getInstance()
     {
        if (!instance)
        {
          instance = new SingletonClass();
        }

        return instance;
     }
}

export default SingletonClass;
