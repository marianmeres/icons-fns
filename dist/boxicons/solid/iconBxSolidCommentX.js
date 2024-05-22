export const iconBxSolidCommentX = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-3.294 11.543-1.414 1.414-3.293-3.292-3.292 3.292-1.414-1.414 3.292-3.292-3.292-3.293 1.414-1.414 3.292 3.292 3.293-3.292 1.414 1.414-3.292 3.293 3.292 3.292z"/></svg>`;
}
