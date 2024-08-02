export const iconPhLightBarbell = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,122H238V88a14,14,0,0,0-14-14H206V64a14,14,0,0,0-14-14H168a14,14,0,0,0-14,14v58H102V64A14,14,0,0,0,88,50H64A14,14,0,0,0,50,64V74H32A14,14,0,0,0,18,88v34H8a6,6,0,0,0,0,12H18v34a14,14,0,0,0,14,14H50v10a14,14,0,0,0,14,14H88a14,14,0,0,0,14-14V134h52v58a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V134h10a6,6,0,0,0,0-12ZM32,170a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H50v84Zm58,22a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H88a2,2,0,0,1,2,2Zm104,0a2,2,0,0,1-2,2H168a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2Zm32-24a2,2,0,0,1-2,2H206V86h18a2,2,0,0,1,2,2Z"/></svg>`;
}
