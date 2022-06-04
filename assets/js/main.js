
var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main();



$(document).ready(function(){
	$(".button").click(function(){
		$(".actives").toggleClass("uk-button-danger"); return false;
	});
});


document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport')) return
	document.querySelector('.pic img').src = e.target.dataset.src;
  
	
  })
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport2')) return
	document.querySelector('.pic2 img').src = e.target.dataset.src;
  
	
  })
  
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport3')) return
	document.querySelector('.pic3 img').src = e.target.dataset.src;
  
	
  })
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport4')) return
	document.querySelector('.pic4 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport5')) return
	document.querySelector('.pic5 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport6')) return
	document.querySelector('.pic6 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport7')) return
	document.querySelector('.pic7 img').src = e.target.dataset.src;
  
	
  })


  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport8')) return
	document.querySelector('.pic8 img').src = e.target.dataset.src;
  
	
  })


  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport9')) return
	document.querySelector('.pic9 img').src = e.target.dataset.src;
  
	
  })


  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport10')) return
	document.querySelector('.pic10 img').src = e.target.dataset.src;
  
	
  })


  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport11')) return
	document.querySelector('.pic11 img').src = e.target.dataset.src;
  
	
  })



  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport12')) return
	document.querySelector('.pic12 img').src = e.target.dataset.src;
  
	
  })



  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport13')) return
	document.querySelector('.pic13 img').src = e.target.dataset.src;
  
	
  })

  
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport14')) return
	document.querySelector('.pic14 img').src = e.target.dataset.src;
  
	
  })

  
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport15')) return
	document.querySelector('.pic15 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport16')) return
	document.querySelector('.pic16 img').src = e.target.dataset.src;
  
	
  })


  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport17')) return
	document.querySelector('.pic17 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport18')) return
	document.querySelector('.pic18 img').src = e.target.dataset.src;
  
	
  })
  
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport19')) return
	document.querySelector('.pic19 img').src = e.target.dataset.src;
  
	
  })

  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport20')) return
	document.querySelector('.pic21 img').src = e.target.dataset.src;
  
	
  })
  
  document.body.addEventListener('click', e => {
	if (!e.target.matches('#sport22')) return
	document.querySelector('.pic22 img').src = e.target.dataset.src;
  
	
  })
  

