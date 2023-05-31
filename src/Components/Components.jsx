

const Components = ({item}) => {
    const {name, image, recipe, price}=item;
    console.log(item)
    console.log(name, image, recipe, price)
    return (
        <div className="flex">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="h-[100px] pr-4" src={image}   alt="" />
            <div >
                <h3>{name} -----------</h3>
                <p>{recipe}</p>
            </div><span className="text-yellow-600">${price}</span>
            
        </div>
    );
};

export default Components;