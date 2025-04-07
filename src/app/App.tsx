import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { RootState, useAppSelector } from "@/state/store";

const App = ({children}:{children:any}) => {
    const loginState = useAppSelector((state: RootState) => state.login);
    let menuItems = []
    if (loginState.isLoggedIn) {
        menuItems = [
        { name: "Accueil", href: "/" },
        { name: "Projets", href: "/projects" },
        { name: "Témoignages", href: "/testimonies" },
        
        ]
    }else{
        menuItems = [
        { name: "Inscription", href: "/register" },
        { name: "Connexion", href: "/login" }
        ]
    }

    return (
        <>
        <Header
            logoSrc="/logo.png"
            menuItems={menuItems}
            />
            {children}
        <Footer/>
        </>
    );
}

export default App;