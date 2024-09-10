import CSSStyleSheet from '../../css/CSSStyleSheet.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import SVGElement from '../svg-element/SVGElement.js';

/**
 * SVG Style Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGStyleElement
 */
export default class SVGStyleElement extends SVGElement {
	// Internal properties
	public [PropertySymbol.sheet]: CSSStyleSheet | null = null;
	public [PropertySymbol.styleNode] = this;
	public [PropertySymbol.disabled] = false;

	/**
	 * Returns type.
	 *
	 * @deprecated
	 * @returns Type.
	 */
	public get type(): string {
		return this.getAttribute('type') || 'text/css';
	}

	/**
	 * Sets type.
	 *
	 * @deprecated
	 * @param value New value.
	 */
	public set type(value: string) {
		this.setAttribute('type', value);
	}

	/**
	 * Returns media.
	 *
	 * @returns Media.
	 */
	public get media(): string {
		return this.getAttribute('media') || 'all';
	}

	/**
	 * Sets media.
	 *
	 * @param media Media.
	 */
	public set media(media: string) {
		this.setAttribute('media', media);
	}

	/**
	 * Returns title.
	 *
	 * @returns Title.
	 */
	public get title(): string {
		return this.getAttribute('title') || '';
	}

	/**
	 * Sets title.
	 *
	 * @param title Title.
	 */
	public set title(title: string) {
		this.setAttribute('title', title);
	}

	/**
	 * Returns disabled.
	 *
	 * @returns Disabled.
	 */
	public get disabled(): boolean {
		return this[PropertySymbol.disabled];
	}

	/**
	 * Sets disabled.
	 *
	 * @param disabled Disabled.
	 */
	public set disabled(disabled: boolean) {
		this[PropertySymbol.disabled] = Boolean(disabled);
	}

	/**
	 * Returns style.
	 *
	 * @returns Style.
	 */
	public get sheet(): CSSStyleSheet {
		if (!this[PropertySymbol.isConnected]) {
			return null;
		}
		if (!this[PropertySymbol.sheet]) {
			this[PropertySymbol.sheet] = new CSSStyleSheet();
		}
		return this[PropertySymbol.sheet];
	}

	/**
	 * @override
	 */
	public override [PropertySymbol.disconnectedFromDocument](): void {
		super[PropertySymbol.disconnectedFromDocument]();
		this[PropertySymbol.sheet] = null;
	}

	/**
	 * Updates the CSSStyleSheet with the text content.
	 */
	public [PropertySymbol.updateSheet](): void {
		if (this[PropertySymbol.sheet]) {
			this[PropertySymbol.sheet].replaceSync(this.textContent);
		}
	}
}
