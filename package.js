Package.describe({
  name: 'fourquet:proto',
  version: '0.0.1',
  summary: 'Meteor Prototype Package for fourquet.io',
  git: 'https://github.com/fourquet/meteor-package-proto.git',
  documentation: 'README.md',
  license: 'LICENSE',
});

const packages = [
  'ecmascript',
];

const clientFiles = [

];
const serverFiles = [

];
const files = [

];

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(packages);
  api.imply(packages);
  api.addFiles(files);
  api.addFiles(clientFiles, 'client');
  api.addFiles(serverFiles, 'server');
});
