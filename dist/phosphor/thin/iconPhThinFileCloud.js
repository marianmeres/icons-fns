export const iconPhThinFileCloud = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H176a4,4,0,0,0,0,8h24a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM108,132a47.72,47.72,0,0,0-45.3,32H60a32,32,0,0,0,0,64h48a48,48,0,0,0,0-96Zm0,88H60a24,24,0,0,1,0-48h.66c-.2,1.2-.35,2.41-.46,3.64a4,4,0,0,0,8,.72,41.2,41.2,0,0,1,1.23-6.92,4.68,4.68,0,0,0,.21-.73A40,40,0,1,1,108,220Z"/></svg>`;
}
