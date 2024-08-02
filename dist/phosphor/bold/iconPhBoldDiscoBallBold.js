export const iconPhBoldDiscoBallBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,60.78V16a12,12,0,0,0-24,0V60.78a92,92,0,1,0,24,0ZM178.92,140h-23.4c-1.64-20.74-7.36-37-13.81-49.15A68.23,68.23,0,0,1,178.92,140ZM112,215c-7-8.62-17-25.09-19.45-51h38.9C129,189.9,119,206.37,112,215ZM92.55,140C95,114.1,105,97.63,112,89c7,8.62,17,25.09,19.45,51ZM82.29,90.85C75.84,103,70.12,119.26,68.48,140H45.08A68.23,68.23,0,0,1,82.29,90.85ZM45.08,164h23.4c1.64,20.74,7.36,37,13.81,49.15A68.23,68.23,0,0,1,45.08,164Zm96.63,49.15c6.45-12.15,12.17-28.41,13.81-49.15h23.4A68.23,68.23,0,0,1,141.71,213.15ZM256,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,256,88ZM148,36a12,12,0,0,1,12-12h8V16a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0V48h-8A12,12,0,0,1,148,36Z"/></svg>`;
}