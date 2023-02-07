const getNews = async function () {
  const API_KEY = "f048b1d4c0d946008ae5df5ca954ed23";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`üzgünüm ama birşeyler yolunda gitmedi: ${res.status}`);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {}
};

const renderNews = (news) => {
  const newList = document.getElementById("new-list");
};

window.addEventListener("load", getNews);
