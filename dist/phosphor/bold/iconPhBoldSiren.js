export const iconPhBoldSiren = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,20V12a12,12,0,0,1,24,0v8a12,12,0,0,1-24,0Zm84,36a12,12,0,0,0,8.49-3.51l8-8a12,12,0,1,0-17-17l-8,8A12,12,0,0,0,200,56ZM47.51,52.49a12,12,0,0,0,17-17l-8-8a12,12,0,0,0-17,17ZM236,176v24a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V176a20,20,0,0,1,16-19.6V140a92,92,0,0,1,92-92h.71C179,48.38,220,90.1,220,141v15.4A20,20,0,0,1,236,176ZM60,140v16H196V141c0-37.77-30.27-68.72-67.48-69H128a68,68,0,0,0-68,68Zm152,40H44v16H212Zm-75.6-66.72a28,28,0,0,1,18.32,18.32,12,12,0,0,0,22.9-7.2,52,52,0,0,0-34-34,12,12,0,0,0-7.2,22.9Z"/></svg>`;
}
