export const iconPhBoldSubway = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,96V208a12,12,0,0,1-24,0V96a52.06,52.06,0,0,0-52-52H104A52.06,52.06,0,0,0,52,96V208a12,12,0,0,1-24,0V96a76.08,76.08,0,0,1,76-76h48A76.08,76.08,0,0,1,228,96Zm-40,0v72a28,28,0,0,1-18.89,26.47l2,5.07a12,12,0,0,1-6.68,15.6A11.86,11.86,0,0,1,160,216a12,12,0,0,1-11.14-7.54l-5-12.46H112.12l-5,12.46A12,12,0,0,1,96,216a11.86,11.86,0,0,1-4.46-.86,12,12,0,0,1-6.68-15.6l2-5.07A28,28,0,0,1,68,168V96A28,28,0,0,1,96,68h64A28,28,0,0,1,188,96ZM92,96v36h72V96a4,4,0,0,0-4-4H96A4,4,0,0,0,92,96Zm72,72V156H140v16h20A4,4,0,0,0,164,168Zm-48,4V156H92v12a4,4,0,0,0,4,4Z"/></svg>`;
}
