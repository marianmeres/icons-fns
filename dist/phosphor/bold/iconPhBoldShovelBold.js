export const iconPhBoldShovelBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.49,55.51l-48-48a12,12,0,0,0-17,17L199,40l-65.37,65.37L102.14,73.86a20,20,0,0,0-28.28,0l-56,56A19.9,19.9,0,0,0,12,144v80a20,20,0,0,0,20,20h80a19.86,19.86,0,0,0,14.14-5.86l56-56a20,20,0,0,0,0-28.28l-31.51-31.52L216,57l15.51,15.52a12,12,0,1,0,17-17ZM162.34,168l-52,52H36V145.66l52-52,28.69,28.68L79.51,159.51a12,12,0,0,0,17,17l37.17-37.18Z"/></svg>`;
}
