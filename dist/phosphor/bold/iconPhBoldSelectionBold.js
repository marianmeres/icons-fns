export const iconPhBoldSelectionBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,40a12,12,0,0,1-12,12H112a12,12,0,0,1,0-24h32A12,12,0,0,1,156,40ZM144,204H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM208,28H184a12,12,0,0,0,0,24h20V72a12,12,0,0,0,24,0V48A20,20,0,0,0,208,28Zm8,72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100Zm0,72a12,12,0,0,0-12,12v20H184a12,12,0,0,0,0,24h24a20,20,0,0,0,20-20V184A12,12,0,0,0,216,172ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM72,28H48A20,20,0,0,0,28,48V72a12,12,0,0,0,24,0V52H72a12,12,0,0,0,0-24Z"/></svg>`;
}
