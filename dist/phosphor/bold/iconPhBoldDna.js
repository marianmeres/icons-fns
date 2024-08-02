export const iconPhBoldDna = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,204.5V232a12,12,0,0,1-24,0V204.5a59.68,59.68,0,0,0-33.17-53.67l-48.4-24.2A83.54,83.54,0,0,1,52,51.5V24a12,12,0,0,1,24,0V51.5a59.68,59.68,0,0,0,33.17,53.67l48.4,24.2A83.54,83.54,0,0,1,204,204.5Zm-52-.5H76a59.75,59.75,0,0,1,2.34-16h56.2a12,12,0,0,0,0-24H91.76c1-1.1,2-2.18,3.13-3.21a12,12,0,0,0-16.45-17.48A84.38,84.38,0,0,0,52,204.5V232a12,12,0,0,0,24,0v-4h76a12,12,0,0,0,0-24ZM192,12a12,12,0,0,0-12,12v4H104a12,12,0,0,0,0,24h76a59.75,59.75,0,0,1-2.34,16H121.44a12,12,0,0,0,0,24h42.8c-1,1.1-2,2.18-3.13,3.21a12,12,0,0,0,16.45,17.48A84.38,84.38,0,0,0,204,51.5V24A12,12,0,0,0,192,12Z"/></svg>`;
}
