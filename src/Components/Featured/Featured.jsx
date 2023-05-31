
import fImg from '../../assets/home/featured.jpg'
import SectionTitle from '../SectionTitle';
import './Featured.css'


const Featured = () => {
    return (
        <section className="featured bg-fixed my-20 pt-12 ">
            <SectionTitle

                heading={"Featured Items"}
                subHeading={"--- Check it Out ---"}
            >

            </SectionTitle>

            <div className="md:flex justify-center items-center  bg-slate-600 bg-opacity-40 text-white mt-8 pb-20 px-36">
                <div>
                    <img src={fImg} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Dec 01, 1998</p>
                    <p className="uppercase">where can i order ?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quibusdam impedit autem fuga, quod, unde cum quae veniam delectus dolore id. Magnam voluptatibus nesciunt a nobis, expedita perspiciatis architecto facilis?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>


        </section>
    );
};

export default Featured;