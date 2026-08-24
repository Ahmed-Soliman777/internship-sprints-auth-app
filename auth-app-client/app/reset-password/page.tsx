import AuthLayout from "@/components/AuthLayout"
import ResetPasswordFormComponent from "@/components/ResetPasswordFormComponent"

const page = () => {
    return (
        <AuthLayout AuthLayoutTitle="Find your account">
            <ResetPasswordFormComponent />
        </AuthLayout>
    )
}

export default page