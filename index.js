'use strict'

const { NativeModules } = require('react-native');
const { ImagePickerManager } = NativeModules;

const DEFAULT_OPTIONS = {
  title: 'Foto wãhlen',
  cancelButtonTitle: 'Abbrechen',
  takePhotoButtonTitle: 'Foto aufnehmen…',
  chooseFromLibraryButtonTitle: 'Foto hochladen…',
  quality: 1.0,
  allowsEditing: false,
  permissionDenied: {
    title: 'Zugriff untersagt',
    text: 'Du hast JobNinja den Zugriff auf Deine Kamera untersagt.',
    reTryTitle: 'Wiederholen',
    okTitle: 'OK',
  }
};

module.exports = {
  ...ImagePickerManager,
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.showImagePicker({...DEFAULT_OPTIONS, ...options}, callback)
  }
}
