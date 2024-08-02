export const iconPhLightGoogleChromeLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,12a90,90,0,0,1,77.33,44H128a46.07,46.07,0,0,0-44.93,36.17L56.91,72.87A89.91,89.91,0,0,1,128,38Zm34,90a34,34,0,1,1-34-34A34,34,0,0,1,162,128ZM38,128A89.4,89.4,0,0,1,49.5,84l38.66,67c.06.1.13.18.19.27A45.94,45.94,0,0,0,142,171.83l-26.17,45.34A90.13,90.13,0,0,1,38,128Zm91.16,90,38.68-67,.21-.41A45.9,45.9,0,0,0,159,94h52.37a90,90,0,0,1-82.16,124Z"/></svg>`;
}
