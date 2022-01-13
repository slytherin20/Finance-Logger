export class ListTemplates {
    constructor(list) {
        this.list = list;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (position === 'start') {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}
