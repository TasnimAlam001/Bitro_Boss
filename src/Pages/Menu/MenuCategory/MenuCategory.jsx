import { Link } from "react-router-dom";
import Components from "../../../Components/Components";
import CoverTitle from "../../Shared/CoverTitle/CoverTitle";

const MenuCategory = ({ items,img,title }) => {
    console.log(items)
    return (

        <div>
           <div className="uppercase">
           {
                title && <CoverTitle
                img={img}
                title = {title}
                ></CoverTitle>
            }
           </div>


            <div className="grid grid-cols-2 gap-8 m-12">
                {
                    items.map(p => <Components
                        key={p._id}
                        item={p}

                    ></Components>)
                }
            </div>
            {
                title && <Link to={`/order/${title}`} ><button className="btn btn-outline border-0 border-b-4 my-4 w-1/6 mx-auto">Order {title} </button></Link>
            }
        </div>
    );
};

export default MenuCategory;