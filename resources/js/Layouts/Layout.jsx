import Footer from './Footer';
import Header from './Header';

export default ({ user, header, children }) => {

    return <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>;
}
