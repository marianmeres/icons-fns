export const iconPhThinSmileyMelting = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,140a8,8,0,1,1-8-8A8,8,0,0,1,172,140ZM124,92a8,8,0,1,0-8,8A8,8,0,0,0,124,92Zm74.21-35.2A100,100,0,0,0,53.46,194.67a4,4,0,1,0,6-5.34,92,92,0,1,1,137.16,0,4,4,0,0,0,6,5.34A100,100,0,0,0,198.21,56.8ZM152,172H136c-12,0-25.28-4.92-35.42-13.16C89.89,150.15,84,139.19,84,128a43.89,43.89,0,0,1,.61-7.34,4,4,0,0,0-7.89-1.32A52.17,52.17,0,0,0,76,128c0,29.29,32.25,52,60,52h16a12,12,0,0,1,0,24H96a20,20,0,0,0,0,40,4,4,0,0,0,0-8,12,12,0,0,1,0-24h56a20,20,0,0,0,0-40Z"/></svg>`;
}
