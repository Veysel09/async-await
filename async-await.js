let isError = false;
const getNews = async function () {
  const API_KEY = "f048b1d4c0d946008ae5df5ca954ed23";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      //   throw new Error(`üzgünüm ama birşeyler yolunda gitmedi: ${res.status}`);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {}
};

const renderNews = (news) => {
  const newList = document.getElementById("news-list");
  if (isError) {
    newList.innerHTML += `
    <h2>Haberler Bulunamadi</h2>
    `;
  }

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item;
    newList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
<div class="card">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
  </div>
</div>
</div>
    `;
  });
};

window.addEventListener("load", getNews);
