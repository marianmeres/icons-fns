export const iconPhLightHockeyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,154H130L36.57,44.12a6,6,0,1,0-9.14,7.77L161,209.07A14,14,0,0,0,171.7,214H224a14,14,0,0,0,14-14V168A14,14,0,0,0,224,154Zm-53.82,47.3-30-35.3H194v36H171.7A2,2,0,0,1,170.18,201.3ZM226,200a2,2,0,0,1-2,2H206V166h18a2,2,0,0,1,2,2ZM110.89,181.08a6,6,0,0,0-8.46.68L85.82,201.3a2,2,0,0,1-1.52.7H62V166H85.2a6,6,0,0,0,0-12H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H84.3A14,14,0,0,0,95,209.07l16.6-19.54A6,6,0,0,0,110.89,181.08ZM30,200V168a2,2,0,0,1,2-2H50v36H32A2,2,0,0,1,30,200Zm121.43-75.88,68-80a6,6,0,1,1,9.14,7.77l-68,80a6,6,0,0,1-9.14-7.77Z"/></svg>`;
}
