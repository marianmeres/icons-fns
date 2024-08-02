export const iconPhBoldChurch = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.17,141.71,196,121.21V104A12,12,0,0,0,190,93.58L140,65V52h12a12,12,0,0,0,0-24H140V16a12,12,0,0,0-24,0V28H104a12,12,0,0,0,0,24h12V65L66.05,93.58A12,12,0,0,0,60,104v17.21l-34.17,20.5A12,12,0,0,0,20,152v64a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V172a8,8,0,0,1,16,0v44a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V152A12,12,0,0,0,230.17,141.71ZM44,158.79l16-9.6V204H44ZM128,140a32,32,0,0,0-32,32v32H84V111l44-25.14L172,111v93H160V172A32,32,0,0,0,128,140Zm84,64H196V149.19l16,9.6Z"/></svg>`;
}
