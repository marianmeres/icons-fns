export const iconPhFillAngularLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,104.47,141.07,128H114.93ZM231.93,73.06l-16,120a8,8,0,0,1-4.35,6.1l-80,40a8,8,0,0,1-7.16,0l-80-40a8,8,0,0,1-4.35-6.1l-16-120a8,8,0,0,1,4.85-8.44l96-40a7.93,7.93,0,0,1,6.16,0l96,40A8,8,0,0,1,231.93,73.06ZM175,156.12l-40-72a8,8,0,0,0-14,0l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76Z"/></svg>`;
}
