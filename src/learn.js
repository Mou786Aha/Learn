#!@GJS@ -m
imports.package.init({
   name: '@PACKAGE_NAME@',
   version: '@PACKAGE_VERSION@',
   prefix: '@PREFIX@',
   libdir: '@LIBDIR@',
});
import Gtk from 'gi://Gtk?version=4.0';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
const loop = new GLib.MainLoop(null,false);
const idle_source = GLib.idle_add(GLib.PRIORITY_DEFAULT_IDLE,() => {

   const app = GObject.registerClass({},
      class app extends Gtk.Application{
         vfunc_activate(){
            const win = new Gtk.ApplicationWindow({application: this});
            const btn = new Gtk.Button();
            btn.set_child(new Gtk.Image({iconName: 'edit-copy'}));
            btn.connect('clicked', () => {
               console.log("Clicked!");
            });
            win.child = btn;
            win.present();
         }
      });
      function main(argv = []){
         const start_app = new app({'application-id': 'org.my.learn'});
         start_app.run(argv);
      }
      main();
   loop.quit();
   return GLib.SOURCE_REMOVE;
});
loop.run();