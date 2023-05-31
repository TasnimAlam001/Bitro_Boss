import Featured from "../../../Components/Featured/Featured";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ProductsMenu from "../ProductsMenu/ProductsMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <ProductsMenu></ProductsMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;