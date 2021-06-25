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
        fileName = "project.blend1.gltf";
          
        var manager = new BABYLON.MorphTargetManager();
        
	BABYLON.SceneLoader.ImportMesh("", url, fileName, scene, function (newMeshes, animationGroups, particleSystems, skeletons) {
		var mesh = newMeshes[0];
                mesh.setEnabled(true);
                //var skeleton = skeletons[0];
                camera.setTarget = newMeshes[0];
                
                //var bone = skeleton.bones[0];
                //console.log(skeleton.bones[2]);
                //assetsManager.onFinish = function(tasks){
                  //  console.log(scene.meshes.length);
                //};
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
                //mesh.morphTargetManager = manager;
                
                
		//camera.target = mesh;
		//console.log(mesh.MorphTargetManager);
                //console.log(casiLips.morphTargetManager);
                var casiLips = scene.getMeshByName("Casi Body.001_primitive0");
                var casiInnerMouth = scene.getMeshByName("Casi Body.001_primitive2");
                var primitive = scene.getMeshByName("Primitives.001");
                var casiVisor = scene.getMeshByName("Casi's Visor");
                var loaderMat = new BABYLON.NodeMaterial("loaderMat", scene, { emitComments: false });
                var casiMouth = [scene.getMeshByName("Casi Body.001_primitive0"), scene.getMeshByName("Casi Body.001_primitive2")];
                var meshInfluence = [];
                //console.log(casiLips.morphTargetManager);
                /*meshInfluence.push(casiLips.morphTargetManager.getTarget(11));
                meshInfluence.push(casiLips.morphTargetManager.getTarget(12));
                meshInfluence.push(casiLips.morphTargetManager.getTarget(13));
                meshInfluence.push(casiLips.morphTargetManager.getTarget(14));
                meshInfluence.push(casiLips.morphTargetManager.getTarget(15));
                meshInfluence.push(casiLips.morphTargetManager.getTarget(16));*/
                
                /*casiMouth.forEach(mesh => {
                        mesh.material = loaderMat
                                if(mesh.morphTargetManager != null){
                                    meshInfluence.push(mesh.morphTargetManager.getTarget(0));
                                }
                           });*/
                casiVisor.visibility = -1;
                scene.stopAllAnimations();
                var eyebrowBlinkAnim = scene.getAnimationGroupByName('Key.001Action.001');
                var eyeBlinkAnim = scene.getAnimationGroupByName('KeyAction');
                eyebrowBlinkAnim.start(true);
                eyeBlinkAnim.start(true);
                var morphAnimations = {
                    
                };
                //scene.animationGroups[0].start(true);
                //scene.animationGroups[1].start(true);
                //var target0 = BABYLON.MorphTarget.FromMesh(casiLips, "Casi Body.001_primitive0", 1.00);
                //manager.addTarget(target0);
                console.log("The mesh's name is: " + casiLips.morphTargetManager);
                //scene.morphTargetManager.getTarget("Casi Body.001_primitive0").getPositions();
                //var myInfluence = mesh.morphTargetManager.getTarget(primitive);
                //var finalLip = casiLips + sum('Casi Body.001_primitive0' - casiLips) * 1.0000;
                /*for (i = 0; i < animationGroups.length; i++) {
                    animationGroups[i].play(true);
                }*/
                
               
                //var target1 = BABYLON.MorphTarget.FromMesh(casiLips, "Blink Both Eyes", 1.0000);
                //manager.addTarget(target1);
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
                /*var oldgui = document.querySelector("#dataGUI");
                if(oldgui != null){
                    oldgui.remove();
                }
                
                var gui = new dat.GUI();
                gui.domElement.style.marginTop = "100px";
                gui.domElement.id = "#datGUI";
                var options = {
                    influence0: 0.25,
                    influence1: 0.25,
                    influence2: 0.25,
                    influence3: 0.25
                };
                
                gui.add(options, "influence0", 0, 1).onChange(function(value){
                    target0.influence = value;
                
                
                //scene.beginAnimation("Casi Body.001_primitive0", 0, 1, true);
                });*/
                
                
                //var keyFrames = [];
                
                //keyFrames.push({});
                
                assetsManager.load();
	});
        //Meshes -> extras -> targetName
        
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
