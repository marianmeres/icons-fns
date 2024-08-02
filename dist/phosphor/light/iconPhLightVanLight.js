export const iconPhLightVanLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252.55,108.09,207,55a14,14,0,0,0-10.74-5H32A14,14,0,0,0,18,64V176a14,14,0,0,0,14,14H50.6a30,30,0,0,0,58.8,0h53.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V112A6,6,0,0,0,252.55,108.09Zm-54.7-45.32L234.94,106H174V62h22.26A2,2,0,0,1,197.85,62.77ZM102,106V62h60v44ZM32,62H90v44H30V64A2,2,0,0,1,32,62ZM80,202a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm112,0a18,18,0,1,1,18-18A18,18,0,0,1,192,202Zm48-24H221.4a30,30,0,0,0-58.8,0H109.4a30,30,0,0,0-58.8,0H32a2,2,0,0,1-2-2V118H242v58A2,2,0,0,1,240,178Z"/></svg>`;
}
