export const iconPhLightSelectionForeground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M62,216a6,6,0,0,1-6,6H48a14,14,0,0,1-14-14v-8a6,6,0,0,1,12,0v8a2,2,0,0,0,2,2h8A6,6,0,0,1,62,216Zm50-6H96a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12ZM40,166a6,6,0,0,0,6-6V144a6,6,0,0,0-12,0v16A6,6,0,0,0,40,166Zm128,28a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Zm0-84a6,6,0,0,0,6-6V96a14,14,0,0,0-14-14h-8a6,6,0,0,0,0,12h8a2,2,0,0,1,2,2v8A6,6,0,0,0,168,110ZM56,82H48A14,14,0,0,0,34,96v8a6,6,0,0,0,12,0V96a2,2,0,0,1,2-2h8a6,6,0,0,0,0-12ZM208,34H96A14,14,0,0,0,82,48V88h0a6,6,0,0,0,6,6h24a6,6,0,0,0,0-12H94V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V160a2,2,0,0,1-2,2H174V144a6,6,0,0,0-12,0v24a6,6,0,0,0,6,6h40a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z"/></svg>`;
}
