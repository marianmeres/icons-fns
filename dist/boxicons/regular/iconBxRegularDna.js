export function iconBxRegularDna(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M15.794 11.09c.332-.263.648-.542.947-.84l.136-.142c.283-.293.552-.598.801-.919l.062-.075c.255-.335.486-.688.702-1.049l.128-.22c.205-.364.395-.737.559-1.123.02-.047.035-.095.055-.142.147-.361.274-.731.383-1.109.021-.07.044-.14.063-.211.107-.402.189-.813.251-1.229.013-.087.021-.175.032-.263.051-.432.087-.869.087-1.311V2h-2v.457c0 .184-.031.361-.042.543H6.022C6.012 2.819 6 2.64 6 2.457V2H4v.457c0 4.876 3.269 9.218 7.952 10.569l.028.009c2.881.823 5.056 3.146 5.769 5.965H6.251l.799-2h7.607a7.416 7.416 0 0 0-2.063-2h-4c.445-.424.956-.774 1.491-1.09a9.922 9.922 0 0 1-2.08-1.014C5.55 14.812 4 17.779 4 21.015V23h2v-1.985L6.001 21h11.998l.001.015V23h2v-1.985c0-3.83-2.159-7.303-5.443-9.07a11.1 11.1 0 0 0 1.072-.729c.055-.042.11-.082.165-.126zm-1.19-1.604a8.945 8.945 0 0 1-2.325 1.348c-.092.036-.185.068-.278.102A8.95 8.95 0 0 1 8.836 9h6.292c-.171.161-.332.333-.517.48l-.007.006zM17.619 5c-.005.016-.007.033-.012.049l-.044.151a9.089 9.089 0 0 1-.513 1.252c-.096.19-.213.365-.321.548h-9.48a9.066 9.066 0 0 1-.871-2h11.241z"/></svg>`;
}
