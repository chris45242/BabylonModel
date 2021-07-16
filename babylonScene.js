var canvas = document.getElementById("renderCanvas");
var currentGroup;
 
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    //var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
    //var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("Cyber_Background.jpg", scene);
    //var currentSkybox = scene.createDefaultSkybox(hdrTexture, true);
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.ArcRotateCamera("camera1", Math.PI / -2, 1, 3, new BABYLON.Vector3(0, 3, 0), scene);
		camera.attachControl(canvas, true);
                //camera.position = new BABYLON.Vector3(0, 50, -40);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
    var gui;
        
        var scales = [];
	var url;
	var fileName;
        
        url = 'https://raw.githubusercontent.com/chris45242/BabylonModel/main/';
        fileName = "project.blend1.glb";
   
   
        BABYLON.SceneLoader.Append(url, fileName, scene, function (scene){
                // Create a default arc rotate camera and light.
                scene.createDefaultCameraOrLight(true, true, true);
                scene.activeCamera.alpha += Math.PI;
                
                scene.stopAllAnimations();

		scene.animationGroups[0].start(true); 
                scene.animationGroups[1].start(true);

                var casiBody = scene.getMeshByName("Casi's Body.001_primitive0");
                var casiInnerMouth = scene.getMeshByName("Casi's Body.001_primitive2");
                /*casiInnerMouth.setEnabled(false);
                var casiEyes = scene.getMeshByName("Casi's Body.001_primitive1");
                var casiTeeth = scene.getMeshByName("Casi's Teeth");*/
                var primitive = scene.getMeshByName("Primitives.001");
                var casiVisor = scene.getMeshByName("Casi's Visor");
                casiVisor.setEnabled(true);
                
                
                //Set up Morph Targets for Casi before the screen is done loading.
                let t = 0;
                scene.onBeforeRenderObservable.add(() => {
                //casiBody.morphTargetManager.getTarget(1).influence = Math.abs(Math.sin(t));
                primitive.morphTargetManager.getTarget(2).influence = Math.abs(Math.sin(t));
                casiBody.morphTargetManager.getTarget(6).influence = Math.abs(Math.sin(t));
                casiInnerMouth.morphTargetManager.getTarget(6).influence = Math.abs(Math.sin(t));
                //casiBody.morphTargetManager.getTarget(0).influence = Math.abs(Math.cos(t));
                t += 0.07;
            });
    
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
/*window.addEventListener("resize", function () {
	engine.resize();
});*/
