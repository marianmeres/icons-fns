export const iconPhBoldFolders = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,56H160L133.33,36a20.12,20.12,0,0,0-12-4H76A20,20,0,0,0,56,52V72H36A20,20,0,0,0,16,92V204a20,20,0,0,0,20,20H188.89A19.13,19.13,0,0,0,208,204.89V184h20.89A19.13,19.13,0,0,0,248,164.89V76A20,20,0,0,0,228,56ZM184,200H40V96H80l28.8,21.6A12,12,0,0,0,116,120h68Zm40-40H208V116a20,20,0,0,0-20-20H120L93.33,76a20.12,20.12,0,0,0-12-4H80V56h40l28.8,21.6A12,12,0,0,0,156,80h68Z"/></svg>`;
}
