var canvas = document.getElementById("renderCanvas");
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
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
        fileName = "project.blend1.glb";
          
        //var manager = new BABYLON.MorphTargetManager();
        
	BABYLON.SceneLoader.ImportMesh("", url, fileName, scene, function (newMeshes, particleSystems, skeletons) {
		var mesh = newMeshes[0];
                var skeleton = skeletons[0];
                camera.setTarget = newMeshes[0];
                var bone = skeleton.bones[0];
                assetsManager.onFinish = function(tasks){
                    console.log(scene.meshes.length);
                };
                /*var scramble = function(data) {
                    for (index = 0; index < data.length; index ++) {
                        data[index] += 0.1 * Math.random();
                    }
                }*/
                //var mesh = newMeshes[0].getChildMeshes()[0];
                //mesh.setParent(null);
                //newMeshes[0].dispose();                
		mesh.position.copyFromFloats(0, 0, -5);
		mesh.scaling.copyFromFloats(1,1,1);
                //mesh.updateMeshPositions(scramble);
                //var manager = new BABYLON.MorphTargetManager();
                //var assets = await Scene.loadAsset();
                mesh.morphTargetManager = manager;
                
                //var target0 = BABYLON.MorphTarget.FromMesh(mesh, "Casi Smile", 0.25);
                //manager.addTarget(target0);
		//var animations = [];
                //var morphTarget = mesh.MorphTargetManager.getTarget('Casi Smile');
                
		//camera.target = mesh;
		//console.log(mesh.MorphTargetManager);
                console.log(mesh.morphTargetManager);
                var casiLips = scene.getMeshByName("Casi Body.001_primitive0");
                var casiInnerMouth = scene.getMeshByName("Casi Body.001_primitive2");
                var primitive = scene.getMeshByName("Primitives.001");
                console.log("The mesh's name is: " + primitive);
                /*var rawData = '';
                var data = JSON.parse(rawData);
                var polyCount = 0;
                for (var meshe of data.meshes)
                {
                    polyCount += meshe.indicies.length / 3;
                    console.log(polyCount);
                };*/
                
                //var assetManager = new BABYLON.AssetsManager();
                //assetManager.onFinish = function(tasks){
                  //  start();
                //};
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
