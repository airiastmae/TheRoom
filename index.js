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

        <a-entity scale="0.5 0.5 0.5" position="0 0.5 0" material="transparent: true; metalness: 1" class="flubber" obj-model="obj: #flubber; mtl: #flubber-mtl ">
        
        </a-entity>

        
        <!--<a-entity scale="5 5 5" class="easel" obj-model="obj: #easel; mtl: #easel-mtl "></a-entity> see ei t55ta-->
        

        <Rig>
          <!-- Rig-i sisse võib panna asju, mis peaks liikuma koos kaameraga, märksõna HUD -->
          <!-- Hetkel on siin tekstid, mis muutuvad nähtavaks, kui vaatad õige asja peale -->
          <a-text id="plakatitekst" value="Koopiamaal 'Affirmation II', akryyl" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="primary" value="Natyyrmort, primaarid+valge akryyl" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="sienna" value="Natyyrmort, ultramariin+burnt sienna" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="punane" value="Natyyrmort, monokroom punase akryyliga" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="sinine" value="Natyyrmort, monokroom sinise akryyliga" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="visand" value="Visand magavast vennast, akvarell" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="kuiv" value="Monokroom sinisega, kuiv akvarell" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="m2rg" value="Visand lilledest, m2rg akvarell" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="sega" value="Kompositsioon pea ja vaasiga, akvarell segatehnikas" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="pott" value="Visand lillepotist, pliiats" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="ymar" value="Joonistus ymaratest vormidest, pliiats" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="portr" value="Autoportree, visand pliiatsiga" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="vilt" value="Autoportree edasiarendus vildikaga" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="ini" value="Initsiaalid, tintenpen" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="tint" value="Joonistus, tintenpen" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="kuju" value="Vormi6petus, savifiguur" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="tont" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="apr" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="jim" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="semu" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="flint" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="hunt" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="reko" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="v2lk" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          <a-text id="stef" value="V2rvi6petus, digimaal" width="1" align="center" color="#FFF" visible="false" position="0 -0.05 -0.5" />
          
        </Rig>
        
        <Ceiling class="ceiling" position="0 4 4.85"/>
        <a-entity material="color: white; emissive: yellow; emissiveIntensity: 0.1" class="bulb" 
        position="0 3.42 -0.2" scale="2 2 2" obj-model="obj: #bulb" ></a-entity>
        <a-entity light="type: point; intensity: 0.4; color: #fffffa" position="0 2 0"></a-entity>
        <a-entity light="type: ambient; intensity: 0.2; color: #grey" ></a-entity>
        
        </Ceiling>
        
        <Wall position="0 0 -5">
          <!-- seina komponenti on muudetud nii, et tema 'sisse' saab panna asju, mis peaks ta peal rippuma, vaikimisi täpselt keskel -->
          <!-- allpoolse a-plane-i küljes on evendid e. sündmused, mis muudavad selle peale vaadates õige teksti nähtavaks (ja ka nähtamatuks) -->
          <a-plane 
              class="hover" position="0 0 0" scale="2 3 0"
               material="src: ./assets/images/koopiamaal.jpg"

              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="2.5 0 0" scale="2 2 0"
               material="src: ./assets/images/primaarid.jpg"

              event-set__enter="_event: mouseenter; _target: #primary; visible: true"
              event-set__leave="_event: mouseleave; _target: #primary; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-2.5 0 0" scale="2 3 0"
               material="src: ./assets/images/ultramariinburntsienna.jpg"

              event-set__enter="_event: mouseenter; _target: #sienna; visible: true"
              event-set__leave="_event: mouseleave; _target: #sienna; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-5 0 0" scale="2 3 0"
               material="src: ./assets/images/punasemonokroom.jpg"

              event-set__enter="_event: mouseenter; _target: #punane; visible: true"
              event-set__leave="_event: mouseleave; _target: #punane; visible: false"

          ></a-plane>
          <!--<a-plane 
              class="hover" position="-7.5 0 0" scale="2 3 0"
               material="src: ./assets/images/sinisemonokroom.jpg"

              event-set__enter="_event: mouseenter; _target: #sinine; visible: true"
              event-set__leave="_event: mouseleave; _target: #sinine; visible: false"

          ></a-plane>-->
          <a-plane 
              class="hover" position="5 0 0" scale="2 1.5 0"
               material="src: ./assets/images/visand.jpg"

              event-set__enter="_event: mouseenter; _target: #visand; visible: true"
              event-set__leave="_event: mouseleave; _target: #visand; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="7.5 0 0" scale="2 3 0"
               material="src: ./assets/images/kuivmonokroom.jpg"

              event-set__enter="_event: mouseenter; _target: #kuiv; visible: true"
              event-set__leave="_event: mouseleave; _target: #kuiv; visible: false"

          ></a-plane>
          
        </Wall>
      	<Wall position="-10 0 4.985" rotation="0 90 0">
        <a-plane 
              class="hover" position="8 0 0" scale="2 2.5 0"
               material="src: ./assets/images/initsiaal.jpg"

              event-set__enter="_event: mouseenter; _target: #ini; visible: true"
              event-set__leave="_event: mouseleave; _target: #ini; visible: false"

          ></a-plane> 
          <a-plane 
              class="hover" position="5 0 0" scale="3 2 0"
               material="src: ./assets/images/tintenpen.jpg"

              event-set__enter="_event: mouseenter; _target: #tint; visible: true"
              event-set__leave="_event: mouseleave; _target: #tint; visible: false"

          ></a-plane> 
          <a-plane 
              class="hover" position="1.5 0 0" scale="3 2 0"
               material="src: ./assets/images/kuju.jpg"

              event-set__enter="_event: mouseenter; _target: #kuju; visible: true"
              event-set__leave="_event: mouseleave; _target: #kuju; visible: false"

          ></a-plane> 
          <a-plane 
              class="hover" position="-1.5 0 0" scale="2.5 2 0"
               material="src: ./assets/images/1_halliskaala_tont.jpg"

              event-set__enter="_event: mouseenter; _target: #tont; visible: true"
              event-set__leave="_event: mouseleave; _target: #tont; visible: false"

          ></a-plane> 
          <a-plane 
              class="hover" position="-4 0 0" scale="2 3 0"
               material="src: ./assets/images/2_monokromaatiline_aprikoos.jpg"

              event-set__enter="_event: mouseenter; _target: #apr; visible: true"
              event-set__leave="_event: mouseleave; _target: #apr; visible: false"

          ></a-plane> 
          <a-plane 
              class="hover" position="-6.5 0 0" scale="2 3 0"
               material="src: ./assets/images/3_analoog_jimmy.jpg"

              event-set__enter="_event: mouseenter; _target: #jim; visible: true"
              event-set__leave="_event: mouseleave; _target: #jim; visible: false"

          ></a-plane> 
        </Wall>

      	<Wall position="0 0 14.6" rotation="0 180 0">
        <a-plane 
              class="hover" position="8 0 0" scale="3 2 0"
               material="src: ./assets/images/4_kolmikharmoonia_semu.jpg"

              event-set__enter="_event: mouseenter; _target: #semu; visible: true"
              event-set__leave="_event: mouseleave; _target: #semu; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="5 0 0" scale="2 3 0"
               material="src: ./assets/images/5_vastandharmoonia_flint.jpg"

              event-set__enter="_event: mouseenter; _target: #flint; visible: true"
              event-set__leave="_event: mouseleave; _target: #flint; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="2 0 0" scale="3 2 0"
               material="src: ./assets/images/6_jagunevadvastandid_hundu.jpg"

              event-set__enter="_event: mouseenter; _target: #hunt; visible: true"
              event-set__leave="_event: mouseleave; _target: #hunt; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-1.5 0 0" scale="3 2 0"
               material="src: ./assets/images/7_nelikharmoonia_rambo.jpg"

              event-set__enter="_event: mouseenter; _target: #rambo; visible: true"
              event-set__leave="_event: mouseleave; _target: #rambo; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-4.5 0 0" scale="2 3 0"
               material="src: ./assets/images/8_temperatuurikontrast_reko.jpg"

              event-set__enter="_event: mouseenter; _target: #reko; visible: true"
              event-set__leave="_event: mouseleave; _target: #reko; visible: false"

          ></a-plane>

          <a-plane 
              class="hover" position="-7 0 0" scale="2 3 0"
               material="src: ./assets/images/9_kromaatilinekontrast_v2lk.jpg"

              event-set__enter="_event: mouseenter; _target: #v2lk; visible: true"
              event-set__leave="_event: mouseleave; _target: #v2lk; visible: false"

          ></a-plane>
          <!--<a-plane 
              class="hover" position="-9 0 0" scale="2 3 0"
               material="src: ./assets/images/10_heletumedusekontrast_steffi.jpg"

              event-set__enter="_event: mouseenter; _target: #stef; visible: true"
              event-set__leave="_event: mouseleave; _target: #stef; visible: false"

          ></a-plane>-->
        </Wall>

        <Wall position="10 0 4.7" rotation="0 -90 0">
        <a-plane 
              class="hover" position="-7.5 0 0" scale="2 3 0"
               material="src: ./assets/images/m2rgtehnika.jpg"

              event-set__enter="_event: mouseenter; _target: #m2rg; visible: true"
              event-set__leave="_event: mouseleave; _target: #m2rg; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-5 0 0" scale="2 3 0"
               material="src: ./assets/images/segatehnika.jpg"

              event-set__enter="_event: mouseenter; _target: #sega; visible: true"
              event-set__leave="_event: mouseleave; _target: #sega; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="-2 0 0" scale="2 3 0"
               material="src: ./assets/images/potilill.jpg"

              event-set__enter="_event: mouseenter; _target: #pott; visible: true"
              event-set__leave="_event: mouseleave; _target: #pott; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="1 0 0" scale="3 2 0"
               material="src: ./assets/images/ümaradvormid.jpg"

              event-set__enter="_event: mouseenter; _target: #ymar; visible: true"
              event-set__leave="_event: mouseleave; _target: #ymar; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="4 0 0" scale="2 3 0"
               material="src: ./assets/images/pliiats.jpg"

              event-set__enter="_event: mouseenter; _target: #portr; visible: true"
              event-set__leave="_event: mouseleave; _target: #portr; visible: false"

          ></a-plane>
          <a-plane 
              class="hover" position="7 0 0" scale="2 3 0"
               material="src: ./assets/images/10_heletumedusekontrast_steffi.jpg"

              event-set__enter="_event: mouseenter; _target: #stef; visible: true"
              event-set__leave="_event: mouseleave; _target: #stef; visible: false"

          ></a-plane>
        </Wall>
        <Box position="1 1 0" shadow="cast: true" 
        
        />
        <Floor position="0 0.01 0" />
        <a-entity environment="preset: starry; groundColor: black; grid: none; dressing: mushrooms; dressingColor: black; dressingVariance: 3 7 15; fog: 0.5;"></a-entity>
      </Scene>
    </Layout>
    `,
})