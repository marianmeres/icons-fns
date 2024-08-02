export const iconPhLightChatsTeardropLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168.16,74.42A78,78,0,0,0,18,104v64a14,14,0,0,0,14,14H88a78.15,78.15,0,0,0,72,48h64a14,14,0,0,0,14-14V152A78,78,0,0,0,168.16,74.42ZM30,168V104a66,66,0,1,1,66,66H32A2,2,0,0,1,30,168Zm196,48a2,2,0,0,1-2,2H160a66.13,66.13,0,0,1-58.89-36.19,77.92,77.92,0,0,0,71-94.68A66,66,0,0,1,226,152Z"/></svg>`;
}
