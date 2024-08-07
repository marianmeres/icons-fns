export const iconPhLightFolderDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M94,208a6,6,0,0,1-6,6H39.38A13.39,13.39,0,0,1,26,200.62V192a6,6,0,0,1,12,0v8.62A1.4,1.4,0,0,0,39.38,202H88A6,6,0,0,1,94,208Zm66-6H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm64-56a6,6,0,0,0-6,6v48.89a1.11,1.11,0,0,1-1.11,1.11H200a6,6,0,0,0,0,12h16.89A13.12,13.12,0,0,0,230,200.89V152A6,6,0,0,0,224,146Zm-8-72H168a6,6,0,0,0,0,12h48a2,2,0,0,1,2,2v24a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM26,80V56A14,14,0,0,1,40,42H92.69a13.94,13.94,0,0,1,9.9,4.1l29.65,29.66A6,6,0,0,1,128,86H32A6,6,0,0,1,26,80Zm12-6h75.51L94.1,54.59A2,2,0,0,0,92.69,54H40a2,2,0,0,0-2,2Zm-6,84a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v32A6,6,0,0,0,32,158Z"/></svg>`;
}
