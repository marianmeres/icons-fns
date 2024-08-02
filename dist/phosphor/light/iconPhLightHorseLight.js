export const iconPhLightHorseLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M134,100a10,10,0,1,1-10-10A10,10,0,0,1,134,100Zm96,29.45A102.29,102.29,0,0,1,130.06,230l-2.13,0A101.33,101.33,0,0,1,60,204.47a6,6,0,1,1,8-8.94,87.12,87.12,0,0,0,22.09,14.39l29-39.89c-23.93-11.37-50.18-6.93-64.8-4.45a29.84,29.84,0,0,1-29.38-12,3.62,3.62,0,0,1-.22-.32l-13.79-22a6,6,0,0,1,1.95-8.29L114,60.65V32a6,6,0,0,1,6-6h8A102,102,0,0,1,230,129.45Zm-12-.17A90,90,0,0,0,128,38h-2V64a6,6,0,0,1-2.86,5.11L24.29,129.94l10.47,16.74a17.91,17.91,0,0,0,17.54,7.06c15.82-2.67,48.42-8.18,77.23,8.22A42,42,0,0,0,170,120a6,6,0,0,1,12,0,54.06,54.06,0,0,1-50.87,53.9l-29.36,40.37A92.83,92.83,0,0,0,129.82,218,90.28,90.28,0,0,0,218,129.28Z"/></svg>`;
}
