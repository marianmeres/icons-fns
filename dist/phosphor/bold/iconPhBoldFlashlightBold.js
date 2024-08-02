export const iconPhBoldFlashlightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,12H72A20,20,0,0,0,52,32V77.33a20.12,20.12,0,0,0,4,12L76,116V224a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V116l20-26.67a20.12,20.12,0,0,0,4-12V32A20,20,0,0,0,184,12Zm-4,24V52H76V36Zm-20,66.67a20.12,20.12,0,0,0-4,12V220H100V114.67a20.12,20.12,0,0,0-4-12L76,76H180ZM140,120v32a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Z"/></svg>`;
}
