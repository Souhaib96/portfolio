import RegisterForm from "@/components/registerForm";
import Section from "@/components/section";
import H1 from "@/components/ui/h1";

const Page = () => {
    return (
        <main>
        <Section>
            <H1>
                Inscription
            </H1>
        </Section>
        <Section>    
            <RegisterForm/>
        </Section>
    </main>
    );
    };

export default Page;