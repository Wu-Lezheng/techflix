import prisma from "@/lib/prisma"
import Link from "next/link";
import styles from "./page.module.css"

async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}

export default async function ForgotPasswordPage() {

    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>Forgot Password</h1>
            <Link href='/account'>
                <button>Add user</button>
            </Link>
            {
                users.map((user) => {
                    return (
                        <h1 key={user.id}>{user.username}</h1>
                    );
                })
            }
        </div>
    );
}
