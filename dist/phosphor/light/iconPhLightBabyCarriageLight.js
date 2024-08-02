export const iconPhLightBabyCarriageLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,34h-8a14,14,0,0,0-14,14v58H53.52A38.05,38.05,0,0,0,16,74a6,6,0,0,0,0,12,26,26,0,0,1,26,26,78.09,78.09,0,0,0,78,78h40a78,78,0,0,0,0-156Zm65.71,72H161.1l47.82-38.25A65.66,65.66,0,0,1,225.71,106ZM152,46h8a65.67,65.67,0,0,1,40,13.53l-50,40V48A2,2,0,0,1,152,46Zm8,132H120a66.09,66.09,0,0,1-65.73-60H225.73A66.09,66.09,0,0,1,160,178Zm-58,46a14,14,0,1,1-14-14A14,14,0,0,1,102,224Zm104,0a14,14,0,1,1-14-14A14,14,0,0,1,206,224Z"/></svg>`;
}
