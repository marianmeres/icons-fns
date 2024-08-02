export const iconPhThinEyeClosed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226,171.47a3.92,3.92,0,0,1-2,.53,4,4,0,0,1-3.47-2l-21.15-37a120,120,0,0,1-41.91,19.53L164,191.34a4,4,0,0,1-3.29,4.6,3.79,3.79,0,0,1-.67.06,4,4,0,0,1-3.94-3.34l-6.41-38.5a128.17,128.17,0,0,1-43.28,0L100,192.66A4,4,0,0,1,96,196a3.88,3.88,0,0,1-.67-.06,4,4,0,0,1-3.29-4.6l6.48-38.83A120,120,0,0,1,56.62,133L35.47,170A4,4,0,0,1,32,172a3.92,3.92,0,0,1-2-.53A4,4,0,0,1,28.53,166l21.68-37.94a148.24,148.24,0,0,1-21.32-21.56,4,4,0,1,1,6.22-5C52.25,122.71,82.29,148,128,148s75.75-25.29,92.89-46.51a4,4,0,1,1,6.22,5,148.24,148.24,0,0,1-21.32,21.56L227.47,166A4,4,0,0,1,226,171.47Z"/></svg>`;
}
