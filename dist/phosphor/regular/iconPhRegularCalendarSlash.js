export const iconPhRegularCalendarSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.92,34.62A8,8,0,0,0,48,32,16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a8,8,0,0,0,5.92-13.38ZM73.55,80H48V51.88ZM48,208V96H88.1L189.92,208ZM224,48V177.23a8,8,0,1,1-16,0V96H134.88a8,8,0,0,1,0-16H208V48H184v8a8,8,0,0,1-16,0V48H91.25a8,8,0,0,1,0-16H168V24a8,8,0,0,1,16,0v8h24A16,16,0,0,1,224,48Z"/></svg>`;
}
