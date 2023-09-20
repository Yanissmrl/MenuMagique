const EllipseSVGWithNumber = ({ fillColor, number }) => {
    const svgWidth = 125;
    const svgHeight = 125;
    const radius = svgWidth / 2;
    const textX = radius;
    const textY = 67.5;
  
    return (
      <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-number mb-10">
        <circle id="Ellipse 3" cx={radius} cy={radius} r={radius} fill={fillColor} />
        <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="64" fontWeight="500">
          {number}
        </text>
      </svg>
    );
  };
  
  export default EllipseSVGWithNumber;