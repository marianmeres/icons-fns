export const iconPhBoldBoat = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222.33,106.79,212,103.35V56a20,20,0,0,0-20-20H140V24a12,12,0,0,0-24,0V36H64A20,20,0,0,0,44,56v47.35l-10.33,3.44a20,20,0,0,0-13.67,19V152c0,64.63,100.8,90.57,105.09,91.64a11.94,11.94,0,0,0,5.82,0C135.2,242.57,236,216.63,236,152V125.77A20,20,0,0,0,222.33,106.79ZM68,60H188V95.35L131.79,76.62a11.85,11.85,0,0,0-7.58,0L68,95.35Zm144,92c0,36.69-58.08,60.43-84,67.59-25.94-7.17-84-30.9-84-67.59V128.65l72-24V168a12,12,0,0,0,24,0V104.65l72,24Z"/></svg>`;
}
