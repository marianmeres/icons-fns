export const iconPhBoldSelectionBackground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M156,80H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H156a20,20,0,0,0,20-20V100A20,20,0,0,0,156,80Zm-4,124H52V104H152ZM132,40a12,12,0,0,1,12-12h16a12,12,0,0,1,0,24H144A12,12,0,0,1,132,40Zm96,8v8a12,12,0,0,1-24,0V52h-4a12,12,0,0,1,0-24h8A20,20,0,0,1,228,48Zm0,48v16a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm0,56v8a20,20,0,0,1-20,20h-8a12,12,0,0,1,0-24h4v-4a12,12,0,0,1,24,0ZM76,56V48A20,20,0,0,1,96,28h8a12,12,0,0,1,0,24h-4v4a12,12,0,0,1-24,0Z"/></svg>`;
}
