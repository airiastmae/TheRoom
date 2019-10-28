export default {
        template: `
        <a-entity class="ceiling">
            <a-plane rotation="90 0 0" width="10" height="10" material="src: ./assets/textures/TexturesCom_ConcreteLeaking0032_1_S.jpg;"></a-plane>
            <slot />
        </a-entity>
    `
}