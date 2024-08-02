export const iconPhThinStethoscope = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,160a8,8,0,1,1-8-8A8,8,0,0,1,216,160Zm-4.17,35.79A44.06,44.06,0,0,1,168,236H144a44.05,44.05,0,0,1-44-44V147.85A60,60,0,0,1,44,88V40a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H52V88a52,52,0,0,0,52.69,52C133,139.63,156,115.93,156,87.17V44H136a4,4,0,0,1,0-8h24a4,4,0,0,1,4,4V87.17c0,32-24.84,58.59-56,60.69V192a36,36,0,0,0,36,36h24a36.05,36.05,0,0,0,35.8-32.25,36,36,0,1,1,8,0ZM236,160a28,28,0,1,0-28,28A28,28,0,0,0,236,160Z"/></svg>`;
}
