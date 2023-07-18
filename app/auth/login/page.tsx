import { LoginForm } from "./form";
import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await getServerSession(options)

    if (!session) {
        return (
            <>
                <section className="min-h-screen pt-20">
                    <div className="mx-auto px-6 py-12 h-full flex justify-center items-center">
                        <div className="lg:w-full dark:bg-slate-700 p-4 rounded-md dark:text-slate-300">
                            <h1 className="text-3xl mb-2">Login to your account</h1>
                            <p className="mb-3">Don&apos;t have an account yet? You don&apos; have any other choice xD, Click the button below.</p>
                            <LoginForm />
                        </div>
                    </div>
                </section>
            </>
        );
    }

    redirect('/')
}