/**
 * prettier-ignore
 * @__PURE__
 */
export function iconBxRegularBasketball(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M4.929 19.071c1.895 1.895 4.405 2.938 7.071 2.938s5.177-1.043 7.071-2.938c3.899-3.899 3.899-10.243 0-14.143C17.177 3.034 14.665 1.99 12 1.99S6.823 3.034 4.929 4.929c-3.899 3.898-3.899 10.243 0 14.142zm7.38-15.065a7.912 7.912 0 0 1 4.594 1.678L12 10.586l-1.46-1.46c1.161-1.479 1.792-3.308 1.769-5.12zM9.11 7.696 7.098 5.684a7.929 7.929 0 0 1 3.218-1.51c-.015 1.236-.445 2.477-1.206 3.522zM7.686 9.1a6.065 6.065 0 0 1-3.459 1.057 7.923 7.923 0 0 1 1.458-3.058L7.686 9.1zm-3.675 3.046c.077.002.154.014.231.014a8.05 8.05 0 0 0 4.877-1.626L10.586 12l-4.901 4.901a7.972 7.972 0 0 1-1.674-4.755zm12.294 2.745c1.042-.758 2.28-1.188 3.508-1.206a7.947 7.947 0 0 1-1.497 3.217l-2.011-2.011zm.597 3.425a7.935 7.935 0 0 1-3.059 1.47 6.05 6.05 0 0 1 1.057-3.472l2.002 2.002zm-5.044 1.686a7.922 7.922 0 0 1-4.761-1.686L12 13.414l1.463 1.463c-1.103 1.444-1.659 3.266-1.605 5.125zm8.124-8.31c-1.807-.018-3.633.61-5.108 1.768L13.414 12l4.901-4.901a7.968 7.968 0 0 1 1.667 4.593z"/></svg>`;
}
