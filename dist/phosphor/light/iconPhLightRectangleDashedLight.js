export const iconPhLightRectangleDashedLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M78,48a6,6,0,0,1-6,6H40a2,2,0,0,0-2,2V72a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H72A6,6,0,0,1,78,48ZM32,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,32,150Zm40,52H40a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v16a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12Zm72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm80-24a6,6,0,0,0-6,6v16a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V184A6,6,0,0,0,224,178Zm0-72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Zm-8-64H184a6,6,0,0,0,0,12h32a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V56A14,14,0,0,0,216,42Zm-72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Z"/></svg>`;
}
