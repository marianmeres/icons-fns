export const iconPhFillFactory = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,208h-8V136c0-.05,0-.09,0-.14s0-.29,0-.43,0-.28,0-.41a.76.76,0,0,0,0-.15l-15-105.13A16.08,16.08,0,0,0,193.06,16H174.94A16.08,16.08,0,0,0,159.1,29.74l-11.56,80.91L108.8,81.6A8,8,0,0,0,96,88v32L44.8,81.6A8,8,0,0,0,32,88V208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM108,184H80a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm68,0H148a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-5.33-56-8.53-6.4L174.94,32h18.12l13.72,96Z"/></svg>`;
}
