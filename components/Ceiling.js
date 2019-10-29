export default {
        template: `
        <a-entity class="ceiling">
            <a-plane rotation="90 0 0" width="20" height="20" material="src: ./assets/textures/TexturesCom_ConcreteLeaking0032_1_S.jpg;"></a-plane>
            <slot />
        </a-entity>
    `
}