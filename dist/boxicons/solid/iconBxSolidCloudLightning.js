export const iconBxSolidCloudLightning = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18.944 10.112C18.507 6.67 15.56 4 12 4 9.244 4 6.85 5.611 5.757 8.15 3.609 8.792 2 10.82 2 13c0 2.757 2.243 5 5 5h1.333L10 13h4l-2 3h2.975l-1.325 2H18c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM11 18H8.333L8 19h3v3l2.649-4H11.5z"/></svg>`;
}
