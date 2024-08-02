export const iconPhLightTumblrLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,118a6,6,0,0,0,6-6V72a6,6,0,0,0-6-6H150V24a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6A42,42,0,0,1,64,66a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6H90v58a62.07,62.07,0,0,0,62,62h40a6,6,0,0,0,6-6V184a6,6,0,0,0-6-6H160a10,10,0,0,1-10-10V118Zm-32,72h26v36H152a50.06,50.06,0,0,1-50-50V112a6,6,0,0,0-6-6H70V77.67A54.12,54.12,0,0,0,117.67,30H138V72a6,6,0,0,0,6,6h42v28H144a6,6,0,0,0-6,6v56A22,22,0,0,0,160,190Z"/></svg>`;
}
