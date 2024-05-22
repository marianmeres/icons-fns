export const iconBxRegularLoaderCircle = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="6.343" cy="17.657" r="2"/><circle cx="17.657" cy="6.343" r="2"/><circle cx="4" cy="12" r="2.001"/><circle cx="20" cy="12" r="2"/><circle cx="6.343" cy="6.344" r="2"/><circle cx="17.657" cy="17.658" r="2"/></svg>`;
}
