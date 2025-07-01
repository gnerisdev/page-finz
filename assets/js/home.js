document.addEventListener('DOMContentLoaded', function () {
  const feedbacks = [
    {
      name: "Sofia Alves",
      username: "@sofia_alves_",
      photoUrl: "https://randomuser.me/api/portraits/women/11.jpg",
      text: "Nunca pensei que entender de seguros seria tão fácil! A <span class='primary'>Fynz</span> realmente cumpre o que promete: simplicidade e clareza. Amei!"
    },
    {
      name: "Lucas Pereira",
      username: "@lucas_p_tech",
      photoUrl: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "Revisar meu seguro com a <span class='primary'>Fynz</span> foi a melhor decisão. Descobri que pagava mais por menos. Agora estou super bem protegido e economizando! #Fynz"
    },
    {
      name: "Camila Mendes",
      username: "@cami_mendes",
      photoUrl: "https://randomuser.me/api/portraits/women/13.jpg",
      text: "O atendimento do especialista da <span class='primary'>Fynz</span> foi impecável. Tirou todas as minhas dúvidas sobre plano de saúde. Sinto que fiz a escolha certa para minha família."
    },
    {
      name: "Diego Farias",
      username: "@diego_farias_eng",
      photoUrl: "https://randomuser.me/api/portraits/men/14.jpg",
      text: "A transparência da <span class='primary'>Fynz</span> é algo raro no mercado. Me ajudaram a entender o consórcio sem pressão para fechar. Recomendo para quem busca honestidade."
    },
    {
      name: "Patrícia Lima",
      username: "@patricia_lima",
      photoUrl: "https://randomuser.me/api/portraits/women/15.jpg",
      text: "Minha vida mudou e meu seguro precisava acompanhar. A <span class='primary'>Fynz</span> me mostrou o quanto era importante atualizar. Processo rápido e sem burocracia."
    },
    {
      name: "Gustavo Rocha",
      username: "@guga_rocha",
      photoUrl: "https://randomuser.me/api/portraits/men/16.jpg",
      text: "A plataforma da <span class='primary'>Fynz</span> é sensacional para comparar seguros. Sem viés, sem pressão, só informações claras para eu decidir. Parabéns pela iniciativa!"
    },
    {
      name: "Débora Costa",
      username: "@deb_costa",
      photoUrl: "https://randomuser.me/api/portraits/women/17.jpg",
      text: "Nunca me senti tão segura ao contratar um seguro. A <span class='primary'>Fynz</span> me deu todo o conhecimento necessário. Recomendo para todos que buscam tranquilidade e informação."
    },
    {
      name: "Rafael Menezes",
      username: "@rafa_menezes_rj",
      photoUrl: "https://randomuser.me/api/portraits/men/18.jpg",
      text: "A Fynz é o futuro dos seguros. Sem letras miúdas, sem surpresas. Meu seguro de responsabilidade civil foi super bem explicado, agora sei o que estou contratando."
    },
    {
      name: "Carla Oliveira",
      username: "@carla_oli",
      photoUrl: "https://randomuser.me/api/portraits/women/19.jpg",
      text: "A revisão do meu seguro com a <span class='primary'>Fynz</span> revelou várias lacunas que eu nem imaginava. Agora tenho uma apólice que realmente me protege. Essencial!"
    },
    {
      name: "Felipe Nunes",
      username: "@felipe_nunes_",
      photoUrl: "https://randomuser.me/api/portraits/men/20.jpg",
      text: "Simples, direto e do seu jeito. A <span class='primary'>Fynz</span> realmente entrega essa promessa. Contratar seguro ficou fácil de verdade! #ProtecaoFynz"
    }
  ];

  const products = [
    {
      name: "Seguro de Vida",
      description: "Mais do que deixar algo pra alguém.",
      desktopImg: "./assets/img/health-svgrepo-com.svg",       
      mobileImg: "./assets/img/health-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_vida"
    },
    {
      name: "Seguro Auto",
      description: "Proteção completa para o seu veículo.",
      desktopImg: "./assets/img/car-svgrepo-com.svg",
      mobileImg:"./assets/img/car-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_responsabilidade_civil"
    },
    {
      name: "Seguro Residencial",
      description: "Seguro Residencial Proteja seu patrimônio.",
      desktopImg: "./assets/img/home-alt-svgrepo-com.svg",
      mobileImg:"./assets/img/home-alt-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_responsabilidade_civil"
    },
    {
      name: "Plano de Saúde",
      description: "Cuidar da saúde é o novo relacionamento sério.",
      desktopImg: "./assets/img/checkup-doctor-health-healthcare-hospital-medical-svgrepo-com.svg",
      mobileImg: "./assets/img/checkup-doctor-health-healthcare-hospital-medical-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_plano_saude"
    },
    {
      name: "Consórcio",
      description: "Nem tudo precisa ser agora. Mas precisa ser possível.",
      desktopImg: "./assets/img/deal-done-partnership-agreement-svgrepo-com.svg",
      mobileImg:"./assets/img/deal-done-partnership-agreement-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_consorcio"
    },
    {
      name: "Responsabilidade Civil",
      description: "A justiça não vê só o que foi feito. Ela considera o que foi sentido.",
      desktopImg: "./assets/img/insurance-protection-safety-svgrepo-com.svg",
      mobileImg: "./assets/img/insurance-protection-safety-svgrepo-com.svg",
      link: "/onboarding/start?p=home_us_responsabilidade_civil"
    },   
  ];

  const targetElement = document.querySelector('.sc-55636dc4-2');

  [...feedbacks, ...feedbacks].forEach(feedback => {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.innerHTML = `
            <div class="sc-dlfnbm sc-hKgILt sc-929dd2a3-0 eHArZT oXQDT gUWSMH tweet-card ">
                <div class="sc-dlfnbm sc-hKgILt cWMrUO dkJMFH">
                    <img 
                        alt="${feedback.name}" loading="lazy" width="100" height="100" decoding="async"
                        class="sc-929dd2a3-1 gMrLqq" style="color:transparent"
                        src="${feedback.photoUrl}" 
                    />
                    <div class="sc-dlfnbm sc-hKgILt ktyKdC dfPQcU">
                        <p class="sc-929dd2a3-2 fpqtPF">${feedback.name}</p>
                        <p class="sc-929dd2a3-3 fPFuRr">${feedback.username}</p>
                    </div>
                </div>
                <p class="sc-929dd2a3-4 gFsfCu">
                    ${feedback.text}
                </p>
            </div>
        `;
    targetElement.appendChild(feedbackDiv);
  });

  const productList = document.querySelector('#lista-produto'); 
  
  if (productList) {
    products.forEach(product => {
      const productItem = document.createElement('li');
      productItem.setAttribute('style', 'justify-content: space-between;');
      productItem.setAttribute('tabindex', '0');
      productItem.classList.add('sc-dlfnbm', 'sc-hKgILt', 'sc-e3cf1f21-0', 'cWMrUO', 'chrFRT', 'hDRqOu');
      productItem.innerHTML = `
        <img
          aria-hidden="true"
          alt="${product.name}"
          loading="lazy"
          width="150"
          height="150"
          decoding="async"
          data-nimg="1"
          class="sc-3524474a-2 hOVqDd"
          style="color: transparent; filter: grayscale(100%);"
          srcset="${product.desktopImg.replace('?w=384&q=100', '?w=256&q=100')} 1x, ${product.desktopImg} 2x"
          src="${product.desktopImg}"
        />
        <img
          aria-hidden="true"
          alt="${product.name}"
          loading="lazy"
          width="106"
          height="106"
          decoding="async"
          data-nimg="1"
          class="sc-3524474a-3 cexTqw"
          style="color: transparent; filter: grayscale(100%);"
          srcset="${product.mobileImg.replace('?w=256&q=100', '?w=128&q=100')} 1x, ${product.mobileImg} 2x"
          src="${product.mobileImg}"
        />
        <span class="sc-e3cf1f21-3 sc-3524474a-0 iucpwW fWQlyv">
          ${product.name}
        </span>
        <span class="sc-e3cf1f21-4 sc-3524474a-1 jtIOEh msOlO">
          ${product.description.replace(/\n/g, '<br />')}
        </span>
        <span class="sc-3524474a-4 hWsqzn">
          <span
            display="block,none"
            class="sc-dlfnbm sc-3524474a-5 kHtCkv"
          >
            <a
              href="${product.link}"
              data-source="${product.name.toLowerCase().replace(/\s/g, '_')}"
              class="sc-jNMdTA sc-d98de5f3-0 edGEno iTsFZR sc-e3cf1f21-6 gxDWLU"
            >
              check prices
            </a>
          </span>
          <span display="none,block" class="sc-dlfnbm sc-3524474a-5 bSTlr">
            <a href="${product.link}" class="sc-jNMdTA sc-d98de5f3-0 ucyLk iTsFZR sc-e3cf1f21-6 gxDWLU">
              Saiba Mais
            </a>
          </span>
        </span>
      `;
      productList.appendChild(productItem);
    });
  }
});