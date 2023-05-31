import { Helmet } from 'react-helmet-async';
import coverImg from '../../assets/shop/banner2.jpg'
import CoverTitle from '../Shared/CoverTitle/CoverTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
import OrderTab from './OrderTab';

const Order = () => {
    const categories = ['salad','pizza','soup','desert','drinks'];
    const {category} =useParams()
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [data] = useMenu();
    
    console.log(category)
    

    const dessert = data.filter(items=> items.category === "dessert");
    const salad = data.filter(items=> items.category === "salad");
    const pizza = data.filter(items=> items.category === "pizza");
    const soup = data.filter(items=> items.category === "soup");
    const drinks = data.filter(items=> items.category === "drinks");
    return (
        <div>
            <Helmet>

                <title>Bistro Boss | Order</title>
            </Helmet>
            <CoverTitle
                img={coverImg}
            ></CoverTitle>

            <div className='my-20 text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                    <OrderTab
                            items={salad}
                            ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                            <OrderTab
                            items={pizza}
                            ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={soup}
                            ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={dessert}
                            ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab
                            items={drinks}
                            ></OrderTab>
                    </TabPanel>
                    
                    
                </Tabs>
            </div>
        </div>
    );
};

export default Order;