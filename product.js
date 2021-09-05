const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

//populate the page

function showProduct(product) {
  console.log(product);
  document.querySelector(".crumbs .gender").textContent = product.agegroup;
  document.querySelector(".crumbs .brand").textContent = product.brandname;
  document.querySelector(".crumbs .productname").textContent =
    product.productdisplayname;
  document.querySelector(".crumbs .category").textContent = product.category;
  document.querySelector(".crumbs .article").textContent = product.articletype;
  //https://kea-alt-del.dk/t7/images/webp/640/1163.webp
  document.querySelector(
    "img.productimg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimg").alt = product.productdisplayname;

  document.querySelector(".info .productname1").textContent =
    product.productdisplayname;
  document.querySelector(".info .productname2").textContent =
    product.productdisplayname;
  document.querySelector(".info .descrip").innerHTML = product.description;
  document.querySelector(".info .pric").textContent = "DDK " + product.price;
  document.querySelector(
    ".cate1"
  ).textContent = `${product.articletype} | ${product.brandname}`;
}
