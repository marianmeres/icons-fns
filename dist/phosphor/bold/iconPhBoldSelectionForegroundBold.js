export const iconPhBoldSelectionForegroundBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M68,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20v-8a12,12,0,0,1,24,0v4h4A12,12,0,0,1,68,216Zm44-12H96a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24ZM40,172a12,12,0,0,0,12-12V144a12,12,0,0,0-24,0v16A12,12,0,0,0,40,172Zm128,16a12,12,0,0,0-12,12v4h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20v-8A12,12,0,0,0,168,188Zm0-72a12,12,0,0,0,12-12V96a20,20,0,0,0-20-20h-8a12,12,0,0,0,0,24h4v4A12,12,0,0,0,168,116ZM56,76H48A20,20,0,0,0,28,96v8a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM208,28H100A20,20,0,0,0,80,48V88a5.47,5.47,0,0,0,0,.6A12,12,0,0,0,92,100h20a12,12,0,0,0,0-24h-8V52H204V152H180v-8a12,12,0,0,0-24,0v20a12,12,0,0,0,12,12h40a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Z"/></svg>`;
}
