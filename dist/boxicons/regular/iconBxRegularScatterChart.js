export const iconBxRegularScatterChart = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1z"/><circle cx="10" cy="8" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="11.5" cy="13.5" r="1.5"/><circle cx="16.5" cy="6.5" r="1.5"/></svg>`;
}
