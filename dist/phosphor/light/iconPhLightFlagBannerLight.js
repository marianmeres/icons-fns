export const iconPhLightFlagBannerLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.07,52.8A6,6,0,0,0,232,50H40a6,6,0,0,0-4.24,10.24L79.51,104,35.76,147.76A6,6,0,0,0,40,158H176.78l-30.2,63.42a6,6,0,0,0,10.84,5.16l80-168A6,6,0,0,0,237.07,52.8ZM182.5,146h-128l37.75-37.76a6,6,0,0,0,0-8.48L54.49,62h168Z"/></svg>`;
}
