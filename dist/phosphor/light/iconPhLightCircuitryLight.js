export const iconPhLightCircuitryLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM88,158a10,10,0,1,1-10,10A10,10,0,0,1,88,158ZM46,208V48a2,2,0,0,1,2-2H82V146.84a22,22,0,1,0,12,0V110.49l52,52V210H48A2,2,0,0,1,46,208Zm164,0a2,2,0,0,1-2,2H158V160a6,6,0,0,0-1.76-4.24L94,93.51V46h36V72a6,6,0,0,0,1.76,4.24l17,17a22,22,0,1,0,8.48-8.48L142,69.51V46h66a2,2,0,0,1,2,2ZM168,94a10,10,0,1,1-10,10A10,10,0,0,1,168,94Z"/></svg>`;
}
