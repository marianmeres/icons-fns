export const iconPhLightAngularLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.31,66.46l-96-40a6.06,6.06,0,0,0-4.62,0l-96,40a6,6,0,0,0-3.64,6.33l16,120a6,6,0,0,0,3.27,4.58l80,40a6,6,0,0,0,5.36,0l80-40a6,6,0,0,0,3.27-4.58l16-120A6,6,0,0,0,226.31,66.46Zm-23.84,121.6L128,225.29,53.53,188.06l-15-112.29L128,38.5l89.44,37.27Zm-79.72-103-40,72a6,6,0,0,0,10.5,5.82L104.86,142h46.28l11.61,20.91A6,6,0,0,0,168,166a5.88,5.88,0,0,0,2.9-.76,6,6,0,0,0,2.34-8.15l-40-72a6,6,0,0,0-10.5,0ZM144.47,130H111.53L128,100.35Z"/></svg>`;
}
