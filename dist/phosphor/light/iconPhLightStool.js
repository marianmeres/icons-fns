export const iconPhLightStool = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M198,64V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V64A14,14,0,0,0,72,78h9L58.07,223.06a6,6,0,0,0,5,6.87,6,6,0,0,0,6.86-5L78,174H178l8,50.93a6,6,0,1,0,11.86-1.87L175,78h9A14,14,0,0,0,198,64ZM70,64V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H72A2,2,0,0,1,70,64Zm106.14,98H79.86L93.13,78h69.74Z"/></svg>`;
}
