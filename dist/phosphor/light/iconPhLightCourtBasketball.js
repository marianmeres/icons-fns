export const iconPhLightCourtBasketball = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,112H216a34,34,0,0,1,0-68h10ZM30,94H40a34,34,0,0,1,0,68H30Zm0,98V174H40a46,46,0,0,0,0-92H30V64a2,2,0,0,1,2-2h90V194H32A2,2,0,0,1,30,192Zm194,2H134V62h90a2,2,0,0,1,2,2V82H216a46,46,0,0,0,0,92h10v18A2,2,0,0,1,224,194Z"/></svg>`;
}
