'use client'
import ContainerContent from "@/components/container-content";
import Section from "@/components/section";
import TestimonyForm from "@/components/TestimonyForm";
import H1 from "@/components/ui/h1";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { modifyTestimonial } from "@/state/testimonies/testimoniesSlice";
import { Testimonial } from "@/type";
import { TestimonyFormData } from "@/typeDT";
import { redirect, useParams } from "next/navigation";


export default function ModifyTestimony() {
    const loginState = useAppSelector((state: RootState) => state.login);
    const testimonialState = useAppSelector((state) => state.testimonials);
    // get id from url with useParams
    const id = useParams().id;
    const testimonial = testimonialState.testimonials.find((item) => item.id === id);
    if(!testimonial){
        alert("Témoignage introuvable " + id);
    }

    const dispatch = useAppDispatch();
    const onSubmit = async (formData: TestimonyFormData) => {
        const testimonial: Testimonial = {
            id: id as string|| Date.now()+"",
            content: formData.content,
            name: loginState.email
        } 
        dispatch(modifyTestimonial(testimonial));
        alert("Votre témoignage a été modifié avec succès");
        redirect("/testimonies");
    }
    return (
        <main>
        <Section>
            <H1>
            {"Modifier un témoignage"}
            </H1>
        </Section>
        <Section>
            <ContainerContent className="flex flex-col gap-16">
                <TestimonyForm onSubmit={onSubmit}
                defaultValues={{content:testimonial?.content}}/>
        

            </ContainerContent>
        </Section>
        </main>
    );
}
  