export const iconPhThinBehanceLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108.16,122.74A34,34,0,0,0,90,60H32a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4H94a38,38,0,0,0,14.16-73.26ZM36,68H90a26,26,0,0,1,0,52H36ZM94,188H36V128H94a30,30,0,0,1,0,60ZM164,80a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H168A4,4,0,0,1,164,80Zm36,28a44,44,0,1,0,35.2,70.41,4,4,0,0,0-6.4-4.81A36,36,0,0,1,164.22,156H240a4,4,0,0,0,4-4A44.05,44.05,0,0,0,200,108Zm-35.78,40a36,36,0,0,1,71.56,0Z"/></svg>`;
}
