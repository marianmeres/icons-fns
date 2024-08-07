export const iconPhThinFileVideo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM153.94,148.5a4,4,0,0,0-4.06.11L124,164.78V160a12,12,0,0,0-12-12H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-4.78l25.88,16.17A4,4,0,0,0,152,220a4.06,4.06,0,0,0,1.94-.5A4,4,0,0,0,156,216V152A4,4,0,0,0,153.94,148.5ZM116,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm32,.78-24-15V174.22l24-15Z"/></svg>`;
}
