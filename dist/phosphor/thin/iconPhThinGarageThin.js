export const iconPhThinGarageThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,196H228V98.67a12,12,0,0,0-5.34-10L134.66,30a12,12,0,0,0-13.32,0l-88,58.67a12,12,0,0,0-5.34,10V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,98.67a4,4,0,0,1,1.78-3.33l88-58.66a4,4,0,0,1,4.44,0l88,58.66A4,4,0,0,1,220,98.67V196H188V136a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v60H36ZM180,140v24H132V140Zm-56,24H76V140h48Zm-48,8h48v24H76Zm56,0h48v24H132Z"/></svg>`;
}
