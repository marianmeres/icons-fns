export const iconPhLightCloudX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M160,42A86.11,86.11,0,0,0,82.43,90.88,62,62,0,1,0,72,214h88a86,86,0,0,0,0-172Zm0,160H72a50,50,0,0,1,0-100,50.67,50.67,0,0,1,5.91.35A85.61,85.61,0,0,0,74,128a6,6,0,0,0,12,0,74,74,0,1,1,74,74Zm28.24-85.76L168.48,136l19.76,19.76a6,6,0,1,1-8.48,8.48L160,144.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L151.52,136l-19.76-19.76a6,6,0,0,1,8.48-8.48L160,127.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
