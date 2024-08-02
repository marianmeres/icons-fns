export const iconPhThinFireExtinguisherThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M217.15,52.17l-70.34-21.1,39-19.49a4,4,0,1,0-3.58-7.16L135,28a76.07,76.07,0,0,0-75,76V208a4,4,0,0,0,8,0V172H92v60a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V104a44.06,44.06,0,0,0-40-43.81V37.38l74.85,22.45A3.82,3.82,0,0,0,216,60a4,4,0,0,0,1.15-7.83ZM68,164V104a68.08,68.08,0,0,1,64-67.87V60.19A44.06,44.06,0,0,0,92,104v60Zm100,72H104a4,4,0,0,1-4-4V172h72v60A4,4,0,0,1,168,236Zm4-132v60H100V104a36,36,0,0,1,72,0Z"/></svg>`;
}
