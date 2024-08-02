export const iconPhLightCarBattery = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M190,136a6,6,0,0,1-6,6H174v10a6,6,0,0,1-12,0V142H152a6,6,0,0,1,0-12h10V120a6,6,0,0,1,12,0v10h10A6,6,0,0,1,190,136Zm-86-6H72a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM238,88v96a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V88A14,14,0,0,1,32,74H50V56A14,14,0,0,1,64,42H96a14,14,0,0,1,14,14V74h36V56a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V74h18A14,14,0,0,1,238,88ZM158,74h36V56a2,2,0,0,0-2-2H160a2,2,0,0,0-2,2ZM62,74H98V56a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2ZM226,88a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z"/></svg>`;
}
