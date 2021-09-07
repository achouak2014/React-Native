

			 /*
					~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
					COURS : Créer des balises avec Javascript
					~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				*/

			 // --------------------------------------------------------------------------------
			 
			 /*
					####################
				  # > VERSION 1 :
				  # une approche naïve
					####################
				*/
			 
			 /* 
					Les méthodes pour manipuler le DOM
					==================================

					On peut manipuler le DOM en utilisant les fonctions suivantes :

					- document.getElementById("content")
					  Permet d'accéder à un élément du DOM via son ID

					- document.createElement("div")
					  Permet de créer un nouvelle balise (aussi appellée "Element")

					- Element.setAttribute("class", "link")
					  Permet d'ajouter un attribut à une balise

					- Element.innerText 
					  Permet d'ajouter du texte à l'intérieur d'une balise

					- Element.append(element)
					  Permet d'ajouter une balise enfant à une balise
				*/

			 /*
					Exemple: 
					--------
					On veut ajouter l'arborescence suivante au DOM :
					<div class="wrapper">
					  <img class="image" src="http://url.com/image.jpg" alt="ours">
					</div>
				*/

			 // On crée d'abord la balise "div" et on lui ajoute l'attribut class="wrapper"
			 let wrapper_a = document.createElement("div");
			 wrapper_a.setAttribute("class", "wrapper");

			 // On crée ensuite la balise "img" avec tous ses attributs
			 let image_a = document.createElement("img");
			 image_a.setAttribute("class", "image");
			 image_a.setAttribute("src", "");
			 image_a.setAttribute("alt", "ours");

			 // On ajoute la balise image en enfant de la balise wrapper
			 wrapper_a.append(image_a);

			 // On récupère enfin la balise #content et on lui ajoute la balise wrapper en enfant
			 let parent_a = document.getElementById("content");
			 parent_a.append(wrapper_a);

			 // PROBLÈME : Il y a beaucoup de répétitions


			 // --------------------------------------------------------------------------------

			 /* ####################
				  # > VERSION 2 :
				  # en utilisant des fonctions
				  ####################
				*/

			 /*
					Découper en fonctions
					=====================

					On peut résoudre le problème de répétition en découpant notre code 
					en fonctions.
				*/

			 // DÉCLARATION DES FONCTIONS :
			 
			 /**
			  * Ajoute dynamiquement des attributs à une balise
				*
				* @param {elm}  La balise à laquelle on souhaite ajouter des attributs
				* @param {attr} Un objet contenant les attributs à ajouter
				**/

			 function defineAttributes( elm, attr ) {
					 for(let a in attr) {
							 elm.setAttribute(a, attr[a]);
					 }
			 }

			 /**
			  * Ajoute plusieurs enfants à une balise
				*
				* @param {parent}  La balise à laquelle on souhaite ajouter des enfants
				* @param {chidren} Un tableau de balises à ajouter au parent
				**/

			 function defineChildren( parent, children ) {
					 if(!children) return;
					 for(let child of children) {
							 parent.append(child);
					 }
			 }
			 
			 /**
			  * Crée une nouvelle balise
				*
				* @param {tagname} La type de balise qu'on souhaite créer
				* @param {attr}    Un objet contenant les attributs à ajouter
				* @param {chidren} Un tableau de balises à ajouter au parent
				* @return {tag}    La balise qu'on a créé
				**/

			 function createTag( tagname, attr, children ) {
					 let tag = document.createElement(tagname);
					 defineAttributes(tag, attr);
					 defineChildren(tag, children);
					 return tag;
			 }

			 // USAGE DES FONCTIONS :

			 let wrapper_b =
					 createTag("div", {class: "wrapper"}, [
							 createTag("img", {
									 class: "image",
									 src: "",
									 alt: "ours"
							 })
					 ]);
			 
			 let parent_b = document.getElementById("content");
			 parent_b.append(wrapper_b);

			