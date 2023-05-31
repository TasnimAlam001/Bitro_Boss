import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import CoverTitle from '../Shared/CoverTitle/CoverTitle';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import useMenu from '../../Hooks/useMenu';






const Menu = () => {

    const [data] = useMenu();
    
    const offered = data.filter(items=> items.category === "offered");
    console.log(offered)
    const dessert = data.filter(items=> items.category === "dessert");
    const salad = data.filter(items=> items.category === "salad");
    const pizza = data.filter(items=> items.category === "pizza");
    const soup = data.filter(items=> items.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <CoverTitle
            img={menuImg}
            title = "BURGER"
            ></CoverTitle>
            <SectionTitle subHeading="Dom't miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory
            items={offered}
            ></MenuCategory>
            <MenuCategory
            items={dessert}
            title="desert"
            img={desertImg}
            ></MenuCategory>
            <MenuCategory
            items={salad}
            title="salad"
            img={saladImg}
            ></MenuCategory>
            <MenuCategory
            items={pizza}
            title="pizza"
            img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
            items={soup}
            title="soup"
            img={soupImg}
            ></MenuCategory>
            

            
           
            
            
            
        </div>
    );
};

export default Menu;