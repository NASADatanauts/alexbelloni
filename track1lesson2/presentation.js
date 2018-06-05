
	function getHtmlDialog(idModal, title, image){
		var html = `
		<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#`+idModal+`">
		workflow
		</button>

		<div class="modal fade" id="`+idModal+`" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">`+title+`</h4>
			</div>
			<div class="modal-body">
				<img src='images/`+image+`'>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
			</div>
		</div>
		</div>		
		`
		return html;			

	} 

	function getHtmlStep(imageName, htmlInstructions, figcaption){
		var html = '';
		if(imageName){
			html =
			`
			<article class='row dn-text-block step'>
					<figure class='col col-sm-6'>
						<img class='img-responsive' src='images/`+ imageName +`'>
						<figcaption>`+ (figcaption || '') +`</figcaption>
					</figure>
					<div class='col col-sm-6 instructions'>

						`+ htmlInstructions +`
					</div>
			</article>
			`;
		}
		else{
			html =
			`
			<article class='row dn-text-block step'>
					<div class='col col-sm-12 instructions'>

						`+ htmlInstructions +`
					</div>
			</article>
			`;
		}
		return html;
	}

	function addMenu(step){
		var html = 
		`
			<a class='btn`+ (step === 'a'?' dn-btn-current':'') +`' href='index.html'>a.Export a Dataset</a>
			<a class='btn`+ (step === 'b'?' dn-btn-current':'') +`' href='makeanapi_2.html'>b.Create a Firebase project</a>
			<a class='btn`+ (step === 'c'?' dn-btn-current':'') +`' href='makeanapi_3.html'>c.Import the Json File</a>
			<a class='btn`+ (step === 'd'?' dn-btn-current':'') +`' href='makeanapi_4.html'>d.Access your API</a>
		`;
		$('#menu').append(html);			
	}	

    function saveProjectId(){
        var text = $('#txtProjectId').val();
        localStorage.setItem('projectId', text);
		$('#txtProjectId').val('');
		$('#lblProjectId').text('Thank you! Here is '+text);
    }

    function loadProjectId(){
        return localStorage.getItem('projectId');
    }    