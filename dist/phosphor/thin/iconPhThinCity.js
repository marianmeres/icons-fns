export const iconPhThinCity = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,212H228V88a4,4,0,0,0-4-4H160a4,4,0,0,0-4,4v44H100V40a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V212H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM164,92h56V212H164Zm-8,48v72H100V140ZM36,44H92V212H36ZM68,72V88a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm0,48v16a4,4,0,0,1-8,0V168a4,4,0,0,1,8,0Zm56,16V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm64,0V168a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Zm0-48V120a4,4,0,0,1,8,0v16a4,4,0,0,1-8,0Z"/></svg>`;
}
