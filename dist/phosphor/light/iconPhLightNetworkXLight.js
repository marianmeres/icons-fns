export const iconPhLightNetworkXLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,114H134V86h10a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40V72a14,14,0,0,0,14,14h10v28H24a6,6,0,0,0,0,12H58v36H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H70V126H186v18a6,6,0,0,0,12,0V126h34a6,6,0,0,0,0-12ZM110,72V40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a2,2,0,0,1-2,2H112A2,2,0,0,1,110,72ZM82,176v32a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80A2,2,0,0,1,82,176Zm138.24-3.76L200.48,192l19.76,19.76a6,6,0,1,1-8.48,8.48L192,200.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L183.52,192l-19.76-19.76a6,6,0,0,1,8.48-8.48L192,183.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z"/></svg>`;
}
