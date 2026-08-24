import AuthLayout from "@/components/AuthLayout"
import RegisterFormComponent from "@/components/RegisterFormComponent"

const page = () => {
    return (
        <section>

            <AuthLayout
                AuthLayoutTitle="Get started on Applcation"
            >
                <RegisterFormComponent />
            </AuthLayout >

        </section>
    )
}

export default page