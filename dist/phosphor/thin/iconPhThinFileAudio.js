export const iconPhThinFileAudio = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M97.53,132.3a4,4,0,0,0-4.36.87L70.34,156H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H70.34l22.83,22.83A4,4,0,0,0,100,224V136A4,4,0,0,0,97.53,132.3Zm-5.53,82L74.83,197.17A4,4,0,0,0,72,196H52V164H72a4,4,0,0,0,2.83-1.17L92,145.66ZM148,180a36.52,36.52,0,0,1-18,31.45,4,4,0,0,1-4-6.9,28.5,28.5,0,0,0,0-49.1,4,4,0,0,1,4-6.9A36.52,36.52,0,0,1,148,180Zm62.83-94.83-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v80a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4H168a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z"/></svg>`;
}
