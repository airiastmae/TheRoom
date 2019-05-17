export default {
	// x-vasakparem y-ylesalla z-kaugemale l2hemale? koordinaadid
    template: `
        <a-scene shadow="type: pcfsoft">
        <slot name="assets" />
            
        	<a-entity position="0 0 -4" >
        		<slot />
        		
          <a-sky color="#ECECEC"></a-sky>
        	</a-entity>
                    
        </a-scene>
    `
}