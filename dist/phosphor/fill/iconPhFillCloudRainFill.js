export const iconPhFillCloudRainFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M158.66,196.44l-32,48a8,8,0,1,1-13.32-8.88l32-48a8,8,0,0,1,13.32,8.88ZM231.87,87.55a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,96l-.6,0A8.14,8.14,0,0,1,64,87.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,116.36C24.2,145.07,48.12,168,76.84,168h36.21L89.34,203.56a8,8,0,0,0,13.32,8.88L132.28,168H156A76.08,76.08,0,0,0,231.87,87.55Z"/></svg>`;
}
