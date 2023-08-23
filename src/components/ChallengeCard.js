import clsx from 'clsx';

const ChallengeCard = ({ challenge }) => {
    console.log ('xxx challenge ', challenge)
    const {serial, description} = challenge;
    const formattedSerial = serial < 10 ? `0${serial}` : serial;
    return (
      <div className={clsx("bg-white p-4 shadow-md mb-5", serial ===1 && "bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB]  transition duration-300", serial === 5 && "!mb-0")}>
      <div className="flex items-center mb-2">
        <p className={clsx("text-3xl text-vone font-bold mr-2",serial ===1 && "text-white text-opacity-50" )}>{formattedSerial}</p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
    );
};

export default ChallengeCard;