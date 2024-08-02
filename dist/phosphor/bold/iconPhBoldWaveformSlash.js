export const iconPhBoldWaveformSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M60,96v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0ZM56.88,31.93A12,12,0,1,0,39.12,48.07L76,88.64V224a12,12,0,0,0,24,0V115l16,17.6V192a12,12,0,0,0,24,0V159l59.12,65a12,12,0,0,0,17.76-16.14ZM128,80.54a12,12,0,0,0,12-12V64a12,12,0,0,0-24,0v4.54A12,12,0,0,0,128,80.54Zm40,44a12,12,0,0,0,12-12V96a12,12,0,0,0-24,0v16.54A12,12,0,0,0,168,124.54ZM208,68a12,12,0,0,0-12,12v76.54a12,12,0,0,0,24,0V80A12,12,0,0,0,208,68Z"/></svg>`;
}
