/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
document.addEventListener('DOMContentLoaded', () => {
  const botaoFiltrar = document.querySelector(".btn-filtrar");

  // passo 2 - escutar o clique no botão de aplicar filtros
  botaoFiltrar.addEventListener("click", function () {
    // passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector("#categoria").value;
    const precoMaximoSelecionado = document.querySelector("#preco").value;

    // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
    const cartas = document.querySelectorAll(".carta");

    cartas.forEach(function (carta) {
      const categoriaCarta = carta.dataset.categoria;
      const precoCarta = carta.dataset.preco;

      let mostrarCarta = true;

      const temFiltroDeCategoria = categoriaSelecionada !== "";

      const cartaNaoBateComFiltroDeCategoria =
        categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

      if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
        mostrarCarta = false;
      }

      const temFiltroDePreco = precoMaximoSelecionado !== "";

      const cartaNaoBateComFiltroDePrecoMaximo =
        parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

      if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
        mostrarCarta = false;
      }

      if (mostrarCarta) {
        carta.classList.add("mostrar");
        carta.classList.remove("esconder");
      } else {
        carta.classList.remove("mostrar");
        carta.classList.add("esconder");
      }
    });
  });
})


// --- CÓDIGO PARA INICIAR O CARROSSEL SWIPER ---

// Espera todo o conteúdo da página carregar antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

  // --- INICIALIZAÇÃO DO SWIPER CARROSSEL ---

  const swiper = new Swiper('.meu-carrossel', {
    // === Configurações Principais para resolver seu problema ===

    // slidesPerView: 1
    // Esta é a configuração MAIS IMPORTANTE.
    // Ela força o carrossel a mostrar apenas UM slide de cada vez.
    slidesPerView: 1,

    // spaceBetween: 30
    // Adiciona um espaço de 30px entre os slides (útil se você decidir mostrar mais de 1 no futuro).
    spaceBetween: 30,

    // centeredSlides: true
    // Garante que o slide ativo esteja sempre perfeitamente centralizado.
    centeredSlides: true,


    // === Outras Configurações Úteis ===

    // loop: true
    // Cria um loop infinito, ou seja, ao chegar no último slide, o próximo é o primeiro.
    loop: true,

    // Paginação (as bolinhas embaixo)
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite clicar nas bolinhas para navegar
    },

    // Botões de Navegação (as setas)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // (Seu código de filtro de produtos que fizemos antes pode continuar aqui embaixo, sem problemas)
  // ...
});

document.addEventListener('DOMContentLoaded', () => {
  // (Aqui dentro já tem o código do Filtro e do Carrossel...)
  // Adicione o código abaixo no final, mas ainda dentro do 'DOMContentLoaded'

  // =============================================
  // LÓGICA PARA ABRIR E FECHAR O MENU MOBILE
  // =============================================
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');

  if (btnMenu && menu && overlay) {
    // Evento para abrir o menu
    btnMenu.addEventListener('click', () => {
      menu.classList.add('abrir-menu');
    });

    // Função para fechar o menu
    function fecharMenu() {
      menu.classList.remove('abrir-menu');
    }

    // Eventos que fecham o menu
    menu.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
  }


});
document.addEventListener('DOMContentLoaded', () => {

  // 1. LÓGICA DE REVELAR OS CARDS (Scroll Reveal)
  const cartas = document.querySelectorAll('.carta');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revelar');
      }
    });
  }, { threshold: 0.1 });

  cartas.forEach(carta => observer.observe(carta));

  // 2. MOTOR DA CACHOEIRA E PARALLAX (Movimento das Pipocas)
  // Usamos o evento de scroll para mover as pipocas p3 e p4 que estão no meio do site
  window.addEventListener('scroll', () => {
    const scrollValue = window.pageYOffset;

    // Pipoca da Esquerda (p3)
    const p3 = document.querySelector('.p3');
    // Pipoca da Direita (p4)
    const p4 = document.querySelector('.p4');

    if (p3) {
      // Move a pipoca para cima em uma velocidade de 0.3x o scroll
      // E adiciona uma rotação para parecer que está caindo/girando
      p3.style.transform = `translateY(${scrollValue * -0.3}px) rotate(${scrollValue * 0.1}deg)`;
    }

    if (p4) {
      // Move a pipoca da direita um pouco mais rápido para dar profundidade (0.5x)
      p4.style.transform = `translateY(${scrollValue * -0.5}px) rotate(${scrollValue * -0.15}deg)`;
    }
  });

  // 3. LÓGICA DO MENU MOBILE (Mantenha o que você já tinha)
  const btnMenu = document.getElementById('btn-menu');
  const menu = document.getElementById('menu-mobile');
  const overlay = document.getElementById('overlay-menu');

  if (btnMenu && menu && overlay) {
    btnMenu.addEventListener('click', () => menu.classList.add('abrir-menu'));
    const fecharMenu = () => menu.classList.remove('abrir-menu');
    menu.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
  }
});