'use client'
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { TestimonyFormData, testimonySchema } from "@/typeDT"
import H2 from "./ui/h2";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { Textarea } from "./ui/textarea";
import { addTestimonial } from "@/state/testimonies/testimoniesSlice";
import { Testimonial } from "@/type";
import { redirect } from "next/navigation";
import { useEffect } from "react";

interface TestimonyFormProps {
    onSubmit?: (data: TestimonyFormData) => void;
    defaultValues?: TestimonyFormData;
}

export default function TestimonyForm({onSubmit, defaultValues}: TestimonyFormProps) {


    const form = useForm<TestimonyFormData>({
        defaultValues:{
            content: defaultValues?.content || "",
        },
        resolver:zodResolver(testimonySchema)
    });
    const onFormSubmit = (data: TestimonyFormData) => {
        if(onSubmit){
            onSubmit(data);
        }
    }



    const errors =form.formState.errors;

    return(
        <Form {...form} >
            <form 
            className="bg-white/25 p-10 rounded-lg min-w-[25rem] flex flex-col gap-5"
            onSubmit={form.handleSubmit((data) => onFormSubmit(data))}
            >
                <H2 className="mb-5">
                    Que pensez vous de moi?
                </H2>
                
                <FormField
                    control={form.control}
                    name="content"
                    render={({field}) =>(
                        <FormItem>
                            <FormLabel>Contenu</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Ecrivez votre temoignage ..." {...field}></Textarea>
                            </FormControl>
                            {errors.content && <div className="bg-destructive/35 p-2"> {errors.content?.message} </div> }
                        </FormItem>
                    )}
                />
                
            <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "En cours..." : "Soumettre"}
            </Button>

            </form>
        </Form>
        )
}