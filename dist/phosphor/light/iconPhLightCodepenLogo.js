export const iconPhLightCodepenLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M234.85,90.72h0l-104-56a6,6,0,0,0-5.68,0l-104,56h0A6,6,0,0,0,18,96v64a6,6,0,0,0,3.15,5.28h0l104,56a6,6,0,0,0,5.68,0l104-56h0A6,6,0,0,0,238,160V96A6,6,0,0,0,234.85,90.72ZM226,150,185.23,128l40.77-22Zm-53.43-28.77L134,100.42V50l85.34,46Zm-44.57,24L96.08,128,128,110.81,159.92,128ZM122,50v50.38L83.43,121.18,36.66,96Zm-92,56,40.77,22L30,150Zm53.43,28.76L122,155.58V206L36.66,160ZM134,206V155.58l38.57-20.77L219.34,160Z"/></svg>`;
}
