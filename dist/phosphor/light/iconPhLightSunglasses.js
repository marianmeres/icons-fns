export const iconPhLightSunglasses = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v58H38V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,0V142h36v22a42,42,0,0,0,84,0V72A30,30,0,0,0,200,42ZM38,164V142.48L84.53,189A30,30,0,0,1,38,164Zm60,0a29.83,29.83,0,0,1-5,16.53L54.48,142H98Zm60,0V142.48L204.53,189A30,30,0,0,1,158,164Zm55,16.53L174.48,142H218v22A29.83,29.83,0,0,1,213,180.53Z"/></svg>`;
}
