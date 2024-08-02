export const iconPhBoldFileDashedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M84,224a12,12,0,0,1-12,12H56a20,20,0,0,1-20-20V184a12,12,0,0,1,24,0v28H72A12,12,0,0,1,84,224ZM220,88v48a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H120a12,12,0,0,1,0-24h32a12,12,0,0,1,8.49,3.51l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57ZM80,20H56A20,20,0,0,0,36,40V64a12,12,0,0,0,24,0V44H80a12,12,0,0,0,0-24ZM208,164a12,12,0,0,0-12,12v36h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20V176A12,12,0,0,0,208,164ZM48,156a12,12,0,0,0,12-12V104a12,12,0,0,0-24,0v40A12,12,0,0,0,48,156Zm104,56H112a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Z"/></svg>`;
}
