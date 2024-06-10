async function fetchJSON(jsonurl){
  const resp = await fetch(jsonurl);
  const dataarr = await resp.json();
  dataarr.data.forEach((v) => {
    console.log("rvalval"+v);
  });


}
export default function decorate(block) {
  const countries = block.querySelector('a[href$=".json"]');
 
  console.log("heelo"+fetchJSON(countries));
  


}
