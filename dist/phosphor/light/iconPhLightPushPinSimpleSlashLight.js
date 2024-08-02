export const iconPhLightPushPinSimpleSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M85.25,40a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12h-8.85l19.17,108.64a6,6,0,0,1-4.86,7,5.41,5.41,0,0,1-1.05.1,6,6,0,0,1-5.9-5L171,46H91.25A6,6,0,0,1,85.25,40ZM212,220.44a6,6,0,0,1-8.48-.4L169,182H134v58a6,6,0,0,1-12,0V182H40a6,6,0,0,1,0-12H51L68.38,71.33,43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44Zm-54-50.44L78.58,82.56,63.15,170Z"/></svg>`;
}
