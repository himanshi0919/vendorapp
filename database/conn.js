import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.connectMongoDB);

        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
        else{
            return Promise.reject(false)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongoDB;