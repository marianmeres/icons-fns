export const iconPhFillSpiralFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96c-1.4,0-2.8,0-4.18.1A80.06,80.06,0,0,0,56,128a64.07,64.07,0,0,0,64,64,44.05,44.05,0,0,0,44-44,32,32,0,0,0-32-32,8,8,0,0,0,0,16,16,16,0,0,1,16,16,28,28,0,0,1-28,28,48.05,48.05,0,0,1-48-48,64.07,64.07,0,0,1,64-64,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"/></svg>`;
}
