const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");
//console.log(brandname);
document.querySelector("main>h2").textContent = brandname;

let url = "https://kea-alt-del.dk/t7/api/products?limit=100";

if (brandname) {
  url += "&brandname=" + brandname;
}

console.log(url);

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
/**
        <section class="product">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="cate">T-Shirt | Brand</p>
          <p class="price"><span>Prev.</span>DDK 595,-</p>
          <div class="discounted">
            <p>DDK 595,-</p>
            <p>-34%</p>
          </div>
          <a href="product-p.html">See Product</a>
        </section>
*/
function showProduct(product) {
  //console.log(product);
  //grab the template
  const template = document.querySelector("#productsTemplate").content;
  //clone it
  const copy = template.cloneNode(true);

  // change content
  copy
    .querySelector("a")
    .setAttribute("href", "product-p.html?id=" + product.id);
  copy.querySelector(
    ".cate"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".price").textContent = "DDK " + product.price;

  if (product.soldout) {
    copy.querySelector("section").classList.add("soldOut");
  }
  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(copy);
}
