'use client';
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";

const SignInForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackURL = searchParams.get("callback") || "/";

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL,
        });

        if (error) {
            toast.error(error.message || "Login failed. Try again.");
            return;
        }

        if (data) {
            toast.success("Welcome back!");
            router.push(callbackURL);
        }
    };

    const handleGoogleSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL,
        });

        if (error) {
            toast.error(error.message || "Google sign in failed.");
        }
    };

    return (
        <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-6 py-16">
            <div className="glass-panel w-full max-w-md rounded-3xl p-8">
                <h2 className="font-display text-3xl text-slate-900">Login</h2>
                <p className="mt-2 text-sm text-slate-600">
                    Access your courses and continue learning.
                </p>
                <Form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
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
                    <TextField className="w-full" name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                type={isVisible ? "text" : "password"}
                                name="password"
                                placeholder="Your Password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>
                    <div className="flex flex-col gap-3">
                        <Button type="submit" className="w-full">
                            <Check />
                            Login
                        </Button>
                        <Button onPress={handleGoogleSignIn} variant="outline">
                            Sign in with Google
                        </Button>
                    </div>
                </Form>
                <p className="mt-6 text-sm text-slate-600">
                    New here?{" "}
                    <Link href="/auth/signup" className="font-semibold text-slate-900">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

const SignInPage = () => {
    return (
        <Suspense fallback={<div className="py-16 text-center text-slate-500">Loading...</div>}>
            <SignInForm />
        </Suspense>
    );
};

export default SignInPage;