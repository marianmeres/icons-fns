export function iconHeroMiniLifebuoy(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="m7.171 4.146 1.947 2.466a3.514 3.514 0 0 1 1.764 0l1.947-2.466a6.52 6.52 0 0 0-5.658 0Zm8.683 3.025-2.466 1.947c.15.578.15 1.186 0 1.764l2.466 1.947a6.52 6.52 0 0 0 0-5.658Zm-3.025 8.683-1.947-2.466c-.578.15-1.186.15-1.764 0l-1.947 2.466a6.52 6.52 0 0 0 5.658 0ZM4.146 12.83l2.466-1.947a3.514 3.514 0 0 1 0-1.764L4.146 7.171a6.52 6.52 0 0 0 0 5.658ZM5.63 3.297a8.01 8.01 0 0 1 8.738 0 8.031 8.031 0 0 1 2.334 2.334 8.01 8.01 0 0 1 0 8.738 8.033 8.033 0 0 1-2.334 2.334 8.01 8.01 0 0 1-8.738 0 8.032 8.032 0 0 1-2.334-2.334 8.01 8.01 0 0 1 0-8.738A8.03 8.03 0 0 1 5.63 3.297Zm5.198 4.882a2.008 2.008 0 0 0-2.243.407 1.994 1.994 0 0 0-.407 2.243 1.993 1.993 0 0 0 .992.992 2.008 2.008 0 0 0 2.243-.407c.176-.175.31-.374.407-.585a2.008 2.008 0 0 0-.407-2.243 1.993 1.993 0 0 0-.585-.407Z" clip-rule="evenodd"/></svg>`;
}
