export const iconPhLightProjectorScreen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,78a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V64A14,14,0,0,0,40,78h2V178H32a6,6,0,0,0,0,12h90v20.84a22,22,0,1,0,12,0V190h90a6,6,0,0,0,0-12H214V78ZM138,232a10,10,0,1,1-10-10A10,10,0,0,1,138,232ZM38,64V48a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H40A2,2,0,0,1,38,64ZM202,178H54V78H202Z"/></svg>`;
}
