export default {
        template: `
        <a-entity class="wall">
            <a-plane position="0 1.5 0" width="10" height="5" color="gray" 
            material="src: ./assets/textures/TexturesCom_ConcreteLeaking0032_1_S.jpg; repeat: 1 1"> >
            <a-entity position="0 0 0.01">
                    <!-- pilt läheb siia -->
                    <slot />
                    <!--  -->
                </a-entity>
        </a-plane>
        </a-entity>
    `
} 