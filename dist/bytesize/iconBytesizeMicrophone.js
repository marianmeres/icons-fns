export const iconBytesizeMicrophone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 32}" height="${size || 32}" stroke-width="${strokeWidth ?? 2}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 2 C12 2 12 6 12 6 L12 16 C12 16 12 20 16 20 20 20 20 16 20 16 L20 6 C20 6 20 2 16 2 Z M8 17 C8 17 8 24 16 24 24 24 24 17 24 17 M13 29 L19 29 M16 24 L16 29" /></svg>`;
}
