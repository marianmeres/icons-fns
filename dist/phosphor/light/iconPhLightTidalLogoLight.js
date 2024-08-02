export const iconPhLightTidalLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252.24,91.76l-40-40a6,6,0,0,0-8.48,0L168,87.52,132.24,51.76a6,6,0,0,0-8.48,0L88,87.52,52.24,51.76a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0L88,104.48,119.52,136,83.76,171.76a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48L136.48,136,168,104.48l35.76,35.76a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,252.24,91.76ZM48,127.51,16.49,96,48,64.49,79.51,96Zm80,80L96.49,176,128,144.49,159.51,176Zm0-80L96.49,96,128,64.49,159.51,96Zm80,0L176.49,96,208,64.49,239.51,96Z"/></svg>`;
}
