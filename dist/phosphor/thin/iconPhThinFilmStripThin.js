export const iconPhThinFilmStripThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM36,84h88v88H36Zm96-8V52h40V76Zm-8,0H84V52h40Zm0,104v24H84V180Zm8,0h40v24H132Zm0-8V84h88v88ZM220,56V76H180V52h36A4,4,0,0,1,220,56ZM40,52H76V76H36V56A4,4,0,0,1,40,52ZM36,200V180H76v24H40A4,4,0,0,1,36,200Zm180,4H180V180h40v20A4,4,0,0,1,216,204Z"/></svg>`;
}
