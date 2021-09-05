//fetch data
fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(gotData);
function gotData(data) {
  //console.log(data);
  data.forEach(showBrand);
}
function showBrand(brand) {
  //console.log(brand.brandname);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = brand.brandname;
  copy.querySelector("a").href = `product-l.html?brandname=${brand.brandname}`;

  const topParent = document.querySelector("#a");
  const elemParent = topParent.querySelector("ul");
  elemParent.appendChild(copy);
}
//loop through

//grab clone change grab append
