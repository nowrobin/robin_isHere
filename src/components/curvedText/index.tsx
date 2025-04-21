import React from 'react';

interface RoundedCurvedTextProps {
  text?: string;
  centerText?: string;
  className?: string;
}

const RoundedCurvedText = ({
  text = 'Hello Around the Circle!',
  centerText = 'Project',
  className = '',
}: RoundedCurvedTextProps) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <path
        id="circlePath"
        d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
        fill='none'
      />
      {/* <text className="fill-current text-[10px] font-semibold ">
        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text> */}
      <g className="animate-spin origin-center [animation-duration:40s] ">
        <path
          id="circlePath"
          d="
            M 10, 50
            a 40,40 0 1,1 80,0
            40,40 0 1,1 -80,0
          "
          fill="none"
        />
        <text className="fill-current text-[8px] font-semibold">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </g>

      {/* 중심에 위치한 텍스트 */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-[10px] font-bold"
      >
        {centerText}
      </text>
    </svg>
  );
};

export default RoundedCurvedText;
