export const iconPhLightLampPendant = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,76.05V72a14,14,0,0,0-14-14H134V16a6,6,0,0,0-12,0V58H96A14,14,0,0,0,82,72v4A109.76,109.76,0,0,0,18,176a6,6,0,0,0,6,6H90v2a38,38,0,0,0,76,0v-2h66a6,6,0,0,0,6-6A109.76,109.76,0,0,0,174,76.05ZM154,184a26,26,0,0,1-52,0v-2h52ZM30.18,170A97.76,97.76,0,0,1,90.31,85.51,6,6,0,0,0,94,80V72a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v8a6,6,0,0,0,3.69,5.54A97.76,97.76,0,0,1,225.82,170Z"/></svg>`;
}
