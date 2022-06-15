
(() => {


	document.querySelector('body').addEventListener(
		'click',
		e => {

			if (e.target.dataset.id === 'ModalCloseBtn') {
				e.currentTarget.classList.remove('BodyMode_Modal');
			}

			const itemId = e.target?.closest('[data-id=Item]')?.dataset?.itemId;
			if (itemId) {
				e.currentTarget.classList.add('BodyMode_Modal');
			}

		}
	);


})()