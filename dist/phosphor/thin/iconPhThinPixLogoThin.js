export const iconPhThinPixLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232.5,119.55l-96.05-96a12,12,0,0,0-16.9,0l-96,96.05a12,12,0,0,0,0,16.9l96.05,96.05a12,12,0,0,0,16.9,0l96.05-96.05a12,12,0,0,0,0-16.9ZM125.21,29.16a3.94,3.94,0,0,1,5.58,0L193.64,92H160a4,4,0,0,0-2.83,1.17L128,122.34,98.83,93.17A4,4,0,0,0,96,92H62.36ZM28,128a3.9,3.9,0,0,1,1.16-2.79L54.36,100h40l28,28-28,28h-40l-25.2-25.21A3.9,3.9,0,0,1,28,128Zm102.79,98.84a4,4,0,0,1-5.58,0L62.36,164H96a4,4,0,0,0,2.83-1.17L128,133.66l29.17,29.17A4,4,0,0,0,160,164h33.64Zm96.05-96.05L201.64,156h-40l-28-28,28-28h40l25.2,25.21a3.94,3.94,0,0,1,0,5.58Z"/></svg>`;
}
