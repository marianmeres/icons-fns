export const iconPhBoldCityBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,204h-4V88a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12v36H116V40a12,12,0,0,0-12-12H32A12,12,0,0,0,20,40V204H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM164,100h48V204H164Zm-24,48v56H116V148ZM44,52H92V204H44ZM80,76v8a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm0,48v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Zm96,8v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Zm0-48v-8a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Z"/></svg>`;
}
