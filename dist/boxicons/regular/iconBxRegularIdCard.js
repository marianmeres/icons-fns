export const iconBxRegularIdCard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z"/><path d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z"/><path d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"/></svg>`;
}
