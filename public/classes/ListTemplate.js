// 1. Register a list container (ul) in the constructor
// 2. create and render method to render a new li to the container 
//         --- acceptd arguments: invoice or payment , a heading position 
//         -- create the html template (li,h4,p)
//         -- add the li template to the start/end of the list
export class ListTemplate {
    //STEP1
    constructor(container) {
        this.container = container;
    }
    //STEP 2
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
