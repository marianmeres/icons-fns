export const iconPhThinBugBeetle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,148h20a4,4,0,0,0,0-8H204V116h20a4,4,0,0,0,0-8H203.89a75.8,75.8,0,0,0-23.37-50.86l22.31-22.31a4,4,0,1,0-5.66-5.66L174.44,51.9a75.77,75.77,0,0,0-92.88,0L58.83,29.17a4,4,0,0,0-5.66,5.66L75.48,57.14A75.8,75.8,0,0,0,52.11,108H32a4,4,0,0,0,0,8H52v24H32a4,4,0,0,0,0,8H52v12a75.41,75.41,0,0,0,1,12H32a4,4,0,0,0,0,8H54.69a76,76,0,0,0,146.62,0H224a4,4,0,0,0,0-8H203a75.41,75.41,0,0,0,1-12ZM128,44a68.08,68.08,0,0,1,67.87,64H60.13A68.08,68.08,0,0,1,128,44Zm4,183.87V144a4,4,0,0,0-8,0v83.87A68.08,68.08,0,0,1,60,160V116H196v44A68.08,68.08,0,0,1,132,227.87Z"/></svg>`;
}
