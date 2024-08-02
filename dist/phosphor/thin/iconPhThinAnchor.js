export const iconPhThinAnchor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,140a4,4,0,0,0-4,4c0,28.94-19,34.13-41.05,40.14-14.29,3.9-29.82,8.14-38.95,20.24V124h36a4,4,0,0,0,0-8H132V83.71a28,28,0,1,0-8,0V116H88a4,4,0,0,0,0,8h36v80.38c-9.13-12.1-24.66-16.34-38.95-20.24-22-6-41-11.2-41-40.14a4,4,0,0,0-8,0c0,35.06,24.94,41.86,47,47.86S124,203.06,124,232a4,4,0,0,0,8,0c0-28.94,19-34.13,41.05-40.14S220,179.06,220,144A4,4,0,0,0,216,140ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Z"/></svg>`;
}
