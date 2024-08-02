export const iconPhLightCarProfileLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,114H210.49l-43.9-43.9a13.94,13.94,0,0,0-9.9-4.1H44.28a14,14,0,0,0-11.65,6.23L3,116.67A6,6,0,0,0,2,120v48a14,14,0,0,0,14,14H34.6a30,30,0,0,0,58.8,0h69.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V128A14,14,0,0,0,240,114ZM42.62,78.89A2,2,0,0,1,44.28,78H156.69a2,2,0,0,1,1.41.59L193.52,114H19.21ZM64,194a18,18,0,1,1,18-18A18,18,0,0,1,64,194Zm128,0a18,18,0,1,1,18-18A18,18,0,0,1,192,194Zm50-26a2,2,0,0,1-2,2H221.4a30,30,0,0,0-58.8,0H93.4a30,30,0,0,0-58.8,0H16a2,2,0,0,1-2-2V126H240a2,2,0,0,1,2,2Z"/></svg>`;
}
