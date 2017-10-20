import { NgModule } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@NgModule({
  providers: [
    GoogleMaps,
  ]
})
export class HomeModule {}
