'use client'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { LoginFormData, loginSchema } from "@/typeDT"
import H2 from "./ui/h2";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { useEffect } from "react";
import { login, LoginState } from "@/state/login/loginSlice";
import { redirect } from "next/navigation";


export default function LoginForm(){
    const usersState = useAppSelector((state: RootState) => state.users);
    const loginState = useAppSelector((state: RootState) => state.login);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(loginState.isLoggedIn){
            redirect("/");
        }
    }, [loginState.isLoggedIn]);

    
    const form = useForm<LoginFormData>({
        defaultValues:{
            email: "",
            password: "",
        },
        resolver:zodResolver(loginSchema)
    });

    const errors =form.formState.errors;
    const onSubmit = async (formData: LoginFormData) => {
        console.log(usersState);
        const user = usersState.users.find((user) => user.email === formData.email && user.password === formData.password);
        if(user){
            alert("Connexion réussie");
            dispatch(login((formData as unknown) as LoginState));
        }else{
            alert("Email ou mot de passe incorrect");
        }
        form.reset();
    }
    
    return(
        <Form {...form} >
            <form 
            className="bg-white/25 p-10 rounded-lg min-w-[25rem] flex flex-col gap-5"
            onSubmit={form.handleSubmit((data) => onSubmit(data).then())}
            >
                <H2 className="mb-5">
                    Connectez-vous
                </H2>
                
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field}></Input>
                            </FormControl>
                            {errors.email && <div className="bg-destructive/35 p-2"> {errors.email?.message} </div> }
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type="password" {...field}></Input>
                            </FormControl>
                            {errors.password && <div className="bg-destructive/35 p-2"> {errors.password?.message} </div> }
                        </FormItem>
                    )}
                />
            <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "En cours..." : "Connexion"}
            </Button>

            </form>
        </Form>
        )
}