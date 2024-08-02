export const iconPhBoldFolderSimpleDashedBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M20,80V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L135.2,70.4a12,12,0,1,1-14.4,19.2L92,68H44V80a12,12,0,0,1-24,0ZM88,196H44v-4a12,12,0,0,0-24,0v8.62A19.41,19.41,0,0,0,39.38,220H88a12,12,0,0,0,0-24Zm72,0H128a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm64-56a12,12,0,0,0-12,12v44H200a12,12,0,0,0,0,24h16.89A19.13,19.13,0,0,0,236,200.89V152A12,12,0,0,0,224,140Zm-8-72H168a12,12,0,0,0,0,24h44v20a12,12,0,0,0,24,0V88A20,20,0,0,0,216,68ZM32,164a12,12,0,0,0,12-12V120a12,12,0,0,0-24,0v32A12,12,0,0,0,32,164Z"/></svg>`;
}
