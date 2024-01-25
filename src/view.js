export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // Creamos un contenedor para los elementos renderizados
  const container = document.createElement('ul');

  // Iteraremos sobre cada objeto en el dataset
  data.forEach(item => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement('li');
    itemContainer.classList.add('lista')
    itemContainer.setAttribute('itemtype', 'http://schema.org/Person')
    // Creamos una imagen DOM y establecemos la fuente (imagenURL)
    const imageUrl = document.createElement('img');
    imageUrl.src = item.imageUrl;
    // Creamos un objeto para mostrar el número de episodios y genero
    const descriptionTotal = document.createElement('p');
    //const genreTotal = document.createElement('p');
    //const subtitleTotal = document.createElement('p');
    descriptionTotal.textContent = `${item.facts.cantidadEpisodios} Ep. | ${item.facts.totalGenero} | Sub. ${item.facts.totalSubtitulos}`;
    //genreTotal.textContent = `${item.facts.totalGenero}`;
    // Creamos un objeto para mostrar el nombre del k-drama
    const nameKdrama = document.createElement('h3');
    nameKdrama.textContent = item.name;
    // Agregar los elementos al contenedor del item
    itemContainer.appendChild(imageUrl);
    itemContainer.appendChild(descriptionTotal);
    //itemContainer.appendChild(genreTotal);
    itemContainer.appendChild(nameKdrama);
    //itemContainer.appendChild(subtitleTotal);

    // Agregar el contenedor del item al contenedor principal
    container.appendChild(itemContainer);
  });

  // Devolver el contenedor principal con todos los elementos renderizados
  return container;
};



