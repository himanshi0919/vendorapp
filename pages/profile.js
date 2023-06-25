import React from 'react';
import Link from "next/link";
import { getSession } from 'next-auth/react'

 function login_section ()  {
    return (
        <section className="container mx-auto text-center">
                <h3 className="text-4xl font-bold">Thankyou!</h3>

                <Link href={"/login"}>Login</Link>
        </section>
    )
}
//login_section.displayName = 'login_section';
export default login_section
export async function getServerSideProps({ req }){
    const session = await getSession({ req });

    if(!session){
        return {
            redirect : {
                destination : "/login",
                premanent: false
            }
        };
    }
    // authorize user return session
    return {
        props: { session }
    }
}