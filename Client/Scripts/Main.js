
(() =>
{
	let placeholderEl;

	window.addEventListener(
		'load',
		async () =>
		{
			placeholderEl = document.querySelector('[data-id=ContentPlaceholder]');

			LoadAndShowContent(placeholderEl);

			window.addEventListener('hashchange',
				() =>
				{
					LoadAndShowContent(placeholderEl);
				}
			);
		}
	)
})();


const LoadAndShowContent = async (placeholderEl) =>
{
	let content = await LoadContent(GetRoute());
	ShowContent(placeholderEl, content);
}


const GetRoute = () =>
{
	let route = window.location.hash.substr(1);
	return route || 'home';
}


const LoadContent = async (namedTemplate) =>
{
	let content = await fetch(`./Templates/${namedTemplate}.html`);
	let contentText = await content.text();
	return contentText;
}


const ShowContent = (el, content) =>
{
	el.innerHTML = content;
}
