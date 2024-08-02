export const iconPhRegularVan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M254.07,106.79,208.53,53.73A16,16,0,0,0,196.26,48H32A16,16,0,0,0,16,64V176a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V112A8,8,0,0,0,254.07,106.79ZM230.59,104H176V64h20.26ZM104,104V64h56v40ZM88,64v40H32V64ZM80,200a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,200Zm31-24a32,32,0,0,0-62,0H111a32,32,0,0,0-62,0H32V120H240v56Z"/></svg>`;
}
