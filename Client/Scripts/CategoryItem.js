
(() => {


	document.querySelector('body').addEventListener(
		'click',
		e => {

			if (e.target.dataset.id === 'ModalCloseBtn') {
				e.currentTarget.classList.remove('BodyMode_Modal');
			}

			if (e.target?.closest('[data-id=Item]')?.dataset?.itemId) {
				e.currentTarget.classList.add('BodyMode_Modal');
			}

		}
	);


})()