export const iconPhThinIdentificationBadge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M146.7,166.75a36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,76.8,189.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.65,63.65,0,0,0,146.7,166.75ZM100,136a28,28,0,1,1,28,28A28,28,0,0,1,100,136ZM200,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM92,64a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Z"/></svg>`;
}
