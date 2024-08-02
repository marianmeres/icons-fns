export const iconPhThinWarehouse = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,188H228V54.66l12.84-2.75a4,4,0,1,0-1.68-7.82l-224,48A4,4,0,0,0,16,100a4.07,4.07,0,0,0,.84-.09L28,97.52V188H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,95.81,220,56.38V188H188V128a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v60H36ZM180,156H76V132H180ZM76,164H180v24H76Z"/></svg>`;
}
