export const iconPhBoldEjectBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,152H48a20,20,0,0,0-20,20v20a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V172A20,20,0,0,0,208,152Zm-4,36H52V176H204ZM48.27,136H207.73a20.27,20.27,0,0,0,14.61-34.3L148.58,24.78a28.51,28.51,0,0,0-41.16,0L33.66,101.7A20.27,20.27,0,0,0,48.27,136Zm76.48-94.61a4.49,4.49,0,0,1,6.5,0L199,112H57Z"/></svg>`;
}
