'use client'
import ContainerContent from "@/components/container-content";
import Section from "@/components/section";
import TestimonyForm from "@/components/TestimonyForm";
import H1 from "@/components/ui/h1";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { addTestimonial } from "@/state/testimonies/testimoniesSlice";
import { Testimonial } from "@/type";
import { TestimonyFormData } from "@/typeDT";
import { redirect } from "next/navigation";


export default function AddTestimony() {
    const loginState = useAppSelector((state: RootState) => state.login);
    const dispatch = useAppDispatch();
    const onSubmit = async (formData: TestimonyFormData) => {
        const testimonial: Testimonial = {
            id: Date.now()+"",
            content: formData.content,
            name: loginState.email
        } 
        dispatch(addTestimonial(testimonial));
        alert("Votre témoignage a été ajouté avec succès");
        redirect("/testimonies");
    }
    return (
        <main>
        <Section>
            <H1>
            {"Ajouter un témoignage"}
            </H1>
        </Section>
        <Section>
            <ContainerContent className="flex flex-col gap-16">
                <TestimonyForm onSubmit={onSubmit}/>
        

            </ContainerContent>
        </Section>
        </main>
    );
}
  