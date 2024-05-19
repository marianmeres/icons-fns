/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxSolidLowVision(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293 2.293 3.707l3.315 3.315c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678 1.414-1.414-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316-.105-.316c-.022-.068-2.316-6.686-9.949-6.686zM12.043 7H12a5 5 0 0 1 5 5 4.894 4.894 0 0 1-.852 2.734l-.721-.721A3.919 3.919 0 0 0 16 11.999c0-.474-.099-.925-.255-1.349A.985.985 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.965 3.965 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-.72-.72C10.053 7.326 10.982 7 12 7h-.043L12 6.998l.043.002zm-7.969 4.999c.103-.235.274-.586.521-.989l5.867 5.867c-4.213-.647-5.939-3.842-6.388-4.878zm9.247 4.908-7.48-7.48a8.146 8.146 0 0 1 1.188-.984l8.055 8.055a8.835 8.835 0 0 1-1.763.409z"/></svg>`;
}
