import LoginForm from "@/components/loginForm";
import Section from "@/components/section";
import H1 from "@/components/ui/h1";

const Page = () => {
    return (
        <main>
            <Section>
                <H1>
                    Connexion
                </H1>
            </Section>
            <Section>    
                <LoginForm/>
            </Section>
        </main>
    );
    };

export default Page;