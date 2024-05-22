export const iconBxRegularExpandHorizontal = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M8.29 5.64 1.93 12l6.36 6.36 1.42-1.41L4.76 12l4.95-4.95-1.42-1.41zm6 1.41L19.24 12l-4.95 4.95 1.42 1.41L22.07 12l-6.36-6.36-1.42 1.41z"/></svg>`;
}
