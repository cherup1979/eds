import { fetchPlaceholders,getMetadata } from '/scripts/aem.js';

async function getButtonPlaceholders(blk){
  const locale = getMetadata("locale");

 const placeholders = await fetchPlaceholders(locale);
 const { addCart, checkOut } = placeholders;

 const divEl = document.createElement("div");
 let ctaCartbtn = document.createElement("button");
 ctaCartbtn.appendChild(document.createTextNode(addCart))
 divEl.appendChild(ctaCartbtn);



 let checkoutBtn = document.createElement("button");
 checkoutBtn.appendChild(document.createTextNode(checkOut))
 divEl.appendChild(checkoutBtn);

 blk.replaceWith(divEl);

}

export default function decorate(block) {



getButtonPlaceholders(block);


}
