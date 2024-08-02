export const iconPhThinPianoKeysThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM76,44h32v96H76Zm36,104a4,4,0,0,0,4-4V44h24V144a4,4,0,0,0,4,4h12v64H100V148Zm36-8V44h32v96ZM44,208V48a4,4,0,0,1,4-4H68V144a4,4,0,0,0,4,4H92v64H48A4,4,0,0,1,44,208Zm168,0a4,4,0,0,1-4,4H164V148h20a4,4,0,0,0,4-4V44h20a4,4,0,0,1,4,4Z"/></svg>`;
}
