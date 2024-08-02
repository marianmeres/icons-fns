export const iconPhThinTornado = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,40a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H224A4,4,0,0,1,228,40ZM180,72a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H176A4,4,0,0,0,180,72Zm-16,32a4,4,0,0,0-4-4H56a4,4,0,0,0,0,8H160A4,4,0,0,0,164,104Zm16,32a4,4,0,0,0-4-4H88a4,4,0,0,0,0,8h88A4,4,0,0,0,180,136Zm4,28H120a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm-24,32H128a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-32,32H112a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8Z"/></svg>`;
}
