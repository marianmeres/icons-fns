export const iconPhThinFileImage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M107.33,149.78a4,4,0,0,0-6.66,0L76.42,186.15,63.36,165.84a4,4,0,0,0-6.72,0l-36,56A4,4,0,0,0,24,228H152a4,4,0,0,0,3.33-6.22ZM31.33,220,60,175.4l13,20.22a4,4,0,0,0,3.33,1.83,3.93,3.93,0,0,0,3.36-1.78L104,159.21,144.53,220ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z"/></svg>`;
}
