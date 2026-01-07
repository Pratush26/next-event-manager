import LoginForm from "@/Components/Forms/Login";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center justify-center my-10 w-full">
            <h1 className="text-2xl font-semibold">Login</h1>
            <LoginForm />
        </main>
    )
}