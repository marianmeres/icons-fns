export const iconPhLightTornadoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,40a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H224A6,6,0,0,1,230,40ZM182,72a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H176A6,6,0,0,0,182,72Zm-16,32a6,6,0,0,0-6-6H56a6,6,0,0,0,0,12H160A6,6,0,0,0,166,104Zm16,32a6,6,0,0,0-6-6H88a6,6,0,0,0,0,12h88A6,6,0,0,0,182,136Zm2,26H120a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-24,32H128a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-32,32H112a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12Z"/></svg>`;
}
