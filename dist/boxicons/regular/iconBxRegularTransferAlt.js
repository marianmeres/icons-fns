export const iconBxRegularTransferAlt = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"/></svg>`;
}
