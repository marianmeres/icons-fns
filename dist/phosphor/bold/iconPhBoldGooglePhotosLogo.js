export const iconPhBoldGooglePhotosLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,116H198.64A76,76,0,0,0,128,12a12,12,0,0,0-12,12V57.36A76,76,0,0,0,12,128a12,12,0,0,0,12,12H57.36A76,76,0,0,0,128,244a12,12,0,0,0,12-12V198.64A76,76,0,0,0,244,128,12,12,0,0,0,232,116ZM180,88a51.38,51.38,0,0,1-8.18,28H140V37.4A52.09,52.09,0,0,1,180,88ZM88,76a51.38,51.38,0,0,1,28,8.18V116H37.4A52.09,52.09,0,0,1,88,76ZM76,168a51.38,51.38,0,0,1,8.18-28H116v78.6A52.09,52.09,0,0,1,76,168Zm92,12a51.38,51.38,0,0,1-28-8.18V140h78.6A52.09,52.09,0,0,1,168,180Z"/></svg>`;
}
