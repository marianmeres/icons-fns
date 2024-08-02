export const iconPhDuotoneSubtitlesSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" opacity="0.2"/><path d="M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z"/></svg>`;
}