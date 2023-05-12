<script>
import { onMounted, ref } from 'vue'

export default {

  name: 'Map',

  setup() {

    const mapRef = ref(null);

    onMounted(() => {


      const tt = window.tt;

      var map = tt.map({

        key: 'G3sSC0bt1YXLOMVWbGpRvxKI1medERrY',

        container: mapRef.value,

        style: 'tomtom://vector/1/basic-main',

      });

      map.addControl(new tt.FullscreenControl());

      map.addControl(new tt.NavigationControl());

      // PUT MARKER
      function addMarker(map) {

        const tt = window.tt;

        var location = [12.484137, 41.894939];

        var popupOffset = 25;


        var marker = new tt.Marker().setLngLat(location).addTo(map);

        var popup = new tt.Popup({ offset: popupOffset });

        reverseGeocoding(marker, popup);

        marker.setPopup(popup).togglePopup();

        // GET ADDRESS
        function reverseGeocoding(marker, popup) {

          const tt = window.tt;

          tt.services.reverseGeocode({

            key: 'iTF86GRA2V5iGjM6LMMV54lrK8v6zC1w',

            position: marker.getLngLat()

          }).go().then(function (result) {

            console.log(result.addresses[0].address.freeformAddress);

            popup.setHTML(result.addresses[0].address.freeformAddress);

          })

        }

      }
      addMarker(map);
    })


    return {

      mapRef,

    };

  }

}

</script> 
        

<template>
  <h1>Vue 3 TomTom Maps Demo</h1>

  <div id='map' ref="mapRef"></div>
</template> 
 

<style lang="scss" scoped>
#map {

  height: 50vh;

  width: 50vw;

}
</style>

