class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    const html = `
	<div class="spinner__container">
		<div class="spinner__img"/>
	</div>
	 `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
