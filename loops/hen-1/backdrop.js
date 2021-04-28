import {
  Mesh,
  IcosahedronBufferGeometry,
  RawShaderMaterial,
  Color,
  BackSide,
} from '../../third_party/three.module.js'
import { shader as backdropVS } from './backdrop-vs.js'
import { shader as backdropFS } from './backdrop-fs.js'

const backGeometry = new IcosahedronBufferGeometry(10, 4)
const backMaterial = new RawShaderMaterial({
  uniforms: {
    resolution: { value: null },
    brightColor: { value: new Color(0xdfdfdf) },
    darkColor: { value: new Color(0x202020) },
  },
  vertexShader: backdropVS,
  fragmentShader: backdropFS,
  side: BackSide,
  depthWrite: false,
})
const backdrop = new Mesh(backGeometry, backMaterial)

export { backdrop }
