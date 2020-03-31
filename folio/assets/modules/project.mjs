(function (){
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
        <div class="caption">
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

  class Project extends HTMLElement{
  	constructor(){
			super()
			let shadowRoot = this.attachShadow({
				mode: 'open'
			})

			//true auto-renders in cloneNode
			shadowRoot.appendChild(templateStr.content.cloneNode(true))
  	}

  	/*
			for EVERY attr 
			a get attr() && set attr() are necessary
  	*/
  	get heading(){
  		return this.hasAttribute('heading')
  	}

  	set heading(val){
  		console.log('----set heading(val)----');
  		console.log(val)
  		
  		return val ? 
  			this.setAttribute(val.toString(), val) : 
  			this.removeAttribute(val.toString())
  	}

  	static get observedAttribute(){
  		return ['heading']
  	}

  	_setModuleAttributes(){
  		//loop through attrs
  		for( let i=0; i< this.attributes.length; i++) { 

  			let thisAttr = this.attributes[i]
  			console.log('thisAttr')
  			console.log(thisAttr)
  			console.log('%c // - - - - - //', 'background-color: yellow; color: black;')
  			
  			//if attr is present && has a name
  			if( !this.hasAttribute(thisAttr.name)) { 
  				/*
						//set the attr name on the attributes obj
						this.attributes[newAttrName]
  				*/
  				this.setAttribute(thisAttr.name, this.getAttribute[i]||true); 
  			} 
  		}
  	}

  	//shadow-dom method
  	connectedCallback(){
  		this._setModuleAttributes();

	  	window.customElements.whenDefined('portfolio-project')
	  	.then(() => {
	  		//SETT attr prop
	  		templateStr.innerHTML = templateStr.innerHTML.replace('HEADER', 'tomato') //this.attributes?.heading
	  		console.log('templateStr')
	  		console.log(templateStr)
				window.requestAnimationFrame(() => {console.log('!')});	  		
	  	})
  	}

  	//shadow-dom method
  	disconnectedCallback(){

  	}

  	//custom method
  	_handleNestedComponentsLoaded(){

  	}

  	/*
			htmlElement method
			ONLY handle side-effects that interact with the dom
  	*/
  	attributeChangedCallback(attrName,oldVal,newVal){

  	}  	

  //class-ending
  }

  /*
  	specific naming convention word-word
  	passing the above class 'Project'
  	dispatches / allows api access to callback events (connected && disconnected, above)
  */
  window.customElements.define('portfolio-project', Project)

})()