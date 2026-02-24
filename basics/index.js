// const container = document.querySelector('#mycontainer')

// import { Children } from "react";

// const head2 = document.createElement('div');
// head2.innerText = 'This is created by Javascript';
// head2.innerHTML = '<h3>This is H3 created byJS</h3>'
// head2.className = 'head2';
// head2.id = 'jsHead2'

// // container.appendChild(head2)
// container.append(head2)


const container = document.querySelector('#mycontainer');

const addElement = (element,container)=>{
    const created = document.createElement(element.type)
    // created.setAttribute('width',element.attributes.width);
    // created.setAttribute('height',element.attributes.height);
    // created.setAttribute('id',element.attributes.id);

    for (const each in element.attributes) {
        if(each==='children')continue

        created.setAttribute(each,element.attributes[each])
    }

    container.append(created);

}

const newElement = {
    type: 'h1',
    attributes:{
        width: '20px',
        height: '30px',
        id: 'newH1'
    },
    children:[]
}

addElement(newElement,container)
