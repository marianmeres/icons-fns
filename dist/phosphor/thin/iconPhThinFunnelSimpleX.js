export const iconPhThinFunnelSimpleX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,140H64a4,4,0,0,1,0-8H192a4,4,0,0,1,0,8Zm40-56H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM128,180H104a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm90.83-6.83a4,4,0,0,0-5.66,0L192,194.34l-21.17-21.17a4,4,0,0,0-5.66,5.66L186.34,200l-21.17,21.17a4,4,0,0,0,5.66,5.66L192,205.66l21.17,21.17a4,4,0,0,0,5.66-5.66L197.66,200l21.17-21.17A4,4,0,0,0,218.83,173.17Z"/></svg>`;
}
