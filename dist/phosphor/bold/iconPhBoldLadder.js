export const iconPhBoldLadder = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.27,211.9,168.77,73l7.63-21H184a12,12,0,0,0,0-24H88a12,12,0,0,0-1.11,23.94l-58.16,160a12,12,0,0,0,7.17,15.37A11.83,11.83,0,0,0,40,228a12,12,0,0,0,11.28-7.9L60,196H98.5l-5.78,15.9a12,12,0,0,0,7.18,15.37,11.79,11.79,0,0,0,4.1.73,12,12,0,0,0,11.28-7.9L132.77,172h46.46l17.49,48.1A12,12,0,0,0,208,228a11.83,11.83,0,0,0,4.1-.73A12,12,0,0,0,219.27,211.9ZM124.69,124H86.22L95,100h38.46Zm17.45-48H103.68l8.73-24h38.46ZM68.77,172l8.73-24H116l-8.73,24Zm72.73-24L156,108.11,170.5,148Z"/></svg>`;
}
