export const iconPhLightGooglePlayLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238.84,115.93,71,19.89a14,14,0,0,0-14.12,0A13.68,13.68,0,0,0,50,31.87V224.13a13.68,13.68,0,0,0,6.92,11.94,14,14,0,0,0,14.12,0l167.8-96a13.75,13.75,0,0,0,0-24.14ZM62,217.5V38.5L151.51,128Zm98-81,22.19,22.19L78.4,218.07ZM78.4,37.93l103.79,59.4L160,119.52ZM233,129.58l-.1.06L193,152.49,168.49,128,193,103.51l39.94,22.85.1.06a1.76,1.76,0,0,1,0,3.16Z"/></svg>`;
}
