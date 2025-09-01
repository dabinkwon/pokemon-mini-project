import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  filter: drop-shadow(0px 10px 15px rgba(235, 232, 226, 0.5));
  transform: rotateY(0deg);
  &.flipped {
    transform: rotateY(180deg);
  }
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden; /* 뒤집혔을 때 안 보이게 */
`;

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg); /* 뒷면은 미리 180도 돌려놓기 */
`;

export const FlipCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <FlipImageContainer className={isFlipped ? "flipped" : ""}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button
        className="py-1.5 px-5 rounded-[16px] border-2 border-gray-400 bg-white text-black font-semibold cursor-pointer"
        onClick={() => {
          setIsFlipped((prev) => !prev);
        }}
      >
        뒤집기
      </button>
    </>
  );
};
