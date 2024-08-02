export const iconPhBoldSteeringWheel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,144a16,16,0,1,1-16-16A16,16,0,0,1,144,144Zm92-16A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-70.45,28h41.63c.79-2.21,1.49-4.47,2.09-6.76a116,116,0,0,0-162.54,0q.9,3.44,2.09,6.76H90.45a20.07,20.07,0,0,1,18.73,13l16.06,42.93c.92,0,1.83.07,2.76.07s1.82,0,2.72-.07l16.1-43A20.09,20.09,0,0,1,165.55,156ZM44.41,119.73a139.85,139.85,0,0,1,167.18,0,84,84,0,0,0-167.18,0Zm53.08,86.51L87.68,180H62.1A84.46,84.46,0,0,0,97.49,206.24ZM193.9,180H168.32l-9.84,26.25A84.35,84.35,0,0,0,193.9,180Z"/></svg>`;
}
