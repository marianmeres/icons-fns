export const iconPhLightGif = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M142,72V184a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm90-6H176a6,6,0,0,0-6,6V184a6,6,0,0,0,12,0V134h42a6,6,0,0,0,0-12H182V78h50a6,6,0,0,0,0-12ZM96,122H72a6,6,0,0,0,0,12H90v18a26,26,0,0,1-52,0V104A26,26,0,0,1,64,78c12.07,0,23.33,8.38,26.19,19.5a6,6,0,1,0,11.62-3C97.56,78,81.66,66,64,66a38,38,0,0,0-38,38v48a38,38,0,0,0,76,0V128A6,6,0,0,0,96,122Z"/></svg>`;
}
