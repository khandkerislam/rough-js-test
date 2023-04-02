import { annotate } from 'https://unpkg.com/rough-notation?module';

window.addEventListener('load', () => {
  const annotations = {
    'highlight-1': { type: 'highlight', color: '#fcc2d2', iterations: 4, multiline: true, animate: true },
    'highlight-2': { type: 'highlight', color: 'white', iterations: 6, multiline: true, animate: true },
  };

  const elements = document.querySelectorAll('.notation');



  elements.forEach((element) => {
    // Create a Rough Notation object for the element
    const draw = annotate(element, annotations['highlight-1']);
    const erase = annotate(element, annotations['highlight-2']);

    let timeout = ()=>setTimeout(()=>{
      erase.hide()
      draw.hide()
    }, 500);

    // Add a mouseover listener to show the annotation
    element.addEventListener('mouseover', () => {
      clearTimeout(timeout)
      draw.show();
    });

    // Add a mouseout listener to hide the annotation
    element.addEventListener('mouseout', () => {
      timeout()
      erase.show()
    });
  })})