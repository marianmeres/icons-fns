export const iconPhLightSketchLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244.52,100.05l-56-64A6,6,0,0,0,184,34H72a6,6,0,0,0-4.52,2l-56,64a6,6,0,0,0,.13,8l112,120a6,6,0,0,0,8.78,0l112-120A6,6,0,0,0,244.52,100.05ZM75.94,110l34.6,86.49L29.81,110Zm91.2,0L128,207.84,88.86,110ZM92,98l36-48,36,48Zm88.06,12h46.13l-80.73,86.49Zm46.72-12H179L140,46h41.28ZM74.72,46H116L77,98H29.22Z"/></svg>`;
}
