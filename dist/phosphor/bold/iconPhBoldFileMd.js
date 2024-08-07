export const iconPhBoldFileMd = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,152v56a12,12,0,0,1-24,0V190.07l-6.17,8.81a12,12,0,0,1-19.66,0L44,190.07V208a12,12,0,0,1-24,0V152a12,12,0,0,1,21.83-6.88L60,171.07l18.17-25.95A12,12,0,0,1,100,152Zm84,28a40,40,0,0,1-40,40H128a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h16A40,40,0,0,1,184,180Zm-24,0a16,16,0,0,0-16-16h-4v32h4A16,16,0,0,0,160,180Zm60-92V224a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57Z"/></svg>`;
}
