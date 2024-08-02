export const iconPhBoldReceiptX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V208a12,12,0,0,0,17.37,10.73L64,205.42l26.63,13.31a12,12,0,0,0,10.74,0L128,205.42l26.63,13.31a12,12,0,0,0,10.74,0L192,205.42l26.63,13.31A12,12,0,0,0,236,208V56A20,20,0,0,0,216,36Zm-4,152.58-14.63-7.31a12,12,0,0,0-10.74,0L160,194.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,194.58,69.37,181.27a12,12,0,0,0-10.74,0L44,188.58V60H212ZM95.51,135.51,111,120,95.51,104.49a12,12,0,0,1,17-17L128,103l15.51-15.52a12,12,0,0,1,17,17L145,120l15.52,15.51a12,12,0,0,1-17,17L128,137l-15.51,15.52a12,12,0,0,1-17-17Z"/></svg>`;
}
