export const iconPhBoldAmazonLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M252,168v32a12,12,0,0,1-24,0v-3.09C215.56,208.41,180.25,236,128,236c-64.6,0-103.3-42.18-104.92-44A12,12,0,1,1,40.92,176c.3.33,33.48,36,87.08,36,42.65,0,72.34-22.58,82.87-32H208a12,12,0,0,1,0-24h32A12,12,0,0,1,252,168ZM156,86.08V84A32,32,0,0,0,97.17,66.55a12,12,0,0,1-20.11-13.1A56,56,0,0,1,180,84v92a12,12,0,0,1-23.85,1.81A56,56,0,1,1,156,86.08ZM156,132a32,32,0,1,0-32,32A32,32,0,0,0,156,132Z"/></svg>`;
}
