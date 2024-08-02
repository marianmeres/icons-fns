export const iconPhLightPixLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M233.91,118.14l-96-96a13.93,13.93,0,0,0-19.72,0l-96,96.05a13.93,13.93,0,0,0,0,19.72l96.05,96a13.93,13.93,0,0,0,19.72,0l96-96a13.93,13.93,0,0,0,0-19.72ZM126.62,30.57a2,2,0,0,1,2.76,0L188.81,90H160a6,6,0,0,0-4.24,1.76L128,119.52,100.24,91.76A6,6,0,0,0,96,90H67.19ZM30,128a1.94,1.94,0,0,1,.57-1.38L55.19,102H93.51l26,26-26,26H55.19L30.57,129.38A1.94,1.94,0,0,1,30,128Zm99.38,97.43a2,2,0,0,1-2.76,0L67.19,166H96a6,6,0,0,0,4.24-1.76L128,136.48l27.76,27.76A6,6,0,0,0,160,166h28.81Zm96.05-96.05L200.81,154H162.49l-26-26,26-26h38.32l24.62,24.62a2,2,0,0,1,0,2.76Z"/></svg>`;
}
