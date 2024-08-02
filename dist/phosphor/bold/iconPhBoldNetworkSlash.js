export const iconPhBoldNetworkSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,1,0,39.12,48.07L93.6,108H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132h39.42l83.7,92.07a12,12,0,0,0,17.76-16.14ZM76,204H52V180H76ZM92,42.14V40a20,20,0,0,1,20-20h32a20,20,0,0,1,20,20V72a20,20,0,0,1-20,20h-5.58a12,12,0,1,1,0-24H140V44H115.86A12,12,0,0,1,92,42.14ZM244,120a12,12,0,0,1-12,12H204v6.94a12,12,0,0,1-24,0V132h-5.21a12,12,0,1,1,0-24H232A12,12,0,0,1,244,120Z"/></svg>`;
}
