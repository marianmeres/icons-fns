export const iconPhBoldFireExtinguisherBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.45,44.51,170.07,29.7,185,22.93A12,12,0,1,0,175,1.08l-41.78,19A84.09,84.09,0,0,0,52,104V208a12,12,0,0,0,24,0V180H92v52a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V104a44.08,44.08,0,0,0-32-42.32V48.13L212.55,67.5A11.81,11.81,0,0,0,216,68a12,12,0,0,0,3.45-23.49ZM76,156V104a60.1,60.1,0,0,1,48-58.79V61.68A44.06,44.06,0,0,0,92,104v52Zm40,72V180h40v48Zm40-124v52H116V104a20,20,0,0,1,40,0Z"/></svg>`;
}
