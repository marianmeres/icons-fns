export const iconPhDuotoneArrowLineDownLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,208H72V112Z" opacity="0.2"/><path d="M232,48a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,48ZM189.66,90.34a8,8,0,0,1,0,11.32L131.31,160l42.35,42.34A8,8,0,0,1,168,216H72a8,8,0,0,1-8-8V112a8,8,0,0,1,13.66-5.66L120,148.69l58.34-58.35A8,8,0,0,1,189.66,90.34ZM148.69,200l-34.34-34.34h0L80,131.31V200Z"/></svg>`;
}
