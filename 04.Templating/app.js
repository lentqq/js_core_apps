(async function () {
    const { getTemplateFunc, registerPartial } = window.templates;
    await registerPartial('card', 'card');

    const cardsListFunc = await getTemplateFunc('cards-list');

    document.getElementById('contacts').innerHTML = cardsListFunc({ contacts });

    const getCardParent = (element) => {
        const className = 'contact';
        let node = element.parent.parentNode;
        while (node != null) {
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentNode;
        }
        return node;
    };

    const handleDetails = ({ target }) => {
        const card = getCardParent(parent);
        const details = card.querySelector('.details');
        details.style.display = details.style.display ? '' : 'none';
    };

  document.getElementById('contacts')
  .addEventListener('click', ({ target }) => {
      if(target.classList.contains('detailsBtn')) {
          handleDetails({ terget });
      }
  }) 

}());