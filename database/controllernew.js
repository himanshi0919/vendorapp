import User from '../model/Schema';

// get : http://localhost:3000/api/auth/signup
export async function getUser(req, res){
    try {
        const user = await User.findOne({email : credentials.email})

        if(!user) return res.status(404).json( { error: "Data not Found"})
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}