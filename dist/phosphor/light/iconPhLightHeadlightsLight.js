export const iconPhLightHeadlightsLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M162,80a6,6,0,0,1,6-6h72a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm78,90H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0-64H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm0,32H168a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12ZM142,64V192a14,14,0,0,1-14,14H88a78,78,0,0,1-78-78.59C10.32,84.73,45.71,50,88.9,50H128A14,14,0,0,1,142,64Zm-12,0a2,2,0,0,0-2-2H88.9C52.28,62,22.27,91.38,22,127.5A66,66,0,0,0,88,194h40a2,2,0,0,0,2-2Z"/></svg>`;
}
