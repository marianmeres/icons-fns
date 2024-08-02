export const iconPhBoldStickerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,28H88A60.07,60.07,0,0,0,28,88v80a60.07,60.07,0,0,0,60,60h48a11.9,11.9,0,0,0,3.79-.62c27.63-9.21,78.38-60,87.59-87.59A11.9,11.9,0,0,0,228,136V88A60.07,60.07,0,0,0,168,28ZM52,168V88A36,36,0,0,1,88,52h80a36,36,0,0,1,36,36v36H184a60.07,60.07,0,0,0-60,60v20H88A36,36,0,0,1,52,168Zm96,27.63V184a36,36,0,0,1,36-36h11.63C184,164.11,164.11,184,148,195.63Z"/></svg>`;
}
