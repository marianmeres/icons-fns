export const iconPhLightBarricade = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,66H32A14,14,0,0,0,18,80v72a14,14,0,0,0,14,14H58v34a6,6,0,0,0,12,0V166H186v34a6,6,0,0,0,12,0V166h26a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66Zm2,14v53.52L170.48,78H224A2,2,0,0,1,226,80ZM32,78H81.52l76,76h-55L30,81.52V80A2,2,0,0,1,32,78Zm-2,74V98.48L85.52,154H32A2,2,0,0,1,30,152Zm194,2H174.48l-76-76h55L226,150.48V152A2,2,0,0,1,224,154Z"/></svg>`;
}
