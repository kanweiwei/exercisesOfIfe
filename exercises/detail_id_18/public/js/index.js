var THREE = require('three-js');

function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x666666);

    //scene 场景
    var scene = new THREE.Scene();

    //camera 照相机
    var camera = new THREE.OrthographicCamera(-8, 8, 6, -6, 1, 10);
    camera.position.set(4, 4, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    //cube 立方体
    var cube = new THREE.Mesh(new THREE.CubeGeometry(6, 3, 3),
        new THREE.MeshLambertMaterial({
            color: 0xcccccc,
        })
    );
    scene.add(cube);

    //圆环
    var torus = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 16, 100), new THREE.MeshLambertMaterial({
        color: 0xcccccc
    }));
    torus.position.set(-1.5, -1.5, 1.5);
    scene.add(torus);

    var torus1 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.2, 16, 100), new THREE.MeshLambertMaterial({
        color: 0xcccccc
    }));
    torus1.position.set(1.5, -1.5, 1.5);
    scene.add(torus1);

    //light 光源
    var light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(4, 5, 3);
    scene.add(light);

    renderer.render(scene, camera);

}
