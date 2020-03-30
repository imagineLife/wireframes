(function (){
	
	console.log('TEST');
	//create element
	let templateStr = document.createElement('template');

	//set template HTML
	templateStr.innerHTML = `
	<link 
		rel="stylesheet" 
		href="./float-grid.css">
	<link 
		rel="stylesheet" 
		href="./respond.css">
	<link 
		rel="stylesheet" 
		href="./index.css">
	<link 
		rel="stylesheet" 
		href="./v2-hover.css">
	<div class="col-3-4 hover-v2">
     <a target="_blank" class="box mastering-bg" href="https://www.ntuclearninghub.com/udemy/course/?id=2421558">
        <div class="caption"">
           <p>HEADER</p>
           <hr />
           <p class="sub-text">An online course I created covering D3v5, interactive mapping, linked visualizations, 3rd party api integration & more.</p>
           <ul>
              <li>D3</li>
              <li>Data Vizualization</li>
              <li>Curriculum Development</li>
              <li>Audio/Video Recording & Editing</li>
           </ul>
        </div>
     </a>
  </div>`

  //hmm!
  class Project extends HTMLElement{
  	constructor(){
			super()
			console.log('Constructor');

			let shadowRoot = this.attachShadow({
				mode: 'open'
			})

			//true auto-renders in cloneNode
			shadowRoot.appendChild(templateStr.content.cloneNode(true))
  	}

  	connectedCallback(){
	  	window.customElements.whenDefined('portfolio-project')
	  	.then(() => {
	  		let attrVal = this.attributes[0].value
	  		templateStr.innerHTML = templateStr.innerHTML.replace('HEADER', attrVal)
	  	})
  	}

  //class-ending
  }

  //specific naming convention word-word
  //passing the above class 'Project'
  window.customElements.define('portfolio-project', Project)

})()