export const iconPhBoldCourtBasketballBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,112h-4a28,28,0,0,1,0-56h4ZM36,100h4a28,28,0,0,1,0,56H36Zm0,80h4A52,52,0,0,0,40,76H36V68h80V188H36Zm104,8V68h80v8h-4a52,52,0,0,0,0,104h4v8Z"/></svg>`;
}
