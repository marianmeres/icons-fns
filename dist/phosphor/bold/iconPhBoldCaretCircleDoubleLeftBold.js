export const iconPhBoldCaretCircleDoubleLeftBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42Zm-10.91-82.95L153,128l23.53,23.53a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17Zm-56,0L97,128l23.52,23.53a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17Z"/></svg>`;
}