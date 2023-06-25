import connectMongoDB from "../../../database/conn"

import {getHello,sayHello,putHello,deleteHello} from '../../../database/controller';

export default function handler(req, res){
connectMongoDB().catch(()=>res.status(405).json({error:"Error in the Connection"}))

 //type of request 
 const{method} = req;
    
 switch(method){
     case 'GET':
     getHello(req,res);
     break;
     case 'POST':
     sayHello(req,res);
     break;
     case 'PUT':
     putHello(req,res);
     break;
     case 'DELETE':
     deleteHello(req,res);
     break;
    default:
         res.setHeader('Allow',['GET','POST','PUT','DELETE'])
         res.status(405).end('Method ${method}Not Allowed')
         break;
 }
}