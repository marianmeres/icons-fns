export const iconPhBoldFileIniBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M48,152v56a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0Zm72-12a12,12,0,0,0-12,12v18.55L89.76,145A12,12,0,0,0,68,152v56a12,12,0,0,0,24,0V189.45L110.24,215a12,12,0,0,0,9.76,5,12.15,12.15,0,0,0,3.66-.57A12,12,0,0,0,132,208V152A12,12,0,0,0,120,140Zm44,0a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0V152A12,12,0,0,0,164,140Zm56-52V224a12,12,0,0,1-24,0V104H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88Zm-60-8h23L160,57Z"/></svg>`;
}
