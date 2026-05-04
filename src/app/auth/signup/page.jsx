'use client';
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photoUrl,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Registration failed.");
            return;
        }

        if (data) {
            toast.success("Account created! Please log in.");
            router.push("/auth/signin");
        }
    };



    return (
        <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-6 py-16">
            <div className="glass-panel w-full max-w-md rounded-3xl p-8">
                <h2 className="font-display text-3xl text-slate-900">Register</h2>
                <p className="mt-2 text-sm text-slate-600">
                    Join SkillSphere and start learning today.
                </p>
                <Form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input name="name" placeholder="Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input name="email" placeholder="Your Email Address" />
                        <FieldError />
                    </TextField>
                    <TextField name="photoUrl">
                        <Label>Photo URL</Label>
                        <Input name="photoUrl" placeholder="https://" />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input name="password" placeholder="Enter your password" />
                        <Description className="text-slate-500">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>
                    <div className="flex flex-col gap-3">
                        <Button type="submit" className="w-full">
                            <Check />
                            Register
                        </Button>

                    </div>
                </Form>
                <p className="mt-6 text-sm text-slate-600">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="font-semibold text-slate-900">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;