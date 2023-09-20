export const getImageUrl = (src: string | undefined) => {
	if (src) return new URL(`../assets/img/${src}`, import.meta.url).href
}
