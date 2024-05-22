export const iconBxRegularLira = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M9 21h2c4.411 0 8-4.038 8-9h-2c0 3.86-2.691 7-6 7v-7.358l6-1.385V8.204l-6 1.385V7.642l6-1.385V4.204l-6 1.385V3H9v3.05l-3 .693v2.053l3-.692v1.947l-3 .692v2.053l3-.692V21z"/></svg>`;
}
