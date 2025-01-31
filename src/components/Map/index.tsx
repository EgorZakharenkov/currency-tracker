import { useEffect, useRef } from 'react';

import maplibregl from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

import { MapContainer, MapWrap } from '@/components/Map/styled';

interface MapProps<T extends { name: string; coordinates: number[] }> {
  lng: number;
  lat: number;
  markers: T[];
}

export const Map = <T extends { name: string; coordinates: number[] }>({ lng, lat, markers }: MapProps<T>) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markersMap = useRef<maplibregl.Marker[]>([]);

  const zoom = 14;
  const API_KEY = process.env.MAP_API;

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
  }, [API_KEY, lng, lat, zoom]);

  useEffect(() => {
    if (!map.current) return;

    markersMap.current.forEach((marker) => marker.remove());
    markersMap.current = [];

    markers.forEach((bank) => {
      const marker = new maplibregl.Marker()
        .setLngLat([bank.coordinates[0], bank.coordinates[1]])
        .setPopup(new maplibregl.Popup({ offset: 25 }).setText(bank.name))
        .addTo(map.current as maplibregl.Map);

      markersMap.current.push(marker);
    });
  }, [markers]);

  return (
    <MapWrap>
      <MapContainer ref={mapContainer} />
    </MapWrap>
  );
};
