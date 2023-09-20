const RectangleSVGWithAscii = ({ fillColor, ascii }) => {
    const svgWidth = 55;
    const svgHeight = 55;
    const svgRx =10
    const radius = svgWidth / 2;
    const textX = radius;
    const textY = 30.5;
  
    return (
      <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-10">
        <circle id="Rectangle" cx={radius} cy={radius} r={radius} fill={fillColor} />
        <rect width={svgWidth} height={svgHeight} rx={svgRx} fill={fillColor}/>
        <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="36" fontWeight="500">
          {ascii}
        </text>
      </svg>
    );
  };
  
  export default RectangleSVGWithAscii;
