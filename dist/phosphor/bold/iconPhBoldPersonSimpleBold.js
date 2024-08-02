export const iconPhBoldPersonSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,84A36,36,0,1,0,92,48,36,36,0,0,0,128,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,36ZM234.29,138.17a12,12,0,0,1-16.47,4.12c-.32-.19-32.37-18.92-77.82-21.88v27L201,216A12,12,0,1,1,183,232l-55-61.91L73,232A12,12,0,1,1,55,216l61-68.59v-27c-45.72,2.95-77.48,21.68-77.82,21.89a12,12,0,1,1-12.35-20.58C27.58,120.66,69.35,96,128,96s100.42,24.66,102.17,25.71A12,12,0,0,1,234.29,138.17Z"/></svg>`;
}
