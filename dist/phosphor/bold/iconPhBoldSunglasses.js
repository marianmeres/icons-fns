export const iconPhBoldSunglasses = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,36a12,12,0,0,0,0,24,12,12,0,0,1,12,12v52H44V72A12,12,0,0,1,56,60a12,12,0,0,0,0-24A36,36,0,0,0,20,72v92a48,48,0,0,0,96,0V148h24v16a48,48,0,0,0,96,0V72A36,36,0,0,0,200,36ZM68,188a24,24,0,0,1-24-24v-9l31.74,31.74A23.89,23.89,0,0,1,68,188Zm24-24a24.8,24.8,0,0,1-.44,4.59L71,148H92Zm96,24a24,24,0,0,1-24-24v-9l31.74,31.74A23.89,23.89,0,0,1,188,188Zm24-24a24.8,24.8,0,0,1-.44,4.59L191,148h21Z"/></svg>`;
}
