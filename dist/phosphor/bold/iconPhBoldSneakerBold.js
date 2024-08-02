export const iconPhBoldSneakerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M255.8,162.93l0-.31A43.94,43.94,0,0,0,226,125.36l-56.62-20.2-.24-.09a20,20,0,0,1-11.92-10.78L134.06,40l-.06-.16A20.06,20.06,0,0,0,108.89,29.2L33.17,56.73A20.07,20.07,0,0,0,20,75.53V192a20,20,0,0,0,20,20H236a20,20,0,0,0,20-20V167.06C256,165.67,255.93,164.3,255.8,162.93ZM113.53,53.05l6,14L103.9,72.72a12,12,0,1,0,8.2,22.55L129,89.14l4.54,10.63-13.6,5A12,12,0,0,0,124,128a11.79,11.79,0,0,0,4.1-.73l19.57-7.11a43.86,43.86,0,0,0,13.8,7.64L218.09,148l.23.08a19.89,19.89,0,0,1,6.84,3.91H44V78.33ZM44,188V176H232v12Z"/></svg>`;
}
