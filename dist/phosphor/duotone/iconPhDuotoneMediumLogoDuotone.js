export const iconPhDuotoneMediumLogoDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,128A56,56,0,1,1,72,72,56,56,0,0,1,128,128Zm56-56c-13.25,0-24,25.07-24,56s10.75,56,24,56,24-25.07,24-56S197.25,72,184,72Z" opacity="0.2"/><path d="M72,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,72,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,72,176ZM184,64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm0,112c-5.64,0-16-18.22-16-48s10.36-48,16-48,16,18.22,16,48S189.64,176,184,176ZM248,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/></svg>`;
}
