export const iconPhThinEnvelopeOpen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM103.63,152,36,199.76v-96Zm8.19,4h32.36l68,48H43.86Zm40.55-4L220,103.76v96ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11Z"/></svg>`;
}
