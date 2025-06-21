class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
	 	<header class="header">
			<div class="header__container">
				<div class="header__counter" onclick="headerPage.handlerOpenShoppingPage();">🔥 ${count}</div>
			</div>
		</header>
	 `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);
