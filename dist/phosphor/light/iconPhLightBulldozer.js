export const iconPhLightBulldozer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,202h-8a10,10,0,0,1-10-10V160a10,10,0,0,1,10-10h8a6,6,0,0,0,0-12h-8a22,22,0,0,0-22,22v10H197.52a38.08,38.08,0,0,0-33.43-31.78l-36.5-87.61A14,14,0,0,0,114.67,42H24A14,14,0,0,0,10,56v96.72A38,38,0,0,0,40,214H160a38.05,38.05,0,0,0,37.52-32H218v10a22,22,0,0,0,22,22h8a6,6,0,0,0,0-12ZM116.51,55.23,151,138H62V54h52.67A2,2,0,0,1,116.51,55.23ZM24,54H50v84H40a37.82,37.82,0,0,0-18,4.54V56A2,2,0,0,1,24,54ZM160,202H40a26,26,0,0,1,0-52H160a26,26,0,0,1,0,52Zm6-26a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H160A6,6,0,0,1,166,176Z"/></svg>`;
}
