import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongoDB from '../../../database/conn'
import User from '../../../model/Schema'
import { compare } from 'bcryptjs';

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
        }),
       
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongoDB().catch(error => { error: "Connection Failed...!"})

                // check user existance
                const result = await User.findOne( { email : credentials.email})
                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);
                
                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })
    ],
    secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
    session: {
        strategy: 'jwt',
    }
})