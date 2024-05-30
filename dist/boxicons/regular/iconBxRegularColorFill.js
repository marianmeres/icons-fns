export const iconBxRegularColorFill = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.435-2-3.5zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414zM11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586L11 7.412z"/></svg>`;
}
