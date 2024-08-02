export const iconPhThinEarSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M51,37.31A4,4,0,0,0,45,42.69L58.23,57.2A83.38,83.38,0,0,0,44,104c0,31.79,11.28,42.68,21.24,52.28C73.16,163.91,80,170.51,80,188a48.05,48.05,0,0,0,48,48c13.71,0,25.52-5.87,35.08-17.45a4,4,0,0,0-6.16-5.1C148.83,223.24,139.37,228,128,228a40,40,0,0,1-40-40c0-20.89-8.75-29.33-17.21-37.48C61.55,141.61,52,132.4,52,104A75.36,75.36,0,0,1,63.8,63.33l23,25.27A43.73,43.73,0,0,0,84,104a4,4,0,0,0,8,0,36.2,36.2,0,0,1,1-8.53L141.65,149A37,37,0,0,0,140,160a20,20,0,0,0,28.24,18.21L205,218.69a4,4,0,1,0,5.92-5.38ZM160,172a12,12,0,0,1-12-12,29.55,29.55,0,0,1,.24-3.79l14.13,15.55A12.37,12.37,0,0,1,160,172ZM83.55,37.36a4,4,0,0,1,1.37-5.49A84,84,0,0,1,212,104a4,4,0,0,1-8,0A76,76,0,0,0,89,38.74,4,4,0,0,1,83.55,37.36Zm76.89,80.81A29.85,29.85,0,0,0,164,104a36,36,0,0,0-47.68-34.06,4,4,0,1,1-2.59-7.57A44,44,0,0,1,172,104a38,38,0,0,1-4.46,17.84A4,4,0,0,1,164,124a3.87,3.87,0,0,1-1.83-.45A4,4,0,0,1,160.44,118.17Z"/></svg>`;
}
