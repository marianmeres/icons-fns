export const iconPhThinMediumLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,68a60,60,0,1,0,60,60A60.07,60.07,0,0,0,72,68Zm0,112a52,52,0,1,1,52-52A52.06,52.06,0,0,1,72,180ZM184,68c-16,0-28,25.79-28,60s12,60,28,60,28-25.79,28-60S200,68,184,68Zm0,112c-9.46,0-20-21.36-20-52s10.54-52,20-52,20,21.36,20,52S193.46,180,184,180ZM244,72V184a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Z"/></svg>`;
}
