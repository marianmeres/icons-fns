export function iconBxSolidVirus(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21 11h-.17c-1.053 0-1.958-.669-2.357-1.644l-.021-.049c-.408-.977-.249-2.097.5-2.846l.119-.119a.999.999 0 1 0-1.414-1.414l-.119.119c-.749.749-1.869.908-2.846.5l-.049-.021C13.669 5.128 13 4.218 13 3.165v-.081C13 2.447 12.553 2 12 2s-1 .447-1 1v.036c0 1.096-.66 2.084-1.673 2.503l-.006.003a2.71 2.71 0 0 1-2.953-.588l-.025-.025a.999.999 0 1 0-1.414 1.414l.036.036a2.69 2.69 0 0 1 .583 2.929l-.027.064A2.638 2.638 0 0 1 3.085 11h-.001C2.447 11 2 11.447 2 12s.447 1 1 1h.068a2.66 2.66 0 0 1 2.459 1.644l.021.049a2.69 2.69 0 0 1-.583 2.929l-.036.036a.999.999 0 1 0 1.414 1.414l.036-.036a2.689 2.689 0 0 1 2.929-.583l.143.06A2.505 2.505 0 0 1 11 20.83v.085c0 .638.447 1.085 1 1.085s1-.448 1-1v-.17c0-1.015.611-1.93 1.55-2.318l.252-.104a2.508 2.508 0 0 1 2.736.545l.119.119a.999.999 0 1 0 1.414-1.414l-.119-.119c-.749-.749-.908-1.869-.5-2.846l.021-.049c.399-.975 1.309-1.644 2.362-1.644h.08c.638 0 1.085-.447 1.085-1s-.447-1-1-1zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4.5a2 2 0 1 1 .001-4.001A2 2 0 0 1 14 12z"/></svg>`;
}
