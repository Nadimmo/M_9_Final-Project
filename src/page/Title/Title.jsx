/* eslint-disable react/prop-types */

const Title = ({title, short}) => {
    return (
        <div className="mx-auto text-center">
        <p className="xl italic text-orange-400">- - -{title}- - -</p>
        <hr className="w-[300px] lg:w-[400px] border-2 text-center mx-auto my-2" />
        <h3 className="text-4xl uppercase mt-2">{short}</h3>
        <hr className="w-[300px] lg:w-[400px] border-2 text-center mx-auto my-2 border-5" />
      </div>
    );
};

export default Title;