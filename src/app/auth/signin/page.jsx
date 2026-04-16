'use client';
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

const SignInPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form submitted with:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/'
        })
        console.log("Sign in response:", { data, error })
    }

    return (
        <div>
            <h2>Please Sign In</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                {/* email */}
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
                {/* password */}
                <TextField className="w-full max-w-[280px]" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            className="w-full max-w-[280px]"
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
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignInPage;