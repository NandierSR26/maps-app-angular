import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef
  @Input() lngLat?: [number, number]

  public map?: Map
  public currentLngLat: LngLat = new LngLat(
    -74.11197515027442,
    4.633463636471802
  );

  ngAfterViewInit(): void {
    if(!this.lngLat) throw "LngLat can't be null"
    if(!this.divMap) throw "Map <Div /> not found"

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map)
  }

}
