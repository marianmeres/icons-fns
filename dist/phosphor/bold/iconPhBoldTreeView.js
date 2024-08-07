export const iconPhBoldTreeView = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,156h32a20,20,0,0,0,20-20V104a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H92V84h4a20,20,0,0,0,20-20V32A20,20,0,0,0,96,12H64A20,20,0,0,0,44,32V64A20,20,0,0,0,64,84h4V192a28,28,0,0,0,28,28h60v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V192a20,20,0,0,0-20-20H176a20,20,0,0,0-20,20v4H96a4,4,0,0,1-4-4V132h64v4A20,20,0,0,0,176,156ZM68,36H92V60H68ZM180,196h24v24H180Zm0-88h24v24H180Z"/></svg>`;
}
