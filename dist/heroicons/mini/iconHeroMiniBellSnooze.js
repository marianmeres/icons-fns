export function iconHeroMiniBellSnooze(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M4 8a6 6 0 1 1 12 0c0 1.887.454 3.665 1.257 5.234a.75.75 0 0 1-.515 1.076 32.903 32.903 0 0 1-3.256.508 3.5 3.5 0 0 1-6.972 0 32.91 32.91 0 0 1-3.256-.508.75.75 0 0 1-.515-1.076A11.448 11.448 0 0 0 4 8Zm6 7c-.655 0-1.305-.02-1.95-.057a2 2 0 0 0 3.9 0c-.645.038-1.295.057-1.95.057ZM8.75 6a.75.75 0 0 0 0 1.5h1.043L8.14 9.814A.75.75 0 0 0 8.75 11h2.5a.75.75 0 0 0 0-1.5h-1.043l1.653-2.314A.75.75 0 0 0 11.25 6h-2.5Z" clip-rule="evenodd"/></svg>`;
}
