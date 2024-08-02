export const iconPhRegularHockey = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,152H130.9L38.1,42.82A8,8,0,0,0,25.9,53.18L159.51,210.36A16,16,0,0,0,171.7,216H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-79.5,16H192v32H171.7ZM224,200H208V168h16ZM112.18,179.55a8,8,0,0,0-11.27.91L84.3,200H64V168H85.2a8,8,0,0,0,0-16H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H84.3a16,16,0,0,0,12.19-5.64l16.61-19.53A8,8,0,0,0,112.18,179.55ZM32,168H48v32H32Zm117.9-45.18,68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36Z"/></svg>`;
}
