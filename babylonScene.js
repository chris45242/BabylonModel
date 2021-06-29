var canvas = document.getElementById("renderCanvas");
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
        fileName = "project.blend1.gltf";
          
        
        //var manager = new BABYLON.MorphTargetManager();
        
        /*var casiImportResult = new BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene);
        casiImportResult.meshes[0].name = "metarig";
        
        camera.setTarget = casiImportResult;*/
	BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene, function (newMeshes, animationGroups, particleSystems, skeletons) {
		var casi = newMeshes[0];       
		
                var casiLips = scene.getMeshByName("Casi Body.001_primitive0");
                var casiInnerMouth = scene.getMeshByName("Casi Body.001_primitive2");
                var primitive = scene.getMeshByName("Primitives.001");
                var casiVisor = scene.getMeshByName("Casi's Visor");
                var meshInfluence = [];
                //scene.beginAnimation()
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
