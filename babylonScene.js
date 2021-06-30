var canvas = document.getElementById("renderCanvas");
var currentGroup;
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / -2, 1, 3, new BABYLON.Vector3(0, 3, 0), scene);
		camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    var assetsManager = new BABYLON.AssetsManager(scene);
    var gui;
        
        var scales = [];
	var url;
	var fileName;
        
        url = 'https://raw.githubusercontent.com/chris45242/BabylonModel/main/';
        //fileName = "project.blend1.gltf";
        fileName = "scene(1).babylon";  
        
        //var manager = new BABYLON.MorphTargetManager();
        
        /*var casiImportResult = new BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene);
        casiImportResult.meshes[0].name = "metarig";
        
        camera.setTarget = casiImportResult;*/
        
        
        var createButton = function(group, panel) {
	var button = BABYLON.GUI.Button.CreateSimpleButton("button", group.name);
	button.paddingTop = "10px";
	button.width = "120px";
	button.height = "50px";
	button.color = "white";
	button.background = "green";
	button.onPointerDownObservable.add(function() {
		if (currentGroup) {
			currentGroup.stop();
		}
		group.start(true);
		currentGroup = group;
	});
	panel.addControl(button); 
    }
	/*var casiImportResult =*/ BABYLON.SceneLoader.ImportMesh("", url, fileName, scene, function (meshes, animationGroups, particleSystems, skeletons){ 
		var casi = meshes[0].getChildMeshes()[0];
                casi.setParent(null);
                //meshes[0].dispose();
                //casiImportResult
                //casi.scaling.scaleInPlace(0,1);
                
                //scene.stopAllAnimations();
                
                /*animationGroups.forEach(function(animationGroup){
                    animationGroup.play(true);
                });*/
                //scene
                //Enable animation blending for all animations
                scene.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
                scene.animationPropertiesOverride.enableBlending = true;
                scene.animationPropertiesOverride.blendingSpeed = 0.02;
                scene.animationPropertiesOverride.loopMode = 1;
                
                //UI
                var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
                advancedTexture.renderScale = 0.5;
                var UiPanel = new BABYLON.GUI.StackPanel();
                UiPanel.width = "220px";
                UiPanel.fontSize = "14px";
                UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture.addControl(UiPanel);
                
                //Animation Groups
                /*for (var index = 0; index < scene.animationGroups.length; index++) {
			var group = scene.animationGroups[index];
			// Create a button per group
			createButton(group, UiPanel);
		}*/

		//scene.animationGroups[0].start(true); 
                //scene.animationGroups[1].start(true);
                //var keyAction = scene.getAnimationGroupByName("KeyAction");
                var key001Action001 = scene.getAnimationGroupByName("Key.001Action.001");
                scene.stopAllAnimations();
                keyAction.start(true, 1.0, keyAction.from, keyAction.to, false);
                key001Action001.start(true, 1.0, key001Action001.from, key001Action001.to, false);
		//currentGroup = scene.animationGroups[0];

                var casiLips = scene.getMeshByName("Casi Body.001_primitive0");
                var casiInnerMouth = scene.getMeshByName("Casi Body.001_primitive2");
                var primitive = scene.getMeshByName("Primitives.001");
                var casiVisor = scene.getMeshByName("Casi's Visor");
                var meshInfluence = [];
                
                assetsManager.load();
	});
        
    return scene;
};

var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

var scene = createScene();

   engine.runRenderLoop(function () {
	if (scene) {
		scene.render();
	}
});

// Resize
window.addEventListener("resize", function () {
	engine.resize();
});
