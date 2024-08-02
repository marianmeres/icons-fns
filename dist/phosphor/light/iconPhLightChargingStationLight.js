export const iconPhLightChargingStationLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M133,124.64a6,6,0,0,1,.6,5.59l-16,40a6,6,0,1,1-11.14-4.46L119.14,134H96a6,6,0,0,1-5.57-8.23l16-40a6,6,0,0,1,11.14,4.46L104.86,122H128A6,6,0,0,1,133,124.64Zm113-38V168a22,22,0,0,1-44,0V128a10,10,0,0,0-10-10H174v92h18a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H50V56A22,22,0,0,1,72,34h80a22,22,0,0,1,22,22v50h18a22,22,0,0,1,22,22v40a10,10,0,0,0,20,0V86.63a9.93,9.93,0,0,0-2.93-7.07L211.76,60.24a6,6,0,0,1,8.48-8.48l19.32,19.31A21.88,21.88,0,0,1,246,86.63ZM162,210V56a10,10,0,0,0-10-10H72A10,10,0,0,0,62,56V210Z"/></svg>`;
}
