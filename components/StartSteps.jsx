import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} sm:flex-row flex-col`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="p-2 m-2 mt-[20px] text-center sm:text-[25px] sm:text-left sm:ml-[30px] font-poppins flex-1  font-normal text-[20px] text-[black] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
