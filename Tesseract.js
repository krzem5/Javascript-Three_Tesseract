class Tesseract{
	constructor(x,y,z,w){
		this.pos={x,y,z,w}
		this.model=this.create_model()
	}
	create_model(){
		function face4(l,a,b,c,d){
			l.push(new THREE.Face3(a,b,c))
			l.push(new THREE.Face3(a,c,d))
		}
		var g=new THREE.Geometry()
		g.vertices.push(new THREE.Vector4(-1,-1,-1,-1))
		g.vertices.push(new THREE.Vector4(-1,-1,1,-1))
		g.vertices.push(new THREE.Vector4(-1,1,1,-1))
		g.vertices.push(new THREE.Vector4(-1,1,-1,-1))

		g.vertices.push(new THREE.Vector4(1,-1,-1,-1))
		g.vertices.push(new THREE.Vector4(1,-1,1,-1))
		g.vertices.push(new THREE.Vector4(1,1,1,-1))
		g.vertices.push(new THREE.Vector4(1,1,-1,-1))


		g.vertices.push(new THREE.Vector4(-1,-1,-1,1))
		g.vertices.push(new THREE.Vector4(-1,-1,1,1))
		g.vertices.push(new THREE.Vector4(-1,1,1,1))
		g.vertices.push(new THREE.Vector4(-1,1,-1,1))

		g.vertices.push(new THREE.Vector4(1,-1,-1,1))
		g.vertices.push(new THREE.Vector4(1,-1,1,1))
		g.vertices.push(new THREE.Vector4(1,1,1,1))
		g.vertices.push(new THREE.Vector4(1,1,-1,1))

		// g.faces.push(new THREE.Face3(0,1,5,4))
		// g.faces.push(new THREE.Face3(1,2,6,5))
		// g.faces.push(new THREE.Face3(2,3,7,6))
		// g.faces.push(new THREE.Face3(3,0,4,7))
		for (var i=0;i<2;i++){//4
			face4(g.faces,i*4,i*4+1,i*4+2,i*4+3)
		}
		for (var i=0;i<4;i++){
			face4(g.faces,i,(i+1)%4,(i+5)%4+4,i+4)
		}

		var g=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color:0x12c8f8,opacity:0.5,transparent:true,side:THREE.DoubleSide}))
		scene.add(g)
	}
}