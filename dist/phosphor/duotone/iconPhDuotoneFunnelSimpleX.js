export const iconPhDuotoneFunnelSimpleX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,56V200a16,16,0,0,1-16,16h-8l-16-16-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" opacity="0.2"/><path d="M192,144H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm40-64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,176H104a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm93.66-5.66a8,8,0,0,0-11.32,0L192,188.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,200l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,211.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,200l18.35-18.34A8,8,0,0,0,221.66,170.34Z"/></svg>`;
}
