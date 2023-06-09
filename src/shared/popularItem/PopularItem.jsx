
const PopularItem = ({user}) => {
    const {image, className, price} = user;
    return (
        <div className="flex space-x-4">
           <img style={{borderRadius: '200px 0 200px 0'}} className="w-[100px]" src={image} alt="" /> 
           <div>
            <p>{className}</p>
           </div>
           <p className="text-purple-700 font-semibold">${price}</p>
        </div>
    );
};

export default PopularItem;