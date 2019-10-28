import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import Rig from "./components/Rig.js";

new Vue({
    el: '#app',
    components: { Layout, Scene, Wall, Floor, Ceiling, Rig },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <a-asset-item id="bulb" src="./assets/models/bulb.obj"></a-asset-item>
            <a-asset-item id="bulb-mtl" src="./assets/models/bulb.mtl"></a-asset-item>

            <a-asset-item id="flubber" src="./assets/models/flubber.obj"></a-asset-item>
            <a-asset-item id="flubber-mtl" src="./assets/models/flubber.mtl"></a-asset-item>

            <a-asset-item id="easel" src="./assets/models/easel.obj"></a-asset-item>
            <a-asset-item id="easel-mtl" src="./assets/models/easel.mtl"></a-asset-item>
          
            </a-assets>
        </template>

        <a-entity scale="0.5 0.5 0.5" position="0 0.5 0" class="flubber" obj-model="obj: #flubber; mtl: #flubber-mtl ">
        
        </a-entity>
        <a-entity class="easel" obj-model="obj: #easel; mtl: #easel-mtl "></a-entity>

        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->
          <a-text id="plakatitekst" value="Koopiamaal 'Affirmation II', akryyl" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="primary" value="Natyyrmort, primaarid+valge akryyl" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
        </Rig>
        
        <Ceiling class="ceiling" position="0 4 0"/>
        <a-entity material="color: white; emissive: yellow; emissiveIntensity: 0.1" class="bulb" 
        position="0 3.42 -0.2" scale="2 2 2" obj-model="obj: #bulb" ></a-entity>
        <a-entity light="type: point; intensity: 0.4; color: #fffffa" position="0 2 0"></a-entity>
        <a-entity light="type: ambient; intensity: 0.2; color: #grey" ></a-entity>
        
        </Ceiling>
        
        <Wall position="0 0 -5">
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis muudavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          <a-plane 
              class="hover" scale="2 3 0"
               material="src: ./assets/images/koopiamaal.jpg"

              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"

          ></a-plane>
          
        </Wall>
      	<Wall position="-5 0 0" rotation="0 90 0">
        <a-plane 
              class="hover" scale="2 3 0"
               material="src: ./assets/images/primaarid.jpg"

              event-set__enter="_event: mouseenter; _target: #primary; visible: true"
              event-set__leave="_event: mouseleave; _target: #primary; visible: false"

          ></a-plane></Wall>
      	<Wall position="0 0 5" rotation="0 180 0"/>
        <Wall position="5 0 0" rotation="0 -90 0"/>
        <Box position="1 1 0" shadow="cast: true" 
        
        />
        <Floor position="0 0.1 0" />
        <a-entity environment="preset: starry; groundColor: black; grid: none; dressing: mushrooms; dressingColor: black; fog: 0.5;"></a-entity>
      </Scene>
    </Layout>
    `,
})