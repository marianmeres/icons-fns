export const iconBxSolidBrightness = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21.546 11.646 19 9.101V5.5a.5.5 0 0 0-.5-.5h-3.601l-2.546-2.546a.5.5 0 0 0-.707 0L9.101 5H5.5a.5.5 0 0 0-.5.5v3.601l-2.546 2.546a.5.5 0 0 0 0 .707L5 14.899V18.5a.5.5 0 0 0 .5.5h3.601l2.546 2.546a.5.5 0 0 0 .707 0L14.899 19H18.5a.5.5 0 0 0 .5-.5v-3.601l2.546-2.546a.5.5 0 0 0 0-.707zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>`;
}
