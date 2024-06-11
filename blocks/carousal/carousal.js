export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`carousal-${cols.length}-cols`);

  const rowslength = [...block.children].length;
  // setup image columns
  [...block.children].forEach((row,r) => {

    if (r==0){
 
      const nextbtn = document.createElement("button");
      nextbtn.append(document.createTextNode(row.textContent))
      nextbtn.classList.add("someclass");
      row.replaceWith(nextbtn);
    
    
    }else if (r==rowslength-1){
      console.log(row.length-1);
       
      const prevbtn = document.createElement("button");
      prevbtn.append(document.createTextNode(row.textContent))
      row.replaceWith(prevbtn);
    }else{

        [...row.children].forEach((col) => {
          col
          const pic = col.querySelector('picture');
          if (pic) {
            const picWrapper = pic.closest('div');
            if (picWrapper && picWrapper.children.length === 1) {
              // picture is only content in column
              picWrapper.classList.add('columns-img-col');
            }
          }
        });

      }
  });
}
