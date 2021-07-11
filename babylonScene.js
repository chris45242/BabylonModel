var canvas = document.getElementById("renderCanvas");
var currentGroup;
 
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    //var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
    //var currentSkybox = scene.createDefaultSkybox(hdrTexture, true);
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / -2, 1, 3, new BABYLON.Vector3(0, 3, 0), scene);
		camera.attachControl(canvas, true);
                //camera.position = new BABYLON.Vector3(0, 50, -40);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    //var assetsManager = new BABYLON.AssetsManager(scene);
    var gui;
        
        var scales = [];
	var url;
	var fileName;
        
        url = 'https://raw.githubusercontent.com/chris45242/BabylonModel/main/';
        fileName = "project.blend1.glb";
        //fileName = "scene.babylon";  
        
        //var manager = new BABYLON.MorphTargetManager(scene);
        
        /*var casiImportResult = new BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene);
        casiImportResult.meshes[0].name = "metarig";
        
        camera.setTarget = casiImportResult;*/
        
        
       
    
   /* function playAnimation(parameter, animValue, animKeys, group, start){
        
        var paraAnim = new BABYLON.Animation("paraAnim", animValue, 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        paraAnim.setKeys(animKeys);
        if(group !== null){
            group.addTargetedAnimation(paraAnim, parameter);
            if(start){
                group.play(true);
            }
        }
    }*/
   

        /*var model = assetsManager.addMeshTask("model", "", url, fileName);
        assetsManager.onFinish = function(tasks){
            console.log(scene.meshes.length);
            sphere = scene.meshes[0];
        };*/
	//BABYLON.SceneLoader.ImportMesh("", url, fileName, scene, function (meshes, animationGroups, particleSystems, skeletons){
        BABYLON.SceneLoader.Append(url, fileName, scene, function (scene){
                // Create a default arc rotate camera and light.
                scene.createDefaultCameraOrLight(true, true, true);
                scene.activeCamera.alpha += Math.PI;
            
           
		//var casi = meshes[0];
                //casi.setParent(null);
                //casi.morphTargetManager = manager;
                //var skeleton, casi;
                //skeleton = skeletons[0];
                //meshes[0].dispose();
                //casiImportResult
                //casi.scaling.scaleInPlace(0,1);
                
                scene.stopAllAnimations();
                
                /*animationGroups.forEach(function(animationGroup){
                    animationGroup.play(true);
                });*/
                //scene
                //Enable animation blending for all animations
                /*scene.animationPropertiesOverride = new BABYLON.AnimationPropertiesOverride();
                scene.animationPropertiesOverride.enableBlending = true;
                scene.animationPropertiesOverride.blendingSpeed = 0.02;
                scene.animationPropertiesOverride.loopMode = 1;*/
                
                //UI
                /*var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
                advancedTexture.renderScale = 0.5;
                var UiPanel = new BABYLON.GUI.StackPanel();
                UiPanel.width = "220px";
                UiPanel.fontSize = "14px";
                UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture.addControl(UiPanel);*/
                
                //Animation Groups
                /*for (var index = 0; index < scene.animationGroups.length; index++) {
			var group = scene.animationGroups[index];
			// Create a button per group
			createButton(group, UiPanel);
		}*/

		scene.animationGroups[0].start(true); 
                scene.animationGroups[1].start(true);
                //var keyAction = scene.getAnimationGroupByName("KeyAction");
                //var key001Action001 = scene.getAnimationGroupByName("Key.001Action.001");
                
                //scene.stopAllAnimations();
                //keyAction.start(true, 1.0, keyAction.from, keyAction.to, false);
                //key002Action.start(true, 1.0, key002Action.from, key002Action.to, false);
                //key001Action001.start(true, 1.0, key001Action001.from, key001Action001.to, false);
		//currentGroup = scene.animationGroups[0];

                var casiBody = scene.getMeshByName("Casi's Body.001_primitive0");
                //var clonedCasiLips = casiLips.clone("Casi's Body.001_primitive0_clone");
                ///clonedCasiLips.setEnabled(false);
                //clonedCasiLips.updateMeshPositions(scrambleUp);
                /*var casiInnerMouth = scene.getMeshByName("Casi's Body.001_primitive2");
                casiInnerMouth.setEnabled(false);
                var clonedCasiInnerMouth = casiInnerMouth.clone("Casi's Body.001_primitive2_clone");
                clonedCasiInnerMouth.setEnabled(false);
                //clonedCasiInnerMouth.updateMeshPostions(scrambleUp);
                var primitive = scene.getMeshByName("Primitives.001");
                var casiEyes = scene.getMeshByName("Casi's Body.001_primitive1");
                var casiTeeth = scene.getMeshByName("Casi's Teeth");*/
                var casiVisor = scene.getMeshByName("Casi's Visor");
                casiVisor.setEnabled(false);

                let t = 0;
                scene.onBeforeRenderObservable.add(() => {
                //casiBody.morphTargetManager.getTarget(1).influence = Math.abs(Math.sin(t));
                casiBody.morphTargetManager.getTarget(6).influence = Math.abs(Math.sin(t));
                //casiBody.morphTargetManager.getTarget(0).influence = Math.abs(Math.cos(t));
                t += 0.07;
            });

                
               
	});
    //assetsManager.load();
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
/*window.addEventListener("resize", function () {
	engine.resize();
});*/
