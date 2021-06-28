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
        fileName = "project.blend1.glb";
          
        
        //var manager = new BABYLON.MorphTargetManager();
        
        /*var casiImportResult = new BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene);
        casiImportResult.meshes[0].name = "metarig";
        
        camera.setTarget = casiImportResult;*/
	BABYLON.SceneLoader.ImportMeshAsync("", url, fileName, scene, function (newMeshes, animationGroups, particleSystems, skeletons) {
		var casi = newMeshes[0];
                var skeleton = skeletons[0];
                //var mesh = newMeshes[1];
                
               
                //mesh.setEnabled(true);
                
                /*var mesh = casiImportResult;
                mesh.setEnabled(true);
                
                mesh.position.copyFromFloats(0, 0, 5);
		mesh.scaling.copyFromFloats(1,1,1);
                camera.setTarget(mesh);*/
                //mesh.rotation = new BABYLON.Vector3(3, 4, 3);
                
                
                /*var casi = casiImportResult.newMeshes[0].getChildren()[0];
                casi.setParent(null);
                casiImportResult.newMeshes[0].dispose();*/
                //var skeleton = skeletons[0];
                
                
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
                //var loaderMat = new BABYLON.NodeMaterial("loaderMat", scene, { emitComments: false });
                //var casiMouth = [scene.getMeshByName("Casi Body.001_primitive0"), scene.getMeshByName("Casi Body.001_primitive2")];
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
                //console.log(eyeBlinkAnim.animatables());
                //var eyeBlinkAnim = scene.getAnimationGroupByName("KeyAction").getTarget("2");
                
                eyebrowBlinkAnim.start(true);
                eyeBlinkAnim.start(true);
                var morphAnimations = {
                    
                };
                scene.animationGroups[0].start(true);
                scene.animationGroups[1].start(true);
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
                //var target0 = new BABYLON.MorphTarget.FromMesh(Casi's)
                
                /*var oldgui = document.querySelector("#dataGUI");
                if(oldgui != null){
                    oldgui.remove();
                }
                
                 var options = {
                    title:"Bone Scaling!", 
                    };

                gui = new dat.GUI();	
                gui.domElement.style.marginTop = "100px";
                gui.domElement.id = "datGUI";
                gui.add(options, 'title');
                
                gui.add(options, "influence0", 0, 1).onChange(function(value){
                            target0.influence = value;
                
                gui.add(options, "influence1", 0, 1).onChange(function(value) {
                            target1.influence = value;
                });

                gui.add(options, "influence2", 0, 1).onChange(function(value) {
                            target2.influence = value;
                });  

                gui.add(options, "influence3", 0, 1).onChange(function(value) {
                            target3.influence = value;
                });*/        

                
                //scene.beginAnimation("Casi Body.001_primitive0", 0, 1, true);
                //});
                
                
                //var keyFrames = [];
                
                //keyFrames.push({});
                
                //assetsManager.load();
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
