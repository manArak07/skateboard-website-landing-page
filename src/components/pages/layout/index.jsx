import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
    return (
        <div className="min-h-screen font-rubik">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}