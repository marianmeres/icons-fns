export const iconPhBoldMarkerCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM108,140h40v16H108ZM92,203.92V180h72v23.9A84.33,84.33,0,0,1,92,203.92Zm96-17.13V176a20,20,0,0,0-16-19.6V136a20,20,0,0,0-14.85-19.31L147.27,81.2a20,20,0,0,0-38.54,0l-9.88,35.49A20,20,0,0,0,84,136v20.42A20,20,0,0,0,68,176v10.77a84,84,0,1,1,120,0Z"/></svg>`;
}
