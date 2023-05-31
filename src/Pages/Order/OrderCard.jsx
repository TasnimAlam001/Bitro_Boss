

const OrderCard = ({item}) => {
    const {name, image, recipe, price}=item;
    return (
        <div className="mt-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-950 text-white absolute right-0 mt-4 mr-4 px-3 rounded-md">${price}</p>
                <div className="card-body flex flex-col items-center my-4">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 border-0 border-orange-300  border-b-2 my-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;