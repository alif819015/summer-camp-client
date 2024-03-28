
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-4/12 text-center my-16">
           <h3 className="border-y-2 uppercase text 2xl py-4">{heading}</h3> 
           <p className="mb-2">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;