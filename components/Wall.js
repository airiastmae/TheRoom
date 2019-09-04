export default {
        template: `
        <a-entity class="wall">
            <a-plane position="0 1.5 0" width="10" height="4" color="teal" 
            material="src: ./assets/textures/leathertexture.jpg; " >
            <a-entity position="0 0 0.01">
                    <!-- pilt läheb siia -->
                    <slot />
                    <!--  -->
                </a-entity>
        </a-plane>
        </a-entity>
    `
} 