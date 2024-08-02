export const iconPhLightFireExtinguisher = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M217.72,50.25,152.21,30.6l34.47-17.23a6,6,0,1,0-5.36-10.74L134.51,26A78.07,78.07,0,0,0,58,104V208a6,6,0,0,0,12,0V174H90v58a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V104a46.07,46.07,0,0,0-40-45.6V40.07l72.27,21.68A6.14,6.14,0,0,0,216,62a6,6,0,0,0,1.72-11.75ZM70,162V104a66.07,66.07,0,0,1,60-65.71V58.4A46.07,46.07,0,0,0,90,104v58Zm98,72H104a2,2,0,0,1-2-2V174h68v58A2,2,0,0,1,168,234Zm2-130v58H102V104a34,34,0,0,1,68,0Z"/></svg>`;
}
