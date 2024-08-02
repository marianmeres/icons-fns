export const iconPhLightSailboatLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M245.41,173.4A6,6,0,0,0,240,170H142V142h74a6,6,0,0,0,4.44-10L142,45.68V8a6,6,0,0,0-10.66-3.78l-104,128A6,6,0,0,0,32,142h98v28H16a6,6,0,0,0-4.69,9.75l29.6,37A14,14,0,0,0,51.84,222H204.16a14,14,0,0,0,10.93-5.25l29.6-37A6,6,0,0,0,245.41,173.4Zm-43-43.4H142V63.52ZM44.61,130,130,24.9V130Zm161.11,79.25a2,2,0,0,1-1.56.75H51.84a2,2,0,0,1-1.56-.75L28.48,182h199Z"/></svg>`;
}
