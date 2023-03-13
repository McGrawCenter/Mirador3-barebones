import Mirador from 'mirador/dist/es/src/index';
import annotationPlugins from 'mirador-annotations';
import AnnototAdapter from 'mirador-annotations/es/AnnototAdapter';
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter';

let params = new URL(document.location).searchParams;

if(params.get('manifest')) { var manifestURL = params.get('manifest'); }
else { var manifestURL = "https://data.artmuseum.princeton.edu/iiif/objects/3752"; }


const config = {
  id: 'mirador-viewer',
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  },
  window: {
  },
  windows: [{
    manifestId: manifestURL
  }],
}
Mirador.viewer(config, [
  ...annotationPlugins,
]);
