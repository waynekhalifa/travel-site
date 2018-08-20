import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButtom = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		this.openModalButtom.on('click', this.openModal.bind(this));
		this.closeModalButton.on('click', this.closeModal.bind(this));

		// on any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if ( e.keyCode == 27 ) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false;
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;