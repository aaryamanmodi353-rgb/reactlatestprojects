function makeRender(word,container){



    //so we used loop for the attributes since writing each attribute makes the code more complex
    //we can write children or not since it is not required here becoz there are no such attribute in props 

    const domWords = document.createElement(word.type);
    domWords.innerHTML = word.children;

    for ( obj in word.props) {

        if(obj === 'children'){
            continue;
        }
        domWords.setAttribute(obj,word.props[obj]);
    
        
        
    }

     container.appendChild(domWords);






    // const domWord = document.createElement(word.type);

    // domWord.innerHTML = word.children;
    // domWord.setAttribute('href',word.props.href);
    // domWord.setAttribute('target',word.props.target);

    // container.appendChild(domWord);
}
const word = {
    type : 'a',

    props:{
        href: 'https://youtube.com',
        target:'_blank'
    },
    children: 'Youtube'

}

 const container = document.querySelector('#root');

 makeRender(word,container);
