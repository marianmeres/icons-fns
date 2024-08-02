export const iconPhBoldFolderDashedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M100,208a12,12,0,0,1-12,12H39.38A19.41,19.41,0,0,1,20,200.62V192a12,12,0,0,1,24,0v4H88A12,12,0,0,1,100,208Zm60-12H128a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm64-56a12,12,0,0,0-12,12v44H200a12,12,0,0,0,0,24h16.89A19.13,19.13,0,0,0,236,200.89V152A12,12,0,0,0,224,140Zm-8-72H168a12,12,0,0,0,0,24h44v20a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM32,164a12,12,0,0,0,12-12V120a12,12,0,0,0-24,0v32A12,12,0,0,0,32,164ZM20,80V52A20,20,0,0,1,40,32H92.41a20,20,0,0,1,14.94,6.71h0L137,72a12,12,0,0,1-9,20H32A12,12,0,0,1,20,80ZM44,68h57.28L90.61,56H44Z"/></svg>`;
}
