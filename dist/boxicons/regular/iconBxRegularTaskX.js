export const iconBxRegularTaskX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M3 20c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15zM5 5h2v2h10V5h2v15H5V5z"/><path d="M14.292 10.295 12 12.587l-2.292-2.292-1.414 1.414 2.292 2.292-2.292 2.292 1.414 1.414L12 15.415l2.292 2.292 1.414-1.414-2.292-2.292 2.292-2.292z"/></svg>`;
}
