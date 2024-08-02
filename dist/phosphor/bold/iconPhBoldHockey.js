export const iconPhBoldHockey = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,148H132.75L41.14,40.23A12,12,0,0,0,22.86,55.77l95.16,112,.06.07L156.46,213A20,20,0,0,0,171.7,220H224a20,20,0,0,0,20-20V168A20,20,0,0,0,224,148Zm-70.85,24H180v24h-6.45ZM220,196H204V172h16Zm-66.34-83.77,61.2-72a12,12,0,0,1,18.28,15.54l-61.2,72a12,12,0,1,1-18.28-15.54Zm-44.14,70.45a12,12,0,0,0-16.91,1.37L82.45,196H76V171.93A12,12,0,0,0,74.7,148H32a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H84.3A20,20,0,0,0,99.54,213l11.35-13.36A12,12,0,0,0,109.52,182.68ZM36,172H52v24H36Z"/></svg>`;
}
