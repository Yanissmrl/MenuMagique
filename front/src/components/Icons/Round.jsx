const RoundIconComponent = ({ fillColor, icon }) => {
    const svgWidth = 42;
    const svgHeight = 42;
    const radius = svgWidth / 2;
  
    return (
      <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-number mb-10">
        <circle id="Ellipse 3" cx={radius} cy={radius} r={radius} fill={fillColor} />
        <div x="10%" y="10%" width="80%" height="80%">
          {icon}
        </div>
      </svg>
    );
  };
  export default RoundIconComponent;