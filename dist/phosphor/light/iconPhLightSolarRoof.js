export const iconPhLightSolarRoof = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M245.37,125.32l-40-80A6,6,0,0,0,200,42H56a6,6,0,0,0-5.37,3.32l-40,80A6.07,6.07,0,0,0,10,128v56a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V128A6.07,6.07,0,0,0,245.37,125.32ZM99.71,122l-14-28h34.58l14,28Zm.58-68,14,28H79.71l-14-28Zm48,0,14,28H127.71l-14-28Zm-.58,68-14-28h34.58l14,28Zm48,0-14-28h34.58l14,28Zm14.58-40H175.71l-14-28h34.58ZM22,184V129.42l34-68,34,68V186H24A2,2,0,0,1,22,184Zm210,2H102V134H234v50A2,2,0,0,1,232,186Z"/></svg>`;
}
