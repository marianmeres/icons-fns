export const iconBxSolidDroplet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12.6 2.4c-.4-.3-.9-.3-1.2 0C9.5 3.9 4 8.5 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5.4-5.5-10.1-7.4-11.6"/></svg>`;
}
