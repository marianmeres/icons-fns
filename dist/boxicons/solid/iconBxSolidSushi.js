export const iconBxSolidSushi = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><ellipse cx="12.07" cy="7" rx="3" ry="1.71"/><path d="M12.07 22c4.48 0 8-2.2 8-5V7c0-2.8-3.52-5-8-5s-8 2.2-8 5v10c0 2.8 3.51 5 8 5zm0-18c3.53 0 6 1.58 6 3a2 2 0 0 1-.29.87c-.68 1-2.53 2-5 2.12h-1.39C8.88 9.83 7 8.89 6.35 7.84a2.16 2.16 0 0 1-.28-.76V7c0-1.42 2.46-3 6-3z"/></svg>`;
}
