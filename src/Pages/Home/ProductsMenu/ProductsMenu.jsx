
import SectionTitle from "../../../Components/SectionTitle";
import Components from "../../../Components/Components";
import useMenu from "../../../Hooks/useMenu";


const ProductsMenu = () => {

    const [popular] = useMenu();
    
    const pMenu = popular.filter(data=> data.category === "popular");


    return (
        <section>
            <SectionTitle

                heading={"Check it out"}
                subHeading={"--- From Our Menu ---"}
            >

            </SectionTitle>
            <div className="grid grid-cols-2 gap-8 m-12">
            {
                pMenu.map(item => <Components
                    key={item._id}
                    item={item}
                ></Components>)
            }

            </div>
        </section>
    );
};

export default ProductsMenu;