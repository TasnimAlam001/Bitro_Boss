

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center my-16 mx-auto md:w-4/12">
            <p className="text-yellow-700 italic pb-2">--- {subHeading} ---</p>
            <h3 className="text-4xl italic border-y-2 p-3 uppercase w-full">{heading}</h3>
        </div>
    );
};

export default SectionTitle;