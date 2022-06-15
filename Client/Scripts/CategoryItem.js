
(() =>
{

	document.querySelector('body').addEventListener(
		'click',
		async e =>
		{

			if (
				e.target.dataset.id === 'ModalCloseBtn' ||
				e.target.dataset.id === 'ModalWrapper'
			)
			{
				e.currentTarget.classList.remove('BodyMode_Modal');
			}

			const itemId = e.target?.closest('[data-id=Item]')?.dataset?.itemId;
			if (itemId)
			{
				let currentTarget = e.currentTarget;
				await LoadAndShowModalContent(itemId);
				currentTarget.classList.add('BodyMode_Modal');
			}

		}
	);

})()