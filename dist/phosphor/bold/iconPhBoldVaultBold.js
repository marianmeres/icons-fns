export const iconPhBoldVaultBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V192a20,20,0,0,0,20,20H52v12a12,12,0,0,0,24,0V212H180v12a12,12,0,0,0,24,0V212h12a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,188V60H212v52H190.32a44,44,0,1,0,0,24H212v52Zm124-64a20,20,0,1,1-20-20A20,20,0,0,1,168,124Z"/></svg>`;
}
