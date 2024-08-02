export const iconPhThinMailboxThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,152a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H96A4,4,0,0,1,100,152Zm136-36v60a12,12,0,0,1-12,12H132v36a4,4,0,0,1-8,0V188H32a12,12,0,0,1-12-12V116A56.06,56.06,0,0,1,76,60h80V24a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H164V60h16A56.06,56.06,0,0,1,236,116ZM124,180V116a48,48,0,0,0-96,0v60a4,4,0,0,0,4,4Zm104-64a48.05,48.05,0,0,0-48-48H164v76a4,4,0,0,1-8,0V68H104.82A56,56,0,0,1,132,116v64h92a4,4,0,0,0,4-4Z"/></svg>`;
}
