export const iconPhRegularHairDryer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,88a32,32,0,1,0-32,32A32,32,0,0,0,200,88Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,168,104Zm9.42,102.62L209,137.07A64,64,0,0,0,168,24a8.4,8.4,0,0,0-1.32.11L29.37,47A16,16,0,0,0,16,62.78v50.44A16,16,0,0,0,29.37,129L128,145.44V200a16,16,0,0,0,16,16,40,40,0,0,0,40,40h16a8,8,0,0,0,0-16H184a24,24,0,0,1-24-24h2.85A16,16,0,0,0,177.42,206.62ZM32,62.78,168.64,40a48,48,0,0,1,0,96L32,113.23Zm134.68,89.11A8.4,8.4,0,0,0,168,152a63.9,63.9,0,0,0,17.82-2.54l-23,50.54H144V148.11Z"/></svg>`;
}