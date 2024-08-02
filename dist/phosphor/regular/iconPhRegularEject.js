export const iconPhRegularEject = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,152H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Zm0,40H48V168H208ZM48.24,136H207.76a16.18,16.18,0,0,0,14.93-9.76,15.59,15.59,0,0,0-3.1-17.12L145.86,31.61a24.76,24.76,0,0,0-35.72,0L36.41,109.12h0a15.59,15.59,0,0,0-3.1,17.12A16.18,16.18,0,0,0,48.24,136Zm73.49-93.36a8.77,8.77,0,0,1,12.54,0L207.85,120H48.14Z"/></svg>`;
}
