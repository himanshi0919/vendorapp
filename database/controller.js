
/*import {User,Hello} from '../model/Schema';*/
import Hello from '../model/Schema';







// get : http://localhost:3000/api/users
export async function getHello(req, res){
    try {
        const hello = await Hello.find({})

        if(!hello) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(hello)
    } catch (error) {
        res.status(404).json({error : "Error While Fetching Data"})
    }
}


//post : http://localhost:3000/api/users
export async function sayHello(req, res) {
    try {
   
    const formData = req.body;
  
      if (!formData) return res.status(404).json({ error: "Hello message not found" });
      
      Hello.create( formData, function(err, data){
        return res.status(200).json(data)})
      }
    catch(error) {                      
      res.status(404).json({ error: "Error while fetching hello message" });
    }
}


// put : http://localhost:3000/api/users/1
export async function putHello(req, res) {
    try {
      const { HelloId } = req.query;
      const formData = req.body;
  
      if (HelloId && formData) {
        const hello = await Hello.findByIdAndUpdate(HelloId, formData);
        res.status(200).json(hello)
      } else {
        res.status(404).json({ error: "HelloId or formData not provided" });
      }
    } catch (error) {
      res.status(404).json({ error: "Error while updating the data" });
    }
  }
  
  // delete : http://localhost:3000/api/users/1
  export async function deleteHello(req, res) {
    try {
      const { HelloId } = req.query;
  
      if (HelloId) {
        const hello = await Hello.findByIdAndDelete(HelloId);
        return res.status(200).json(hello)
      } else {
        res.status(404).json({ error: "HelloId not provided" });
      }
    } catch (error) {
      res.status(404).json({ error: "Error while deleting the user" });
    }
  }


  