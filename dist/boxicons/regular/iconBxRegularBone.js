/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxRegularBone(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19.049 4.951a3.953 3.953 0 0 0-1.028-1.801c-1.51-1.51-4.146-1.51-5.656 0a4.009 4.009 0 0 0-.618 4.86l-3.714 3.714c-1.505-.89-3.591-.649-4.86.618a4.004 4.004 0 0 0 0 5.657 3.946 3.946 0 0 0 1.8 1.028c.178.681.53 1.302 1.028 1.8A3.966 3.966 0 0 0 8.829 22a3.973 3.973 0 0 0 2.828-1.172 4.007 4.007 0 0 0 .617-4.859l3.714-3.714c1.507.891 3.593.65 4.861-.619a4.003 4.003 0 0 0 0-5.656 3.942 3.942 0 0 0-1.8-1.029zm.387 5.271c-.756.755-2.073.756-2.829 0l-.707-.707-6.363 6.364.707.707a2.003 2.003 0 0 1 0 2.828c-.757.757-2.074.755-2.829 0a1.963 1.963 0 0 1-.571-1.31l-.047-.9-.9-.047a1.972 1.972 0 0 1-1.31-.571 2.003 2.003 0 0 1 0-2.829c.377-.377.879-.585 1.413-.585s1.036.208 1.414.585l.707.707 6.364-6.363-.707-.707a2.003 2.003 0 0 1 0-2.829c.756-.754 2.072-.754 2.828 0 .343.343.546.809.572 1.312l.048.897.897.048c.503.026.969.229 1.312.572.377.378.585.88.585 1.414s-.207 1.036-.584 1.414z"/></svg>`;
}
