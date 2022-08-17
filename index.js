
      document.addEventListener("DOMContentLoaded", () => {
        fetch(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3e3630bd009a40ef9a36da5dfee895de"
        )
          .then((resp) => resp.json())
          .then((data) => {
            data.articles.forEach((element) => {
              // console.log(element);
              var card = <div class="card border-dark">
        <div class="card-header text-white">
         <strong>Author:</strong><span class="author"><strong >${element.source.name}</strong></span>
        </div>
        <img class="card-img-top" src="${element.urlToImage}" alt=""/>
        <div class="card-body">
          <h5 class="card-title title">${element.title}</h5>
          <p class="card-text content">${element.description}</p>
          <p class="card-text mt-3 content">${element.content}</p>
          <a href="${element.url}" class="btn btn-primary">Source</a>
        </div>
        <div class="card-footer">
            <p class="text-center date">${element.publishedAt}</p>
        </div>
    </div>;
              document.querySelector(".news").innerHTML += card;
            });
          })
          .catch((err) => console.log(err));
      });

      const click = document.querySelector("#click");
      var country = document.querySelector("#country");
      var category = document.querySelector("#category");
      click.addEventListener("click", () => {
        document.querySelector(".news").innerHTML = "";
        fetch(`
https://newsapi.org/v2/top-headlines?country=${country.value}&category=${category.value}&apiKey=${API_KEY}`)
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            data.articles.forEach((element) => {
              console.log(element);
              var card = `<div class="card border-dark">
                  <div class="card-header text-white">
                   <strong>Author:</strong><span class="author"><strong >${element.source.name}</strong></span>
                  </div>
                  <img class="card-img-top" src="${element.urlToImage}" alt="">
                  <div class="card-body">
                    <h5 class="card-title title">${element.title}</h5>
                    <p class="card-text content">${element.description}</p>
                    <p class="card-text mt-3 content">${element.content}</p>
                    <a href="${element.url}" class="btn btn-primary">Source</a>
                  </div>
                  <div class="card-footer">
                      <p class="text-center date">${element.publishedAt}</p>
                  </div>
              </div>`;
              document.querySelector(".news").innerHTML += card;
            });
          })
          .catch((err) => console.log(err));
      });
    