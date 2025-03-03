// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

// #[tauri::command]
// fn get_save_location(app: tauri::AppHandle) -> Option<String> {
//     let path = app.dialog().file().pick_folder(|folder_path| {
//         // do something with the optional folder path here
//         // the folder path is `None` if the user closed the dialog
//     });
// }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let app = tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .build(tauri::generate_context!())
        .expect("error while running tauri application");

    app.run(|app_handle, _event| {
        let app_handle = app_handle.clone();
        std::thread::spawn(move || {
            open_tome_manager(&app_handle);
        });
    });
}

async fn open_tome_manager(app: &tauri::AppHandle) {
    let _wv_window = tauri::WebviewWindowBuilder::new(
        app,
        "manager",                                   // Unique label
        tauri::WebviewUrl::App("index.html".into()), // Change to your actual manager UI
    )
    .title("Tome: Library")
    .inner_size(800.0, 600.0) // Fixed size
    .resizable(false) // Disable resizing
    .build()
    .expect("Failed to create manager window");
}

async fn open_main_window(app: &tauri::AppHandle) {
    let _wv_window = tauri::WebviewWindowBuilder::new(
        app,
        "main",                                      // Unique label
        tauri::WebviewUrl::App("index.html".into()), // Main app UI
    )
    .title("Tome")
    .inner_size(800.0, 600.0)
    .build()
    .expect("Failed to create main window");
}
