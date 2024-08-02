export const iconPhThinPerspective = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,124H220V48a12,12,0,0,0-14.15-11.81l-160,29.1A12,12,0,0,0,36,77.09V124H16a4,4,0,0,0,0,8H36v46.91a12,12,0,0,0,9.85,11.8l160,29.09a11.28,11.28,0,0,0,2.16.2,12,12,0,0,0,12-12V132h20a4,4,0,0,0,0-8ZM44,77.09a4,4,0,0,1,3.28-3.93l160-29.09A4,4,0,0,1,212,48v76H44ZM212,208a4,4,0,0,1-4.72,3.93l-160-29.09A4,4,0,0,1,44,178.91V132H212Z"/></svg>`;
}
