import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';
/*import Schema from 'mongoose';*/
const userSchema = new mongoose.Schema({
    username : String,
    email: String,
    password: String

  });
 const helloSchema = new mongoose.Schema({
    id:String,
        name:String,
        BankName:String,
        BankAccountNo:Number,
        AddressLine1:String,
        AddressLine2:String,
        City:String,
        Country:String,
       ZipCode:Number
  });
  

/*const Users = models.user || model('user', userSchema)*/
const User = mongoose.models.User || mongoose.model('User', userSchema);
const Hello = mongoose.models.Hello || mongoose.model('Hello', helloSchema);
export default Hello;
/*export { User, Hello};*/