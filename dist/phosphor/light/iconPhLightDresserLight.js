export const iconPhLightDresserLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M142,192a6,6,0,0,1-6,6H120a6,6,0,0,1,0-12h16A6,6,0,0,1,142,192ZM120,70h16a6,6,0,0,0,0-12H120a6,6,0,0,0,0,12Zm16,52H120a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Zm78-82V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V40A14,14,0,0,1,56,26H200A14,14,0,0,1,214,40ZM54,154H202V102H54ZM54,40V90H202V40a2,2,0,0,0-2-2H56A2,2,0,0,0,54,40ZM202,216V166H54v50a2,2,0,0,0,2,2H200A2,2,0,0,0,202,216Z"/></svg>`;
}
