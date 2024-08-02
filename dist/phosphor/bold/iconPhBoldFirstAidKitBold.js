export const iconPhBoldFirstAidKitBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,52H180V44a28,28,0,0,0-28-28H104A28,28,0,0,0,76,44v8H40A20,20,0,0,0,20,72V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V72A20,20,0,0,0,216,52ZM100,44a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v8H100ZM212,196H44V76H212Zm-48-60a12,12,0,0,1-12,12H140v12a12,12,0,0,1-24,0V148H104a12,12,0,0,1,0-24h12V112a12,12,0,0,1,24,0v12h12A12,12,0,0,1,164,136Z"/></svg>`;
}
