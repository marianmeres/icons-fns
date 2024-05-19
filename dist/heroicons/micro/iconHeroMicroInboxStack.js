/*@__PURE__*/
export function iconHeroMicroInboxStack(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M2.742 2.755A2.25 2.25 0 0 1 4.424 2h7.152a2.25 2.25 0 0 1 1.682.755l1.174 1.32c.366.412.568.944.568 1.495v.68a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 1 6.25v-.68c0-.55.202-1.083.568-1.495l1.174-1.32Zm1.682.745a.75.75 0 0 0-.561.252L2.753 5h2.212a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61A1 1 0 0 1 11.035 5h2.211l-1.109-1.248a.75.75 0 0 0-.56-.252H4.423Z" clip-rule="evenodd"/><path d="M1 10.75a.75.75 0 0 1 .75-.75h3.215a1 1 0 0 1 .832.445l.406.61a1 1 0 0 0 .832.445h1.93a1 1 0 0 0 .832-.445l.406-.61a1 1 0 0 1 .832-.445h3.215a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 1 12.75 14h-9.5A2.25 2.25 0 0 1 1 11.75v-1Z"/></svg>`;
}
