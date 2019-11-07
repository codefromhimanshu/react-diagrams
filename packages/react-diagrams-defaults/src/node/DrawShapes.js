import React from 'react';
import * as Shapes from '../../assets/Shapes.json';
import './drawshapes.css'
const DrawShapes = props => {
  const svgObjectArray = Object.keys(Shapes.default).map((key, index) => {
    const pathParams = JSON.parse(
      JSON.stringify({
        viewBox: Shapes.default[key].viewBox,
        path: Shapes.default[key].path,
      })
    );
    const shapeBuilder = (
      <div onClick={() => props.addShape(key)} key={index}>
        <svg
          width={Shapes.default[key].size.x}
          height={Shapes.default[key].size.y}
          viewBox={Shapes.default[key].viewBox}
        >
          {Shapes.default[key].path.map((pth, index) => {
            return <path d={pth.draw} style={{fill: pth.fill, stroke: pth.stroke}} key={index} />;
          })}
        </svg>
      </div>
    );
    return shapeBuilder;
  });
  return <div className="shapes-element">{svgObjectArray}</div>;
};

export default DrawShapes;
