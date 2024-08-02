export const iconPhLightFigmaLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188.45,96A38,38,0,0,0,168,26H96A38,38,0,0,0,75.55,96,38,38,0,0,0,77,160.89,42,42,0,1,0,142,196V155.68A38,38,0,1,0,188.45,96ZM194,64a26,26,0,0,1-26,26H142V38h26A26,26,0,0,1,194,64ZM70,64A26,26,0,0,1,96,38h34V90H96A26,26,0,0,1,70,64Zm26,90a26,26,0,0,1,0-52h34v52H96Zm34,42a30,30,0,1,1-30-30h30Zm38-42a26,26,0,1,1,26-26A26,26,0,0,1,168,154Z"/></svg>`;
}
