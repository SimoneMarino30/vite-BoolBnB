<script>
import { onMounted } from 'vue'

export default {

  name: 'Map',

  props:{
    lat: String,
    lon: String,
  },

  setup(props) {
        let map = null;

        onMounted(() => {
            map = tt.map({
                key: 'G3sSC0bt1YXLOMVWbGpRvxKI1medERrY',
                container: 'map',
                center: [props.lon, props.lat],
                zoom: 12,
                radius: 20000
            });

            const marker = new tt.Marker().setLngLat([props.lon, props.lat]).addTo(map);
            map.addControl(new tt.NavigationControl());

        });

        return { map };
  }
}
</script> 
        

<template>
  <div id='map' class="map-container"></div>
</template> 
 

<style lang="scss" scoped>
.map-container {
  height: 400px;
}
</style>

