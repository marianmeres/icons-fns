export const iconPhBoldHourglassHigh = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,20H72A20,20,0,0,0,52,40V76a20.1,20.1,0,0,0,8,16l48,36L60,164a20.1,20.1,0,0,0-8,16v36a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V180.36a20.13,20.13,0,0,0-7.94-16L147.9,128l48.16-36.4a20.13,20.13,0,0,0,7.94-16V40A20,20,0,0,0,184,20Zm-4,24V60H76V44Zm-52,69L89.33,84h77Zm52,99H76V182l52-39,52,39.33Z"/></svg>`;
}
