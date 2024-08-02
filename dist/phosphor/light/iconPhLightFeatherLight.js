export const iconPhLightFeatherLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M238,80A62,62,0,0,0,132.18,36.14L62.1,105.41a13.94,13.94,0,0,0-4.1,9.9v74.21L27.76,219.76a6,6,0,1,0,8.48,8.48L66.48,198h74.21a13.94,13.94,0,0,0,9.9-4.1l0,0,68.83-69.63h0l.39-.4A61.6,61.6,0,0,0,238,80ZM140.64,44.64a50,50,0,0,1,72,69.36H150.48l37.76-37.76a6,6,0,0,0-8.48-8.48l-48,48h0L118,129.52V67ZM70,115.31a2,2,0,0,1,.56-1.39l35.44-35v62.63l-36,36Zm72.09,70.11a2,2,0,0,1-1.4.58H78.48l37.76-37.75h0L138.48,126h62.35Z"/></svg>`;
}
