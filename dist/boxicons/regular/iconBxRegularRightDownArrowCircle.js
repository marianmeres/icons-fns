export const iconBxRegularRightDownArrowCircle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143A9.93 9.93 0 0 0 12 21.995a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143A9.928 9.928 0 0 0 12 2.007zm5.657 15.65A7.946 7.946 0 0 1 12 19.994c-2.141 0-4.15-.83-5.657-2.337-3.119-3.119-3.119-8.195 0-11.314A7.944 7.944 0 0 1 12 4.007c2.141 0 4.15.829 5.657 2.336 3.119 3.119 3.119 8.195 0 11.314z"/><path d="M9.661 8.247 8.247 9.661l3.214 3.214L9.336 15H15V9.337l-2.125 2.124z"/></svg>`;
}
