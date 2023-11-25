configure_file(
    input : 'learn.js',
    output : APP_ID,
    configuration : {
        'GJS': find_program('gjs').full_path(),
        'PACKAGE_NAME': APP_ID,
        'PACKAGE_VERSION': meson.project_version(),
        'PREFIX': get_option('prefix'),
        'LIBDIR': get_option('prefix') / get_option('libdir')
    },
    install_dir: get_option('bindir'),
    install_mode: 'rwxr-xr-x'
)
app_resources = gnome.compile_resources(
    'org.my.learn.src',
    'res.xml',
    gresource_bundle: true,
    install: true,
    install_dir : get_option('datadir') / APP_ID
)