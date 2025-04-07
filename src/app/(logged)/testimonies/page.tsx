'use client'
import ContainerContent from "@/components/container-content";
import ItemCard from "@/components/ItemCard";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import H1 from "@/components/ui/h1";
import { useAppSelector } from "@/state/store";
import { Testimonial } from "@/type";
import { redirect } from "next/navigation";

export default function Projets() {

    const testimonialState = useAppSelector((state) => state.testimonials);
    const loginState = useAppSelector((state) => state.login);
    console.log(testimonialState);
    const { testimonials } = testimonialState;

    const onAddTestimonial = () => {
        redirect("/testimonies/add");
    }

    return (
        <main>
        <Section>
            <H1>
            {"Témoignages"}
            </H1>
        </Section>
        <Section>
            <ContainerContent className="flex flex-col gap-16">
                <div className="flex flex-col justify-end items-end">
                    <Button onClick={onAddTestimonial}>
                        {"Ajouter un témoignage"}
                    </Button>
                </div>
            <div className="flex flex-wrap justify-center gap-4">
                {testimonials?.map((item, index) => (
                <ItemCard
                    key={index}
                    testimonial={item}
                    isModifiable={loginState.email === item.name}
                />

                ))}
            </div>
        

            </ContainerContent>
        </Section>
        </main>
    );
}
  