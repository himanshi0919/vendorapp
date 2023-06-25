import React from 'react';
import Link from "next/link";
import { getSession } from 'next-auth/react'

const Profile = () => {
    return (
        <section className="container mx-auto text-center">
            <h3 className="text-4xl font-bold">Thank you!</h3>
            <Link href="/login">Login</Link>
        </section>
    );
};

Profile.displayName = 'Profile';

export default Profile;

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }

    // authorize user return session
    return {
        props: { session }
    };
}
