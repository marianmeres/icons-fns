export const iconBxRegularPieChartAlt2 = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9H13V4.069A8.008 8.008 0 0 1 19.931 11zM4 12c0-4.072 3.061-7.436 7-7.931V12a.996.996 0 0 0 .111.438c.015.03.022.063.041.093l4.202 6.723A7.949 7.949 0 0 1 12 20c-4.411 0-8-3.589-8-8zm13.052 6.196L13.805 13h6.126a7.992 7.992 0 0 1-2.879 5.196z"/></svg>`;
}
