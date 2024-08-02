export const iconPhThinSubtitlesThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,52H32A12,12,0,0,0,20,64V192a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Zm4,140a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H224a4,4,0,0,1,4,4ZM52,136a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H56A4,4,0,0,1,52,136Zm152,0a4,4,0,0,1-4,4H104a4,4,0,0,1,0-8h96A4,4,0,0,1,204,136Zm-48,32a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8h96A4,4,0,0,1,156,168Zm48,0a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h16A4,4,0,0,1,204,168Z"/></svg>`;
}
