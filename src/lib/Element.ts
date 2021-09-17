// Gives you query like $ and $$ functions as aliases for querySelector and querySelectorAll respectively

interface Window {
    $<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): HTMLElementTagNameMap[K] | null
    $<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): SVGElementTagNameMap[K] | null
    $<E extends Element = Element>(selectors: string): E | null
    $$<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>
    $$<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): NodeListOf<SVGElementTagNameMap[K]>
    $$<E extends Element = Element>(selectors: string): NodeListOf<E>
}

window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)

interface Element {
    $<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): HTMLElementTagNameMap[K] | null
    $<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): SVGElementTagNameMap[K] | null
    $<E extends Element = Element>(selectors: string): E | null
    $$<K extends keyof HTMLElementTagNameMap>(
        selectors: K
    ): NodeListOf<HTMLElementTagNameMap[K]>
    $$<K extends keyof SVGElementTagNameMap>(
        selectors: K
    ): NodeListOf<SVGElementTagNameMap[K]>
    $$<E extends Element = Element>(selectors: string): NodeListOf<E>
}

Element.prototype.$ = function <K extends keyof HTMLElementTagNameMap>(
    selectors: K
) {
    return this.querySelector(selectors)
}

Element.prototype.$$ = function <K extends keyof HTMLElementTagNameMap>(
    selectors: K
) {
    return this.querySelectorAll(selectors)
}

interface NodeList {
    addEventListener(
        type: keyof GlobalEventHandlersEventMap,
        listener: (this: Element, ev: Event) => any,
        options?: boolean | AddEventListenerOptions | undefined
    ): void | undefined
}

NodeList.prototype.addEventListener = function (
    type: keyof GlobalEventHandlersEventMap,
    listener: (this: Element, ev: Event) => any,
    options?: boolean | AddEventListenerOptions | undefined
) {
    this.forEach((e) => e.addEventListener(type, listener, options))
}
