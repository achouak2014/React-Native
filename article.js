//afficher l'article 
let article = [
    {
        title: "Mon article",
        author: "lolo",
        date: "27/08/2021"
    },
    {
        title: "Mon article",
        author: "julien",
        date: "28/08/2021"
    },
    {
        title: "Mon article",
        author: "issa",
        date: "29/08/2021"
    }
];
function defineAttributes(elm, attr) {
    for (let a in attr) {
        elm.setAttribute(a, attr[a]);
    }
}


function defineChildren(parent, children) {
    if (!children) return;
    for (let child of children) {
        parent.append(child);
    }
}

function createTag(tagname, attr, children) {
    let tag = document.createElement(tagname);
    defineAttributes(tag, attr);
    defineChildren(tag, children);
    return tag;
}

function afficher(article){
    let cont = " ";
    for(let i= 0 ; i< article.lenght ; i++){
        
        cont +=
    createTag("div",
        { class: "wrapper" },
        [
            createTag("h2", {}, article[i].title),
            createTag("span", {}, article[i].author),
            createTag("span", {}, article[i].date)
        ]);
    }
    return cont ; 
}
 afficher(article);


let parent_b = document.getElementById("content");
parent_b.append(afficher());

/*function afficher(article){
  let cont="" ;
   for(art in article){
       cont += console.log(article);
    }
}
afficher(article); */