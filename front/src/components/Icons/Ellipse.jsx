const EllipseSVGWithNumber = ({ fillColor, number, svgWidth, svgHeight, fontSize, textY}) => {
    const viewboxWidth = svgWidth * 1.2;
    const radius = svgWidth / 2;
    const textX = radius;
  
    return (
      <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${viewboxWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-number">
        <circle id="Ellipse 3" cx={radius} cy={radius} r={radius} fill={fillColor} />
        <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={fontSize} fontWeight="500">
          {number}
        </text>
      </svg>
    );
  };
  
  export default EllipseSVGWithNumber;