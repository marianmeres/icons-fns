export const iconPhThinHairDryer = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M196,88a28,28,0,1,0-28,28A28,28,0,0,0,196,88Zm-28,20a20,20,0,1,1,20-20A20,20,0,0,1,168,108Zm-5.15,104a12,12,0,0,0,10.92-7l32-70.39A60,60,0,0,0,168,28a4.89,4.89,0,0,0-.66.05L30,50.94A12,12,0,0,0,20,62.78v50.44a12,12,0,0,0,10,11.84l102,17V200a12,12,0,0,0,12,12h4v4a36,36,0,0,0,36,36h16a4,4,0,0,0,0-8H184a28,28,0,0,1-28-28v-4ZM28,113.22V62.78a4,4,0,0,1,3.34-4L168.33,36a52,52,0,0,1,0,104l-137-22.83A4,4,0,0,1,28,113.22ZM140,200V143.39L167.34,148a4.89,4.89,0,0,0,.66.05,59.62,59.62,0,0,0,25.46-5.69l-27,59.34a4,4,0,0,1-3.64,2.35H144A4,4,0,0,1,140,200Z"/></svg>`;
}
