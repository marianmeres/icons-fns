/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidShieldAlt2(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21.881 5.223a.496.496 0 0 0-.747-.412c-.672.392-1.718.898-2.643.898-.421 0-.849-.064-1.289-.198a5.712 5.712 0 0 1-.808-.309c-1.338-.639-2.567-1.767-3.696-2.889a1.008 1.008 0 0 0-.698-.29 1.008 1.008 0 0 0-.698.29c-1.129 1.122-2.358 2.25-3.696 2.889h-.001a5.655 5.655 0 0 1-.807.309c-.44.134-.869.198-1.289.198-.925 0-1.971-.507-2.643-.898a.496.496 0 0 0-.747.412c-.061 1.538-.077 4.84.688 7.444 1.399 4.763 4.48 7.976 8.91 9.292l.14.041.14-.014V22v-.014H12l.143.014.14-.041c4.43-1.316 7.511-4.529 8.91-9.292.765-2.604.748-5.906.688-7.444z"/></svg>`;
}
