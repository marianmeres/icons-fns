export const iconPhLightFolderSimpleDashedLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124.4,84.8,94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V80a6,6,0,0,1-12,0V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8L131.6,75.2a6,6,0,0,1-7.2,9.6ZM88,202H39.38A1.4,1.4,0,0,1,38,200.62V192a6,6,0,0,0-12,0v8.62A13.39,13.39,0,0,0,39.38,214H88a6,6,0,0,0,0-12Zm72,0H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm64-56a6,6,0,0,0-6,6v48.89a1.11,1.11,0,0,1-1.11,1.11H200a6,6,0,0,0,0,12h16.89A13.12,13.12,0,0,0,230,200.89V152A6,6,0,0,0,224,146Zm-8-72H168a6,6,0,0,0,0,12h48a2,2,0,0,1,2,2v24a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM32,158a6,6,0,0,0,6-6V120a6,6,0,0,0-12,0v32A6,6,0,0,0,32,158Z"/></svg>`;
}
